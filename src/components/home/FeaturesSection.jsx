import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Award, Users, Truck } from 'lucide-react';

const features = [
  {
    icon: Wine,
    title: "Premium Selection",
    description: "Curated collection of fine wines, craft spirits, and artisan beers from around the world."
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    description: "Our knowledgeable staff helps you find the perfect bottle for any occasion."
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Proudly serving Murfreesboro and Rutherford County with exceptional service."
  },
  {
    icon: Truck,
    title: "Convenient Location",
    description: "Easy access on S Rutherford Blvd with ample parking for quick visits."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#F9F7F4]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#722F37] uppercase tracking-wider text-sm font-medium">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mt-4 mb-6">
            Your Trusted Liquor Store
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the difference at CNG Wine & Spirits – where quality meets exceptional service 
            in the heart of Murfreesboro, Tennessee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-gray-100 hover:border-[#722F37]/20 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#722F37] to-[#8B3A42] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}