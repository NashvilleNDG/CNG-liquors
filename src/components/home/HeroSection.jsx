import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const STORE_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/4463d18c5_CNGHeroImage.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={STORE_IMAGE}
          alt="CNG Wine & Spirits Store"
          className="w-full h-full object-cover"
          fetchpriority="high"
          width="1920"
          height="800"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/90 to-[#1A1A1A]/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-2.5 bg-[#722F37] text-white text-sm tracking-widest uppercase font-semibold rounded-md">
                Murfreesboro's Premier Liquor Store
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-center"
            >
              Discover <span className="text-[#C9A962]">Exceptional</span> Spirits
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed text-center"
            >
              Your destination for premium wines, craft spirits, and artisan beers. 
              Serving Murfreesboro, Tennessee with expertise and passion since day one.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            >
              <Link
                to={createPageUrl('Selection')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#722F37] hover:bg-[#8B3A42] text-white rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-[#722F37]/40 hover:shadow-[#722F37]/60 hover:scale-105"
              >
                Explore Our Selection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#C9A962] hover:bg-[#C9A962] text-[#C9A962] hover:text-[#1A1A1A] rounded-lg font-semibold transition-all duration-300"
              >
                Visit Us Today
              </Link>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex flex-col items-center text-center gap-3 p-5 bg-transparent rounded-xl border-2 border-[#C9A962]">
                <div className="p-3 bg-[#722F37] rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#C9A962] text-xs font-bold uppercase tracking-wide mb-1">Location</p>
                  <p className="text-white font-semibold text-sm">2750 S Rutherford Blvd</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 p-5 bg-transparent rounded-xl border-2 border-[#C9A962]">
                <div className="p-3 bg-[#722F37] rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#C9A962] text-xs font-bold uppercase tracking-wide mb-1">Open Today</p>
                  <p className="text-white font-semibold">8 AM – 11 PM</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 p-5 bg-transparent rounded-xl border-2 border-[#C9A962]">
                <div className="p-3 bg-[#722F37] rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#C9A962] text-xs font-bold uppercase tracking-wide mb-1">Call Us</p>
                  <p className="text-white font-semibold">(615) 895-8777</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}