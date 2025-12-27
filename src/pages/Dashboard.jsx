import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { base44 } from "@/api/base44Client";
import { Download, LogOut, Mail, MessageCircle, RefreshCw, Calendar, User, Phone, Lock, Settings, X } from 'lucide-react';

export default function Dashboard() {
  const [contactEnquiries, setContactEnquiries] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('contacts'); // 'contacts' or 'subscribers'
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const navigate = useNavigate();

  // Check authentication on mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/Login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Fetch Contact Enquiries
      const contacts = await base44.entities.ContactEnquiry.list();
      setContactEnquiries(contacts || []);

      // Fetch Subscribers
      const subs = await base44.entities.Subscriber.list();
      setSubscribers(subs || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to fetch data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    toast.success('Logged out successfully');
    navigate('/Login');
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setIsChangingPassword(true);

    // Validation
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error('New passwords do not match!');
      setIsChangingPassword(false);
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      toast.error('New password must be at least 6 characters long!');
      setIsChangingPassword(false);
      return;
    }

    try {
      console.log('=== Password Change Attempt ===');
      console.log('base44.auth object:', base44.auth);
      console.log('Available auth methods:', Object.keys(base44.auth || {}));
      console.log('base44.auth methods details:', Object.getOwnPropertyNames(base44.auth || {}));
      
      // Get user from localStorage
      const userStr = localStorage.getItem('user');
      const user = userStr ? JSON.parse(userStr) : null;
      console.log('Current user:', user);

      // Check if Base44 has password change methods
      const authMethods = base44.auth || {};
      let passwordChanged = false;
      let lastError = null;

      // Try different possible method names and parameter variations
      const methodsToTry = [
        // Method: updatePassword with password
        { 
          name: 'updatePassword',
          params: [{ password: passwordForm.newPassword }],
          description: 'updatePassword({ password })'
        },
        // Method: updatePassword with newPassword
        { 
          name: 'updatePassword',
          params: [{ newPassword: passwordForm.newPassword }],
          description: 'updatePassword({ newPassword })'
        },
        // Method: setPassword
        { 
          name: 'setPassword',
          params: [{ password: passwordForm.newPassword }],
          description: 'setPassword({ password })'
        },
        { 
          name: 'setPassword',
          params: [{ newPassword: passwordForm.newPassword }],
          description: 'setPassword({ newPassword })'
        },
        // Method: changePassword
        { 
          name: 'changePassword',
          params: [{ password: passwordForm.newPassword }],
          description: 'changePassword({ password })'
        },
        { 
          name: 'changePassword',
          params: [{ newPassword: passwordForm.newPassword }],
          description: 'changePassword({ newPassword })'
        },
      ];

      // Add user ID variations if user exists
      if (user?.id) {
        methodsToTry.push(
          { 
            name: 'updatePassword',
            params: [{ userId: user.id, password: passwordForm.newPassword }],
            description: 'updatePassword({ userId, password })'
          },
          { 
            name: 'updatePassword',
            params: [{ userId: user.id, newPassword: passwordForm.newPassword }],
            description: 'updatePassword({ userId, newPassword })'
          },
          { 
            name: 'setPassword',
            params: [{ userId: user.id, password: passwordForm.newPassword }],
            description: 'setPassword({ userId, password })'
          }
        );
      }

      // Try each method
      for (const method of methodsToTry) {
        if (typeof authMethods[method.name] === 'function') {
          for (const params of method.params) {
            try {
              console.log(`Trying ${method.description}...`);
              const result = await authMethods[method.name](params);
              console.log(`✓ Success! Password changed via ${method.description}:`, result);
              passwordChanged = true;
              break;
            } catch (err) {
              console.warn(`✗ Failed: ${method.description}`, err);
              lastError = err;
              // Continue to next method
            }
          }
          if (passwordChanged) break;
        } else {
          console.log(`Method ${method.name} is not available (not a function)`);
        }
      }

      if (!passwordChanged) {
        // Base44 SDK doesn't have direct password change method or all attempts failed
        // Show helpful message with instructions
        console.error('All password change methods failed. Last error:', lastError);
        console.error('Available methods in base44.auth:', Object.keys(authMethods));
        console.error('Please check Base44 SDK documentation for the correct password change method.');
        
        toast.error('Password change is not available through this dashboard. Please change your password in the Base44 dashboard at https://app.base44.com or use the "Forgot Password" option on the login page.', {
          duration: 8000
        });
      } else {
        // Success
        toast.success('Password changed successfully!');
        setPasswordForm({
          newPassword: '',
          confirmPassword: ''
        });
        setShowChangePassword(false);
      }
    } catch (error) {
      console.error('Password change error:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        error: error,
        base44Auth: base44.auth
      });
      toast.error(error.message || 'Failed to change password. Please check the browser console (F12) for details.');
    } finally {
      setIsChangingPassword(false);
    }
  };

  const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      toast.error('No data to export');
      return;
    }

    // Get headers from first object
    const headers = Object.keys(data[0]);
    
    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = row[header];
          // Handle values that might contain commas or quotes
          if (value === null || value === undefined) return '';
          const stringValue = String(value);
          if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
            return `"${stringValue.replace(/"/g, '""')}"`;
          }
          return stringValue;
        }).join(',')
      )
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`Exported ${data.length} records to ${filename}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-[#722F37] mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      {/* Header */}
      <header className="bg-[#1A1A1A] text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-serif">CNG Wine & Spirits</h1>
              <p className="text-gray-400 text-sm">Admin Dashboard</p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => setShowChangePassword(!showChangePassword)}
                variant="outline"
                size="sm"
                className="border-white bg-white text-[#1A1A1A] hover:bg-gray-100"
              >
                <Settings className="mr-2 w-4 h-4" />
                Change Password
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-white bg-white text-[#1A1A1A] hover:bg-gray-100"
              >
                <LogOut className="mr-2 w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Change Password Form */}
        <AnimatePresence>
          {showChangePassword && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-md p-6 mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#1A1A1A] flex items-center">
                  <Lock className="mr-2 w-5 h-5 text-[#722F37]" />
                  Change Password
                </h2>
                <Button
                  onClick={() => {
                    setShowChangePassword(false);
                    setPasswordForm({
                      newPassword: '',
                      confirmPassword: ''
                    });
                  }}
                  variant="ghost"
                  size="sm"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <form onSubmit={handleChangePassword} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-[#1A1A1A]">
                      New Password *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="newPassword"
                        type="password"
                        required
                        value={passwordForm.newPassword}
                        onChange={(e) =>
                          setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                        }
                        placeholder="Enter new password"
                        className="pl-10"
                        minLength={6}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-[#1A1A1A]">
                      Confirm New Password *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        required
                        value={passwordForm.confirmPassword}
                        onChange={(e) =>
                          setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                        }
                        placeholder="Confirm new password"
                        className="pl-10"
                        minLength={6}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowChangePassword(false);
                      setPasswordForm({
                        newPassword: '',
                        confirmPassword: ''
                      });
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isChangingPassword}
                    className="bg-[#722F37] hover:bg-[#8B3A42] text-white"
                  >
                    {isChangingPassword ? 'Changing Password...' : 'Change Password'}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Contact Enquiries</p>
                <p className="text-3xl font-bold text-[#722F37]">{contactEnquiries.length}</p>
              </div>
              <MessageCircle className="w-12 h-12 text-[#722F37] opacity-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Newsletter Subscribers</p>
                <p className="text-3xl font-bold text-[#722F37]">{subscribers.length}</p>
              </div>
              <Mail className="w-12 h-12 text-[#722F37] opacity-20" />
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-6 py-4 font-medium text-sm ${
                  activeTab === 'contacts'
                    ? 'border-b-2 border-[#722F37] text-[#722F37]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Contact Enquiries ({contactEnquiries.length})
              </button>
              <button
                onClick={() => setActiveTab('subscribers')}
                className={`px-6 py-4 font-medium text-sm ${
                  activeTab === 'subscribers'
                    ? 'border-b-2 border-[#722F37] text-[#722F37]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Subscribers ({subscribers.length})
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#1A1A1A]">
                {activeTab === 'contacts' ? 'Contact Enquiries' : 'Newsletter Subscribers'}
              </h2>
              <div className="flex gap-3">
                <Button
                  onClick={fetchData}
                  variant="outline"
                  size="sm"
                >
                  <RefreshCw className="mr-2 w-4 h-4" />
                  Refresh
                </Button>
                <Button
                  onClick={() => exportToCSV(
                    activeTab === 'contacts' ? contactEnquiries : subscribers,
                    activeTab === 'contacts' ? 'contact-enquiries.csv' : 'subscribers.csv'
                  )}
                  variant="outline"
                  size="sm"
                  className="bg-[#722F37] text-white hover:bg-[#8B3A42]"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Export CSV
                </Button>
              </div>
            </div>

            {/* Contact Enquiries Table */}
            {activeTab === 'contacts' && (
              <div className="overflow-x-auto">
                {contactEnquiries.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No contact enquiries yet.</p>
                ) : (
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {contactEnquiries.map((enquiry, index) => (
                        <tr key={enquiry.id || index} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                              {formatDate(enquiry.created_at || enquiry.createdAt || enquiry.date)}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-2 text-gray-400" />
                              {enquiry.name || 'N/A'}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 mr-2 text-gray-400" />
                              {enquiry.email || 'N/A'}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <Phone className="w-4 h-4 mr-2 text-gray-400" />
                              {enquiry.phone || 'N/A'}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500">
                            <div className="max-w-md truncate" title={enquiry.message}>
                              {enquiry.message || 'N/A'}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}

            {/* Subscribers Table */}
            {activeTab === 'subscribers' && (
              <div className="overflow-x-auto">
                {subscribers.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No subscribers yet.</p>
                ) : (
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {subscribers.map((subscriber, index) => (
                        <tr key={subscriber.id || index} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                              {formatDate(subscriber.subscribed_date || subscriber.created_at || subscriber.createdAt || subscriber.date)}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 mr-2 text-gray-400" />
                              {subscriber.email || 'N/A'}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

