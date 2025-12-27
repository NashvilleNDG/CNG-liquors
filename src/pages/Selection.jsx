import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/ui/SEOHead';
import { Wine, Beer, Martini, Sparkles, GlassWater, Cherry } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const categories = [
  {
    id: 'wines',
    name: 'Wines',
    icon: Wine,
    description: 'From bold reds to crisp whites, our wine selection spans the globe',
    subcategories: ['Red Wines', 'White Wines', 'Rosé', 'Sparkling', 'Dessert Wines'],
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80',
    features: [
      'Napa Valley Cabernets',
      'French Burgundy & Bordeaux',
      'Italian Chianti & Barolo',
      'Spanish Rioja',
      'Australian Shiraz',
      'New Zealand Sauvignon Blanc',
      'Oregon Pinot Noir',
      'Argentinian Malbec'
    ]
  },
  {
    id: 'spirits',
    name: 'Spirits',
    icon: Martini,
    description: 'Premium spirits from world-renowned distilleries',
    subcategories: ['Whiskey & Bourbon', 'Vodka', 'Rum', 'Gin', 'Tequila & Mezcal', 'Cognac & Brandy'],
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&q=80',
    features: [
      'Tennessee Whiskey',
      'Kentucky Bourbon',
      'Scotch Single Malts',
      'Irish Whiskey',
      'Japanese Whisky',
      'Premium Vodkas',
      'Artisan Gins',
      'Aged Tequilas'
    ]
  },
  {
    id: 'beer',
    name: 'Craft Beer',
    icon: Beer,
    description: 'Local favorites and international craft brews',
    subcategories: ['IPAs', 'Lagers', 'Stouts', 'Sours', 'Wheat Beers', 'Seasonal'],
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&q=80',
    features: [
      'Tennessee Craft Breweries',
      'Local Favorites',
      'Imported Belgian Ales',
      'German Lagers',
      'American IPAs',
      'Hard-to-Find Limited Releases'
    ]
  },
  {
    id: 'champagne',
    name: 'Champagne & Sparkling',
    icon: Sparkles,
    description: 'Celebrate with our selection of bubbles',
    subcategories: ['French Champagne', 'Prosecco', 'Cava', 'Domestic Sparkling'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/440ad6cdd_ChampangeCNGourselection.png',
    features: [
      'Dom Pérignon',
      'Veuve Clicquot',
      'Moët & Chandon',
      'Italian Prosecco',
      'Spanish Cava',
      'California Sparkling'
    ]
  },
  {
    id: 'mixers',
    name: 'Mixers & Accessories',
    icon: GlassWater,
    description: 'Everything you need for the perfect cocktail',
    subcategories: ['Mixers', 'Bitters', 'Garnishes', 'Barware'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
    features: [
      'Premium Tonic Waters',
      'Craft Syrups',
      'Artisan Bitters',
      'Fresh Citrus',
      'Cocktail Kits'
    ]
  },
  {
    id: 'specialty',
    name: 'Specialty Items',
    icon: Cherry,
    description: 'Unique finds and seasonal specialties',
    subcategories: ['Gift Sets', 'Rare Finds', 'Seasonal', 'Local Products'],
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80',
    features: [
      'Gift Baskets',
      'Limited Editions',
      'Tennessee Products',
      'Seasonal Selections'
    ]
  }
];

export default function Selection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <SEOHead 
        title="Our Selection | Liquor Store Murfreesboro, TN | Wines, Spirits, Craft Beer"
        description="Explore the extensive selection at CNG Wine & Spirits, your top liquor store in Murfreesboro, TN. Find premium wines, spirits, craft beers, and champagne. Visit us for the best bottles near Murfreesboro!"
      />

      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 bg-[#1A1A1A] overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80"
            alt="Premium liquor selection"
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
              Our Collection
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white mt-2"
            >
              Explore Our Selection
            </motion.h1>
          </div>
        </div>
      </section>



      {/* All Categories Displayed Vertically */}
      <div className="bg-[#F9F7F4]">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <section 
              key={category.id} 
              id={category.id}
              className={`py-20 ${index % 2 === 0 ? 'bg-[#F9F7F4]' : 'bg-white'}`}
            >
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Image */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-full h-full bg-[#722F37]/10 rounded-2xl" />
                    <img
                      src={category.image}
                      alt={`${category.name} at CNG Wine & Spirits`}
                      className="relative w-full h-96 object-cover rounded-2xl shadow-xl"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-8 h-8 text-[#722F37]" />
                      <h2 className="text-4xl font-serif text-[#1A1A1A]">{category.name}</h2>
                    </div>
                    <p className="text-xl text-gray-600 mb-8">{category.description}</p>

                    {/* Subcategories */}
                    <div className="mb-8">
                      <h3 className="text-lg font-medium text-[#1A1A1A] mb-4">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((sub) => (
                          <span
                            key={sub}
                            className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm border border-gray-100"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Featured Items */}
                    <div>
                      <h3 className="text-lg font-medium text-[#1A1A1A] mb-4">What We Carry</h3>
                      <ul className="grid grid-cols-2 gap-3">
                        {category.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-[#722F37]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Visit CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Our inventory is always changing. <Link to={createPageUrl('Contact')} className="text-[#722F37] hover:underline">Visit our Murfreesboro liquor store</Link> or give us a call – 
            we're happy to help you find exactly what you need or place a special order.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+16158958777"
              className="px-8 py-4 bg-[#722F37] hover:bg-[#8B3A42] text-white rounded-lg font-medium transition-all shadow-lg"
            >
              Call (615) 895-8777
            </a>
            <a
              href="mailto:cngliquors@gmail.com"
              className="px-8 py-4 border-2 border-[#722F37] text-[#722F37] hover:bg-[#722F37] hover:text-white rounded-lg font-medium transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}