import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/ui/SEOHead';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Award, Users, MapPin, Heart, Star, CheckCircle } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/02d3c79c5_CNGLogoTransparent.png";
const STORE_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/192d1026a_CNGStore.png";

const values = [
  {
    icon: Award,
    title: "Quality Selection",
    description: "We carefully curate our inventory to bring you only the finest wines, spirits, and beers from around the world."
  },
  {
    icon: Users,
    title: "Expert Service",
    description: "Our knowledgeable staff is always ready to help you find the perfect bottle for any occasion or budget."
  },
  {
    icon: Heart,
    title: "Community First",
    description: "As a local Murfreesboro business, we're proud to serve our neighbors and support our community."
  },
  {
    icon: Star,
    title: "Competitive Prices",
    description: "Great value without compromising on quality – that's our promise to every customer who walks through our doors."
  }
];

const reasons = [
  "Wide selection of wines from around the world",
  "Premium bourbon and whiskey collection",
  "Local and craft beer favorites",
  "Knowledgeable and friendly staff",
  "Competitive everyday pricing",
  "Convenient location with easy parking",
  "Open 7 days a week",
  "Special orders available"
];

export default function About() {
  return (
    <>
      <SEOHead 
        title="About CNG Wine & Spirits | Best Liquor Store Murfreesboro, TN"
        description="Learn about CNG Wine & Spirits, your trusted liquor store near Murfreesboro, TN. We provide a premium selection of wines, spirits, and craft beers with exceptional service."
      />

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 bg-[#1A1A1A] overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1200&q=80"
            alt="About CNG Wine & Spirits"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#C9A962] uppercase tracking-wider text-sm font-medium"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white mt-2"
            >
              About CNG Wine & Spirits
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="text-[#722F37] uppercase tracking-wider text-sm font-medium">
                Welcome to CNG
              </span>
              <h2 className="text-4xl font-serif text-[#1A1A1A] mt-4 mb-6">
                Murfreesboro's Trusted
                <span className="text-[#722F37]"> Liquor Destination</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Located in the heart of Murfreesboro, Tennessee, CNG Wine & Spirits has been 
                  proudly serving our community with an exceptional selection of <Link to={createPageUrl('Selection')} className="text-[#722F37] hover:underline">wines, spirits, 
                  and craft beers</Link>.
                </p>
                <p>
                  Our mission is simple: provide our customers with quality products, competitive 
                  prices, and the kind of personalized service that turns first-time visitors 
                  into lifelong friends.
                </p>
                <p>
                  Whether you're a seasoned connoisseur looking for a rare vintage or someone 
                  exploring new flavors, our knowledgeable team is here to guide you to the 
                  perfect selection. <Link to={createPageUrl('Contact')} className="text-[#722F37] hover:underline">Visit our Murfreesboro store</Link> today.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-full h-full bg-[#C9A962]/20 rounded-3xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-[#722F37]/20">
                <img
                  src={STORE_IMAGE}
                  alt="CNG Wine & Spirits Store - Murfreesboro, TN"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F9F7F4]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#722F37] uppercase tracking-wider text-sm font-medium">
              Our Values
            </span>
            <h2 className="text-4xl font-serif text-[#1A1A1A] mt-4">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#722F37] to-[#8B3A42] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="text-[#C9A962] uppercase tracking-wider text-sm font-medium">
                Why CNG?
              </span>
              <h2 className="text-4xl font-serif text-white mt-4 mb-8">
                Reasons to Shop With Us
              </h2>
              <ul className="space-y-4 text-left">
                {reasons.map((reason, index) => (
                  <motion.li
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-left">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="bg-white rounded-full p-8 shadow-2xl">
                <img
                  src={LOGO_URL}
                  alt="CNG Wine & Spirits Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#722F37]/10 rounded-full text-[#722F37] mb-6">
              <MapPin className="w-4 h-4" />
              Serving Murfreesboro & Rutherford County
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-6">
              Visit Us Today
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
              Stop by our store at 2750 S Rutherford Blvd. We look forward to helping you 
              discover your next favorite bottle!
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#722F37] hover:bg-[#8B3A42] text-white rounded-lg font-medium transition-all shadow-lg shadow-[#722F37]/30"
            >
              Get Directions
              <MapPin className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}