import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function DeliveryPartners() {
  const doordashLink = "https://www.doordash.com/en/convenience/store/cng-wine-%26-spirits-murfreesboro-2517144/?srsltid=AfmBOoox9ZN9lXNizvsnMre6B5M9URBWcrWl2oug4VZfDkiN8afxcBCJ";
  const ubereatsLink = "https://www.ubereats.com/store/cng-wine-%26-spirits/wZSMW6AQVoip9eW1_Kujyw?srsltid=AfmBOoqoYeaaZ_WWv7lkNGAwlGbRBlfZZyPJZhDVzLmt9A2e8AW3xEBN";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">
            Choose Your Delivery Partner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Order from CNG Wine & Spirits through your preferred delivery app and enjoy fast, reliable service to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* DoorDash Card */}
          <motion.a
            href={doordashLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-[#FF3008] to-[#E62B00] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
          >
            <div className="bg-white rounded-xl p-6 mb-6">
              <svg className="w-32 h-auto mx-auto" viewBox="0 0 200 50" fill="#FF3008">
                <text x="10" y="35" fontSize="28" fontWeight="bold" fontFamily="Arial">DoorDash</text>
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-white mb-3 text-center">Order on DoorDash</h3>
            <p className="text-white/90 text-center mb-6">
              Fast delivery from your favorite liquor store in Murfreesboro
            </p>
            <div className="bg-white/10 rounded-lg p-4 text-white text-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Track your order in real-time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>30-60 minute delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>DashPass benefits available</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                Open DoorDash App
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </motion.a>

          {/* Uber Eats Card */}
          <motion.a
            href={ubereatsLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[#06C167] to-[#05AB5C] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
          >
            <div className="bg-white rounded-xl p-6 mb-6">
              <svg className="w-32 h-auto mx-auto" viewBox="0 0 200 50" fill="#06C167">
                <text x="10" y="35" fontSize="28" fontWeight="bold" fontFamily="Arial">Uber Eats</text>
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-white mb-3 text-center">Order on Uber Eats</h3>
            <p className="text-white/90 text-center mb-6">
              Reliable alcohol delivery service to Murfreesboro homes
            </p>
            <div className="bg-white/10 rounded-lg p-4 text-white text-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Live order tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Quick 30-60 minute delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Uber One member perks</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                Open Uber Eats App
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}