import React from 'react';

export default function ProductSchema({ product }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "category": product.category,
    "aggregateRating": product.rating && product.reviewCount ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    } : undefined
  };

  React.useEffect(() => {
    const scriptId = `product-schema-${product.name.replace(/[^a-zA-Z0-9]/g, '-')}`;
    let scriptTag = document.querySelector(`#${scriptId}`);
    
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    
    scriptTag.textContent = JSON.stringify(productSchema);

    return () => {
      if (scriptTag) scriptTag.remove();
    };
  }, [product]);

  return null;
}