import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const hours = [
  { day: "Monday", hours: "8 AM – 11 PM" },
  { day: "Tuesday", hours: "8 AM – 11 PM" },
  { day: "Wednesday", hours: "8 AM – 11 PM" },
  { day: "Thursday", hours: "8 AM – 11 PM" },
  { day: "Friday", hours: "8 AM – 11 PM" },
  { day: "Saturday", hours: "8 AM – 11 PM" },
  { day: "Sunday", hours: "10 AM – 10 PM" },
];

export default function StoreHours() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#722F37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2E4A7D]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Store Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6 md:justify-start justify-center">
              <div className="p-3 bg-[#722F37]/30 rounded-xl">
                <Clock className="w-6 h-6 text-[#C9A962]" />
              </div>
              <span className="text-[#C9A962] uppercase tracking-wider text-sm font-medium">
                Store Hours
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 md:text-left text-center">
              Visit Us Today
            </h2>

            <div className="space-y-3">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center py-3 px-4 rounded-lg transition-all ${
                    item.day === today
                      ? 'bg-[#722F37]/30 border border-[#722F37]/50'
                      : 'bg-white/5'
                  }`}
                >
                  <span className={`font-medium ${item.day === today ? 'text-[#C9A962]' : 'text-white'}`}>
                    {item.day}
                    {item.day === today && (
                      <span className="ml-2 text-xs bg-[#C9A962] text-[#1A1A1A] px-2 py-0.5 rounded-full">
                        Today
                      </span>
                    )}
                  </span>
                  <span className="text-gray-400">{item.hours}</span>
                </div>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <h3 className="text-white text-center mb-4 font-medium">Follow Us</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.instagram.com/cngliquor/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#E4405F] rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Follow us on Instagram">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/CNGLIQUOR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Follow us on Facebook">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.youtube.com/@CNGWineandSpirits" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Subscribe on YouTube">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@cngwinespirits" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#000000] rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Follow us on TikTok">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href="https://www.pinterest.com/cngliquors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#E60023] rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Follow us on Pinterest">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/412364744_Pinteresticon.png" alt="Pinterest" className="w-5 h-5" width="20" height="20" loading="lazy" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#722F37] to-[#5A252C] p-10 rounded-3xl">
              <h3 className="text-3xl font-serif text-white mb-8 md:text-left text-center">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 md:flex-row flex-col md:items-start items-center md:text-left text-center">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Address</p>
                    <address className="text-white not-italic text-lg">
                      2750 S Rutherford Blvd,<br />Murfreesboro, TN 37130
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:flex-row flex-col md:items-start items-center md:text-left text-center">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Phone</p>
                    <a 
                      href="tel:+16158958777" 
                      className="text-white text-lg hover:text-[#C9A962] transition-colors"
                    >
                      (615) 895-8777
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:flex-row flex-col md:items-start items-center md:text-left text-center">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <a 
                      href="mailto:cngliquors@gmail.com" 
                      className="text-white text-lg hover:text-[#C9A962] transition-colors"
                    >
                      cngliquors@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20 md:text-left text-center">
                <a
                  href="https://maps.google.com/?q=2750+S+Rutherford+Blvd,+Murfreesboro,+TN+37130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A962] hover:bg-[#B8985A] text-[#1A1A1A] rounded-lg font-medium transition-all"
                >
                  Get Directions
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}