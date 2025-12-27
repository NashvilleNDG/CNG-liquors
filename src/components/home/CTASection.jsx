import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-[#F9F7F4] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2020] rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#722F37]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C9A962]/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Ready to Discover Your
              <span className="text-[#C9A962]"> New Favorite?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Visit CNG Wine & Spirits today and let our expert team help you find the perfect bottle. 
              Whether you're celebrating, gifting, or simply enjoying, we have something special for you.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#722F37] hover:bg-[#8B3A42] text-white rounded-lg font-medium transition-all"
              >
                Visit Our Store
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+16158958777"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#C9A962]/50 hover:border-[#C9A962] text-[#C9A962] rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base"
              >
                <Phone className="w-5 h-5" />
                Call (615) 895-8777
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}