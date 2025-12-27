import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { base44, REQUIRES_AUTH } from "@/api/base44Client";
import { Mail, Lock, LogIn } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Attempting login with:', { email, password: '***' });
      
      // Sign in using Base44 auth
      const result = await base44.auth.signIn({
        email,
        password,
      });

      console.log('Login result:', result);

      // Handle different response structures
      let user = null;
      let error = null;

      if (result) {
        // Check if result has user/error properties
        if (result.user) {
          user = result.user;
        } else if (result.error) {
          error = result.error;
        } else {
          // If result is the user object directly
          user = result;
        }
      }

      if (error) {
        console.error('Login error:', error);
        toast.error(error.message || 'Invalid email or password. Please try again.');
        setIsLoading(false);
        return;
      }

      // For development mode (REQUIRES_AUTH: false), allow login with any credentials
      // or if user object exists
      if (user || !REQUIRES_AUTH) {
        // Store user session
        const userData = user || { email, id: 'dev-user' };
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isAuthenticated', 'true');
        
        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/Dashboard');
        }, 100);
      } else {
        console.error('No user returned from login');
        toast.error('Login failed. Please check your credentials.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      
      // If authentication is disabled, allow bypass for development
      if (!REQUIRES_AUTH) {
        console.log('Authentication disabled - allowing development login');
        localStorage.setItem('user', JSON.stringify({ email, id: 'dev-user' }));
        localStorage.setItem('isAuthenticated', 'true');
        toast.success('Development login successful!');
        setTimeout(() => {
          navigate('/Dashboard');
        }, 100);
      } else {
        toast.error(error.message || 'An error occurred. Please try again.');
        setIsLoading(false);
      }
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    try {
      console.log('Initiating Google login...');
      
      // Check if Base44 has Google OAuth method
      if (base44.auth && typeof base44.auth.signInWithGoogle === 'function') {
        // Try using Base44 SDK method if available
        try {
          const result = await base44.auth.signInWithGoogle({
            redirectUri: `${window.location.origin}/Dashboard`
          });
          console.log('Google login result:', result);
          // If successful, handle the result
          if (result && result.user) {
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('isAuthenticated', 'true');
            toast.success('Login successful!');
            setTimeout(() => {
              navigate('/Dashboard');
            }, 100);
            return;
          }
        } catch (sdkError) {
          console.warn('Base44 SDK Google login method failed, trying direct URL redirect:', sdkError);
        }
      }
      
      // Fallback: Direct URL redirect to Base44 SSO
      // Base44 SSO redirect URI format: https://app.base44.com/api/apps/{APP_ID}/auth/sso/callback
      const appId = "6941d136f08b371ab7b95ffa";
      const redirectUri = `${window.location.origin}/auth/callback`;
      const ssoUrl = `https://app.base44.com/api/apps/${appId}/auth/sso/google?redirect_uri=${encodeURIComponent(redirectUri)}`;
      
      console.log('Redirecting to Base44 SSO:', ssoUrl);
      
      // Redirect to Base44 SSO (if configured)
      window.location.href = ssoUrl;
    } catch (error) {
      console.error('Google login error:', error);
      toast.error(error.message || 'Google login failed. Please try email/password login.');
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-lg shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-[#1A1A1A] mb-2">Admin Login</h1>
          <p className="text-gray-600">CNG Wine & Spirits Dashboard</p>
        </div>

        {/* Google Login Button */}
        <div className="mb-6">
          <Button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading || isLoading}
            className="w-full h-12 bg-white hover:bg-gray-50 text-gray-700 font-semibold border-2 border-gray-300"
          >
            {isGoogleLoading ? (
              'Connecting to Google...'
            ) : (
              <>
                <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </>
            )}
          </Button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#1A1A1A]">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="pl-10 h-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#1A1A1A]">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="pl-10 h-12"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading || isGoogleLoading}
            className="w-full h-12 bg-[#722F37] hover:bg-[#8B3A42] text-white font-semibold"
          >
            {isLoading ? (
              'Logging in...'
            ) : (
              <>
                <LogIn className="mr-2 w-5 h-5" />
                Login
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Access restricted to authorized personnel only</p>
          <p className="mt-2 text-xs">
            Forgot password? Use Google login or contact administrator.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

