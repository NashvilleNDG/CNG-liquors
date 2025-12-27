import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { base44 } from "@/api/base44Client";

export default function StayConnected() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Save to database
      await base44.entities.Subscriber.create({
        email,
        subscribed_date: new Date().toISOString()
      });

      // Send email notification
      const mailtoLink = `mailto:suraj@nashvilledigitalgroup.com?subject=New Newsletter Subscription&body=New subscriber:%0D%0AEmail: ${email}%0D%0ADate: ${new Date().toLocaleString()}`;
      window.location.href = mailtoLink;

      toast.success('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#F9F7F4]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative line */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-0.5 bg-[#722F37]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
            Stay Connected
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Subscribe to receive updates on new arrivals, special offers, and events
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="h-14 pl-12 text-base border-2 border-gray-200 focus:border-[#722F37]"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-14 px-10 bg-[#C9A962] hover:bg-[#B8985A] text-[#1A1A1A] font-semibold text-base uppercase tracking-wider"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}