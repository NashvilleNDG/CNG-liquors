import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: "Fine Wines",
    description: "From Napa Valley to Bordeaux, explore our world-class wine collection",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&q=60&auto=format",
    color: "from-[#722F37]"
  },
  {
    name: "Premium Spirits",
    description: "Whiskey, vodka, rum, gin, and more from top distilleries",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300&q=60&auto=format",
    color: "from-[#2E4A7D]"
  },
  {
    name: "Craft Beer",
    description: "Local favorites and international craft brews",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=300&q=60&auto=format",
    color: "from-[#C9A962]"
  },
  {
    name: "Champagne & Sparkling",
    description: "Celebrate life's moments with our bubbly selection",
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=300&q=60&auto=format",
    color: "from-[#1A1A1A]"
  }
];

export default function ProductCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#722F37] uppercase tracking-wider text-sm font-medium">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mt-4 mb-6">
            Explore Our Selection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover premium beverages carefully selected to satisfy every palate and occasion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Link
                to={createPageUrl('Selection')}
                className="group block relative h-96 rounded-2xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={`${category.name} at CNG Wine & Spirits Murfreesboro`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width="300"
                  height="450"
                  decoding="async"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color}/80 to-transparent`} />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#C9A962] font-medium text-sm group-hover:gap-4 transition-all">
                    <span>View Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}