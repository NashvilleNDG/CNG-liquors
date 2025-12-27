import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What are your store hours?",
    answer: "We're open Monday through Saturday from 8 AM to 11 PM, and Sunday from 10 AM to 10 PM. We're here to serve you 7 days a week!"
  },
  {
    question: "Do you offer special orders?",
    answer: "Yes! If we don't have a specific product in stock, we're happy to place special orders for you. Just ask any of our staff members, and we'll do our best to get what you're looking for."
  },
  {
    question: "What types of payment do you accept?",
    answer: "We accept all major credit cards, debit cards, and cash. We want to make your shopping experience as convenient as possible."
  },
  {
    question: "Do you have parking available?",
    answer: "Yes, we have ample free parking right in front of our store at 2750 S Rutherford Blvd. Easy access and convenient parking for all our customers."
  },
  {
    question: "Can you help me choose the right wine or spirit?",
    answer: "Absolutely! Our knowledgeable staff is always ready to help you find the perfect bottle for any occasion. Whether you're looking for a gift, planning a dinner party, or just exploring new flavors, we're here to guide you."
  },
  {
    question: "Do you carry local Tennessee spirits and craft beers?",
    answer: "Yes! We're proud to carry a great selection of local Tennessee whiskeys, craft spirits, and beers from Murfreesboro and surrounding areas. We love supporting local producers!"
  },
  {
    question: "What brands of wine do you carry?",
    answer: "We carry an extensive selection of wines from around the world, including popular brands and boutique wineries from Napa Valley, France, Italy, Spain, Australia, and more. Visit us to explore our full collection."
  },
  {
    question: "Are there any age restrictions?",
    answer: "Yes, you must be 21 years or older to purchase alcohol. We require valid photo ID for all purchases. Please drink responsibly."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our store, products, and services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {displayedFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#1A1A1A] text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#722F37]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#722F37]" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {!showAll && faqs.length > 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 bg-[#722F37] hover:bg-[#8B3A42] text-white font-medium"
              >
                View More
              </Button>
            </motion.div>
          )}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-white rounded-2xl shadow-sm max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Feel free to call us or visit our store. Our friendly team is always happy to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16158958777"
              className="px-6 py-3 bg-[#722F37] hover:bg-[#8B3A42] text-white rounded-lg font-medium transition-all"
            >
              Call (615) 895-8777
            </a>
            <a
              href="mailto:cngliquors@gmail.com"
              className="px-6 py-3 border-2 border-[#722F37] text-[#722F37] hover:bg-[#722F37] hover:text-white rounded-lg font-medium transition-all"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}