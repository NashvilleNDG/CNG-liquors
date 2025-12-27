import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/ui/SEOHead';
import { Truck, Clock, Package, CheckCircle2, MapPin } from 'lucide-react';

export default function Delivery() {
  const doordashLink = "https://www.doordash.com/en/convenience/store/cng-wine-%26-spirits-murfreesboro-2517144/?srsltid=AfmBOoox9ZN9lXNizvsnMre6B5M9URBWcrWl2oug4VZfDkiN8afxcBCJ";
  const ubereatsLink = "https://www.ubereats.com/store/cng-wine-%26-spirits/wZSMW6AQVoip9eW1_Kujyw?srsltid=AfmBOoqoYeaaZ_WWv7lkNGAwlGbRBlfZZyPJZhDVzLmt9A2e8AW3xEBN";

  const benefits = [
    {
      icon: Clock,
      title: "Fast & Reliable",
      description: "Get your order delivered within 30-60 minutes through our trusted delivery partners"
    },
    {
      icon: Package,
      title: "Wide Selection",
      description: "Access our complete inventory of wines, spirits, and craft beers from your phone"
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description: "Contactless delivery options available with proper ID verification at your door"
    },
    {
      icon: CheckCircle2,
      title: "Easy Ordering",
      description: "Browse, select, and checkout in minutes through DoorDash or Uber Eats app"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Alcohol Delivery Murfreesboro TN | DoorDash & Uber Eats | CNG Wine & Spirits"
        description="Get wine, beer, and liquor delivered fast in Murfreesboro, TN! Order from CNG Wine & Spirits on DoorDash and Uber Eats. Same-day alcohol delivery available. Shop now!"
      />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-[#1A1A1A] overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=1200&q=80"
            alt="Alcohol delivery service in Murfreesboro TN"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/50" />
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#C9A962] uppercase tracking-wider text-sm font-medium"
            >
              Fast & Convenient Delivery
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-white mt-4 mb-6"
            >
              Order Online for Delivery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Get your favorite wines, spirits, and beers delivered right to your door in Murfreesboro, TN. Order through DoorDash or Uber Eats today!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={doordashLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF3008] hover:bg-[#E62B00] text-white rounded-lg font-medium transition-all shadow-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 011.547 1.547v.028a1.554 1.554 0 01-1.547 1.547H9.137a.589.589 0 00-.415 1.003l3.724 3.747a1.752 1.752 0 001.242.516h3.775c3.267 0 5.93-2.663 5.93-5.93v-.03a6.09 6.09 0 00-1.322-3.465z"/>
                </svg>
                Order on DoorDash
              </a>
              <a
                href={ubereatsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#06C167] hover:bg-[#05AB5C] text-white rounded-lg font-medium transition-all shadow-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.926 11.027c0 .703-.135 1.352-.42 1.893-.27.54-.675.972-1.162 1.27-.487.27-1.027.405-1.62.405-.594 0-1.108-.135-1.596-.405a2.83 2.83 0 01-1.135-1.27c-.27-.54-.405-1.19-.405-1.893 0-.703.135-1.352.405-1.92.27-.541.675-.973 1.135-1.243.488-.27 1.002-.405 1.596-.405.593 0 1.133.135 1.62.405.487.27.892.702 1.162 1.243.285.568.42 1.217.42 1.92zM8.18 6.84H6.612v7.29H8.18V6.84z"/>
                </svg>
                Order on Uber Eats
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Partners Section */}
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

      {/* Benefits Section */}
      <section className="py-20 bg-[#F9F7F4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">
              Why Order Alcohol Delivery?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience the convenience of having premium wines, spirits, and beers delivered straight to your door in Murfreesboro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#722F37]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#722F37]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">
              How Alcohol Delivery Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ordering from CNG Wine & Spirits is simple and secure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#722F37] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Browse & Select</h3>
              <p className="text-gray-600">
                Open DoorDash or Uber Eats, search for CNG Wine & Spirits, and browse our full selection of wines, spirits, and beers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#722F37] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Place Your Order</h3>
              <p className="text-gray-600">
                Add items to your cart, choose your delivery address in Murfreesboro, and complete your secure checkout.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#722F37] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Receive Delivery</h3>
              <p className="text-gray-600">
                Track your order in real-time and receive it at your door. Valid ID required upon delivery (21+).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-white text-center mb-8">Important Delivery Information</h2>
            <div className="bg-white/5 rounded-2xl p-8 space-y-4 text-white">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#C9A962]">Age Verification Required:</strong>
                  <span className="text-gray-300"> All orders require valid ID showing you are 21 years or older. The delivery driver will verify your age upon delivery.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#C9A962]">Delivery Hours:</strong>
                  <span className="text-gray-300"> Alcohol delivery is available during our store operating hours. Check the app for current availability.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#C9A962]">Delivery Area:</strong>
                  <span className="text-gray-300"> We deliver throughout Murfreesboro, TN and surrounding areas. Enter your address in the app to confirm delivery availability.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#C9A962]">Contactless Delivery:</strong>
                  <span className="text-gray-300"> Request contactless delivery in your order notes for a safer, no-contact experience.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Store CTA */}
      <section className="py-20 bg-[#F9F7F4]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <MapPin className="w-16 h-16 text-[#722F37] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-6">
              Prefer to Shop In-Store?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Visit CNG Wine & Spirits in Murfreesboro for personalized service, expert recommendations, and the chance to browse our complete selection in person. Our knowledgeable staff is ready to help you find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://maps.google.com/?q=2750+S+Rutherford+Blvd,+Murfreesboro,+TN+37130"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#722F37] hover:bg-[#8B3A42] text-white rounded-lg font-medium transition-all shadow-lg"
              >
                Get Directions
              </a>
              <a
                href="tel:+16158958777"
                className="px-8 py-4 border-2 border-[#722F37] text-[#722F37] hover:bg-[#722F37] hover:text-white rounded-lg font-medium transition-all"
              >
                Call (615) 895-8777
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}