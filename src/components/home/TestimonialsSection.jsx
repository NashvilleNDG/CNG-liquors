import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "M J",
    rating: 5,
    text: "First visit. Met KP. He's good people. Sampled a few and bought a few. Great experience. It's generally worth working with the professionals at good liquor stores and getting their inputs and suggestions, and that's especially the case at CNG! The bottles KP helped me pick will all be great sippers when I get around to popping the cork.",
    initials: "MJ",
    color: "bg-pink-500"
  },
  {
    name: "chad randolph",
    rating: 5,
    text: "Love this store. Stop by if you are in the Murfreesboro area. They will take care of you. Thank you Anderson and KP!!!",
    initials: "C",
    color: "bg-purple-500"
  },
  {
    name: "Jonathan A. Sawyer",
    rating: 5,
    text: "New to the area. I am extremely impressed with the customer service at CNG. They greeted me as I walked in and they had someone on the floor to help find and carry items to the register as I continued to shop. Very knowledgeable and helpful! Will definitely make this store a regular visit when I have liquor, wine or beer needs!!",
    initials: "J",
    color: "bg-indigo-500"
  }
];

export default function TestimonialsSection() {
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
            What Our Customers Say
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mt-4 mb-6">
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it – hear what our valued customers have to say about their experience at CNG Wine & Spirits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F9F7F4] p-8 rounded-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#722F37]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">See more reviews on Google</p>
          <a
            href="https://www.google.com/search?q=CNG+Wine+%26+Spirits+Murfreesboro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#722F37] text-[#722F37] hover:bg-[#722F37] hover:text-white rounded-lg font-medium transition-all"
          >
            <Star className="w-5 h-5" />
            Read More Reviews
          </a>
        </motion.div>
      </div>
    </section>
  );
}