import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#722F37] uppercase tracking-wider text-sm font-medium">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mt-4 mb-6">
            Visit Our Store
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
            Conveniently located at 2750 S Rutherford Blvd, Murfreesboro, TN 37130
          </p>
          <a
            href="https://maps.google.com/?q=2750+S+Rutherford+Blvd,+Murfreesboro,+TN+37130"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#722F37] hover:bg-[#8B3A42] text-white rounded-lg font-medium transition-all shadow-lg"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#722F37]/20"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.9864872!2d-86.3924887!3d35.8087287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8863f8e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5!2s2750%20S%20Rutherford%20Blvd%2C%20Murfreesboro%2C%20TN%2037130!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CNG Wine & Spirits Location Map"
          />
        </motion.div>

        {/* Address Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-3 text-gray-600"
        >
          <MapPin className="w-5 h-5 text-[#722F37]" />
          <address className="not-italic">
            2750 S Rutherford Blvd, Murfreesboro, TN 37130
          </address>
        </motion.div>
      </div>
    </section>
  );
}