import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { base44 } from "@/api/base44Client";

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    // Track page visits
    const pageVisits = parseInt(localStorage.getItem('pageVisitCount') || '0');
    const sessionId = sessionStorage.getItem('popupSessionId');
    const lastShown = localStorage.getItem('emailPopupShown');
    const now = Date.now();
    const twoMinutes = 2 * 60 * 1000;
    
    // Increment page visit count
    localStorage.setItem('pageVisitCount', (pageVisits + 1).toString());
    
    // Check conditions to show popup:
    // 1. New tab/session (no sessionId)
    // 2. 5 or more page visits
    // 3. 2 minutes passed since last shown
    const shouldShow = 
      !sessionId || 
      pageVisits >= 5 || 
      !lastShown || 
      now - parseInt(lastShown) > twoMinutes;
    
    if (shouldShow) {
      // Create session ID for this tab
      if (!sessionId) {
        sessionStorage.setItem('popupSessionId', Date.now().toString());
      }
      
      // Reset page visit counter
      localStorage.setItem('pageVisitCount', '0');
      
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('emailPopupShown', Date.now().toString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.entities.Subscriber.create({ email });
      
      // Send notification emails
      await Promise.allSettled([
        base44.integrations.Core.SendEmail({
          to: 'suraj@nashvilledigitalgroup.com',
          subject: 'New Newsletter Subscription - CNG Wine & Spirits',
          body: `<h2>New Subscriber Alert</h2><p>A new user has subscribed to the newsletter:</p><p><strong>Email:</strong> ${email}</p>`
        }),
        base44.integrations.Core.SendEmail({
          to: 'cngliquors@gmail.com',
          subject: 'New Newsletter Subscription',
          body: `<h2>New Subscriber</h2><p>Email: ${email}</p>`
        })
      ]);

      setShowThankYou(true);
      setEmail('');
      
      setTimeout(() => {
        handleClose();
        setShowThankYou(false);
      }, 2000);
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('Something went wrong. Please try again.', {
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-x-4 top-[20%] md:left-[25%] md:right-auto md:top-[30%] z-50 max-w-md"
          >
            <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2020] rounded-3xl shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#722F37]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C9A962]/10 rounded-full blur-3xl" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="relative p-8 md:p-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-[#722F37]/30 rounded-2xl">
                    <Mail className="w-8 h-8 text-[#C9A962]" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-serif text-white text-center mb-3">
                  Stay Connected
                </h2>
                <p className="text-gray-300 text-center mb-6">
                  Join our community and be the first to hear about exclusive deals, 
                  new arrivals, and special events at CNG Wine & Spirits!
                </p>

                {showThankYou ? (
                  <div className="text-center py-8">
                    <h3 className="text-3xl font-serif text-[#C9A962] mb-2">Thank You!</h3>
                    <p className="text-gray-300">You've been successfully subscribed.</p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-[#722F37] hover:bg-[#8B3A42] text-white font-medium"
                      >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                      </Button>
                    </form>

                    <p className="text-xs text-gray-400 text-center mt-4">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}