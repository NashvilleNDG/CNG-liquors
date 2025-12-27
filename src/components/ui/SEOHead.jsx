import React from 'react';

// SEO component with structured data for local business
export default function SEOHead({ 
  title = "CNG Wine & Spirits | Liquor Store Murfreesboro, TN | Wine, Spirits, Beer",
  description = "Your premier liquor store in Murfreesboro, TN. Discover an exceptional selection of wines, spirits, and craft beers. Visit CNG Wine & Spirits today!",
  ogImage = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/4463d18c5_CNGHeroImage.png",
  ogType = "website"
}) {
  // Local Business Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LiquorStore",
    "name": "CNG Wine & Spirits",
    "image": [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/4463d18c5_CNGHeroImage.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/92d9c1617_CNGLogoPNG.png"
    ],
    "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/92d9c1617_CNGLogoPNG.png",
    "url": window.location.origin,
    "telephone": "(615) 895-8777",
    "email": "cngliquors@gmail.com",
    "hasMap": "https://maps.google.com/?q=2750+S+Rutherford+Blvd,+Murfreesboro,+TN+37130",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2750 S Rutherford Blvd",
      "addressLocality": "Murfreesboro",
      "addressRegion": "TN",
      "postalCode": "37130",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.8087,
      "longitude": -86.3903
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "22:00"
      }
    ],
    "priceRange": "$$",
    "servesCuisine": "Wine, Spirits, Beer",
    "areaServed": {
      "@type": "City",
      "name": "Murfreesboro"
    }
  };

  React.useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'CNG Wine & Spirits' }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Add structured data
    let scriptTag = document.querySelector('#local-business-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'local-business-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(localBusinessSchema);

    return () => {
      if (scriptTag) scriptTag.remove();
    };
  }, [title, description, ogImage, ogType]);

  return null;
}