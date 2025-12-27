import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/ui/SEOHead';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { base44 } from "@/api/base44Client";

const hours = [
  { day: "Monday", hours: "8 AM – 11 PM" },
  { day: "Tuesday", hours: "8 AM – 11 PM" },
  { day: "Wednesday", hours: "8 AM – 11 PM" },
  { day: "Thursday", hours: "8 AM – 11 PM" },
  { day: "Friday", hours: "8 AM – 11 PM" },
  { day: "Saturday", hours: "8 AM – 11 PM" },
  { day: "Sunday", hours: "10 AM – 10 PM" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      await base44.entities.ContactEnquiry.create({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      // Send email notifications to both addresses with proper error handling
      const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #722F37; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; background-color: white; }
    th { background-color: #722F37; color: white; padding: 12px; text-align: left; font-weight: 600; }
    td { padding: 12px; border-bottom: 1px solid #eee; }
    .label { font-weight: 600; color: #722F37; width: 120px; }
    .message-box { background-color: white; padding: 15px; border-left: 4px solid #722F37; margin-top: 10px; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
      <p style="margin: 5px 0 0 0; font-size: 14px;">CNG Wine & Spirits Website</p>
    </div>
    <div class="content">
      <table>
        <tr>
          <th colspan="2">Contact Information</th>
        </tr>
        <tr>
          <td class="label">Name</td>
          <td>${formData.name}</td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td><a href="mailto:${formData.email}" style="color: #722F37;">${formData.email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td>${formData.phone || 'Not provided'}</td>
        </tr>
      </table>
      
      <table>
        <tr>
          <th>Message</th>
        </tr>
        <tr>
          <td>
            <div class="message-box">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </td>
        </tr>
      </table>
      
      <div class="footer">
        <p>This email was sent from the CNG Wine & Spirits contact form</p>
      </div>
    </div>
  </div>
</body>
</html>
      `;

      // Send to both emails with Promise.allSettled to ensure both attempts are made
      await Promise.allSettled([
        base44.integrations.Core.SendEmail({
          to: 'suraj@nashvilledigitalgroup.com',
          subject: `Website Inquiry from ${formData.name}`,
          body: emailBody
        }),
        base44.integrations.Core.SendEmail({
          to: 'cngliquors@gmail.com',
          subject: `Website Inquiry from ${formData.name}`,
          body: emailBody
        })
      ]).then(results => {
        results.forEach((result, index) => {
          const email = index === 0 ? 'suraj@nashvilledigitalgroup.com' : 'cngliquors@gmail.com';
          if (result.status === 'rejected') {
            console.error(`Failed to send email to ${email}:`, result.reason);
          } else {
            console.log(`Email sent successfully to ${email}`);
          }
        });
      });

      // Show success message
      toast.success('Thank you! Our team will respond to you soon!', {
        duration: 5000,
        position: 'top-center'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again or call us directly.', {
        duration: 5000,
        position: 'top-center'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead 
        title="Contact CNG Wine & Spirits | Murfreesboro, TN Liquor Store Near Me"
        description="Get in touch with CNG Wine & Spirits, your local liquor store in Murfreesboro, TN. Call (615) 895-8777, email, or visit us at 2750 S Rutherford Blvd for the best selection of wines, spirits, and beers."
      />

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 bg-gradient-to-br from-[#1A1A1A] to-[#722F37] overflow-hidden -mt-20 pt-20">
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#C9A962] uppercase tracking-wider text-sm font-medium"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white mt-2"
            >
              Contact Us
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#F9F7F4]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl font-serif text-[#1A1A1A] mb-8">
                Visit Our Store
              </h2>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-[#722F37]/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#722F37]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A1A1A] mb-1">Address</h3>
                    <address className="text-gray-600 not-italic">
                      2750 S Rutherford Blvd<br />
                      Murfreesboro, TN 37130
                    </address>
                    <a
                      href="https://maps.google.com/?q=2750+S+Rutherford+Blvd,+Murfreesboro,+TN+37130"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#722F37] font-medium mt-3 hover:underline"
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-[#722F37]/10 rounded-xl">
                    <Phone className="w-6 h-6 text-[#722F37]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A1A1A] mb-1">Phone</h3>
                    <a 
                      href="tel:+16158958777"
                      className="text-gray-600 hover:text-[#722F37] transition-colors text-lg"
                    >
                      (615) 895-8777
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-[#722F37]/10 rounded-xl">
                    <Mail className="w-6 h-6 text-[#722F37]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A1A1A] mb-1">Email</h3>
                    <a 
                      href="mailto:cngliquors@gmail.com"
                      className="text-gray-600 hover:text-[#722F37] transition-colors"
                    >
                      cngliquors@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Store Hours */}
              <div className="mt-10 bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#722F37]/10 rounded-xl">
                    <Clock className="w-6 h-6 text-[#722F37]" />
                  </div>
                  <h3 className="text-xl font-serif text-[#1A1A1A]">Store Hours</h3>
                </div>
                <div className="space-y-3">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                        item.day === today
                          ? 'bg-[#722F37]/10'
                          : ''
                      }`}
                    >
                      <span className={`font-medium ${item.day === today ? 'text-[#722F37]' : 'text-gray-700'}`}>
                        {item.day}
                        {item.day === today && (
                          <span className="ml-2 text-xs bg-[#722F37] text-white px-2 py-0.5 rounded-full">
                            Today
                          </span>
                        )}
                      </span>
                      <span className="text-gray-600">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#722F37]/10 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-[#722F37]" />
                  </div>
                  <h2 className="text-2xl font-serif text-[#1A1A1A]">Send Us a Message</h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Have a question about a product or want to place a special order? 
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Smith"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(615) 555-0000"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="How can we help you?"
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-[#722F37] hover:bg-[#8B3A42] text-white font-medium"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.9864872!2d-86.3924887!3d35.8087287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8863f8e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5!2s2750%20S%20Rutherford%20Blvd%2C%20Murfreesboro%2C%20TN%2037130!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          importance="low"
          title="CNG Wine & Spirits - 2750 S Rutherford Blvd, Murfreesboro, TN 37130"
        />
      </section>
    </>
  );
}