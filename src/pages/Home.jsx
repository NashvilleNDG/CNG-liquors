import React from 'react';
import SEOHead from '../components/ui/SEOHead';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ProductCategories from '../components/home/ProductCategories';
import TestimonialsSection from '../components/home/TestimonialsSection';
import DeliveryPartners from '../components/home/DeliveryPartners';
import StayConnected from '../components/home/StayConnected';
import FAQSection from '../components/home/FAQSection';
import MapSection from '../components/home/MapSection';
import StoreHours from '../components/home/StoreHours';
import CTASection from '../components/home/CTASection';
import EmailPopup from '../components/home/EmailPopup';
import ProductSchema from '../components/ui/ProductSchema';
import LazySection from '../components/ui/LazySection';

export default function Home() {
  // Featured products for schema
  const featuredProducts = [
    { name: "Tito's Handmade Vodka", description: "American craft vodka, gluten-free, 6x distilled from corn, smooth and clean finish", brand: "Tito's", category: "Vodka", rating: 4.8, reviewCount: 2718 },
    { name: "Jack Daniel's Old No. 7 Tennessee Whiskey", description: "Classic Tennessee whiskey, charcoal mellowed, smooth with vanilla and oak notes", brand: "Jack Daniel's", category: "Whiskey", rating: 4.6, reviewCount: 3542 },
    { name: "Crown Royal Deluxe Canadian Whisky", description: "Premium blended Canadian whisky, smooth with hints of vanilla and fruit", brand: "Crown Royal", category: "Whiskey", rating: 4.5, reviewCount: 2856 },
    { name: "Patron Silver Tequila", description: "100% Blue Weber Agave, triple distilled, crystal clear with citrus notes", brand: "Patron", category: "Tequila", rating: 4.7, reviewCount: 1943 }
  ];

  return (
    <>
      <SEOHead 
        title="CNG Wine & Spirits | Liquor Store in Murfreesboro, TN | Wines, Spirits, & Beer"
        description="Discover CNG Wine & Spirits, the leading liquor store in Murfreesboro, TN. We offer a vast selection of wines, spirits, and craft beers. Find a liquor store near you with our convenient Murfreesboro location. Open 7 days a week. (615) 895-8777"
      />
      {featuredProducts.map((product) => (
        <ProductSchema key={product.name} product={product} />
      ))}
      <HeroSection />
      <FeaturesSection />
      <ProductCategories />
      <EmailPopup />
      <LazySection>
        <DeliveryPartners />
      </LazySection>
      <LazySection>
        <TestimonialsSection />
      </LazySection>
      <LazySection>
        <MapSection />
      </LazySection>
      <LazySection>
        <StoreHours />
      </LazySection>
      <LazySection>
        <StayConnected />
      </LazySection>
      <LazySection>
        <FAQSection />
      </LazySection>
      <LazySection>
        <CTASection />
      </LazySection>
    </>
  );
}