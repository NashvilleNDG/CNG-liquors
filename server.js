import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Force production mode if NODE_ENV is not set (for Render.com)
// Default to production unless explicitly set to 'development'
const isProduction = process.env.NODE_ENV !== 'development';
const port = process.env.PORT || 3000;

// Log environment info
console.log('Environment:', isProduction ? 'PRODUCTION' : 'DEVELOPMENT');
console.log('Port:', port);
console.log('NODE_ENV:', process.env.NODE_ENV || 'not set (defaulting to production)');
console.log('__dirname:', __dirname);

// Comprehensive content data for all pages
function getHomePageContent() {
  // External delivery partner links - these must be in static HTML for AI crawlers
  const doordashLink = "https://www.doordash.com/en/convenience/store/cng-wine-%26-spirits-murfreesboro-2517144/?srsltid=AfmBOoox9ZN9lXNizvsnMre6B5M9URBWcrWl2oug4VZfDkiN8afxcBCJ";
  const ubereatsLink = "https://www.ubereats.com/store/cng-wine-%26-spirits/wZSMW6AQVoip9eW1_Kujyw?srsltid=AfmBOoqoYeaaZ_WWv7lkNGAwlGbRBlfZZyPJZhDVzLmt9A2e8AW3xEBN";
  
  return `
    <h1>Discover Exceptional Spirits</h1>
    <p>Your destination for premium wines, craft spirits, and artisan beers. Serving Murfreesboro, Tennessee with expertise and passion since day one.</p>
    
    <h2>Why Choose CNG Wine & Spirits?</h2>
    <h3>Premium Selection</h3>
    <p>Curated collection of fine wines, craft spirits, and artisan beers from around the world.</p>
    
    <h3>Expert Knowledge</h3>
    <p>Our knowledgeable staff helps you find the perfect bottle for any occasion.</p>
    
    <h3>Community Focused</h3>
    <p>Proudly serving Murfreesboro and Rutherford County with exceptional service.</p>
    
    <h3>Convenient Location</h3>
    <p>Easy access on S Rutherford Blvd with ample parking for quick visits.</p>
    
    <h2>Our Collection</h2>
    <h3>Fine Wines</h3>
    <p>From Napa Valley to Bordeaux, explore our world-class wine collection</p>
    
    <h3>Premium Spirits</h3>
    <p>Whiskey, vodka, rum, gin, and more from top distilleries</p>
    
    <h3>Craft Beer</h3>
    <p>Local favorites and international craft brews</p>
    
    <h3>Champagne & Sparkling</h3>
    <p>Celebrate life's moments with our bubbly selection</p>
    
    <h2>Choose Your Delivery Partner</h2>
    <p>Order from CNG Wine & Spirits through your preferred delivery app and enjoy fast, reliable service to your doorstep.</p>
    
    <h3>Order on DoorDash</h3>
    <p>Fast delivery from your favorite liquor store in Murfreesboro. Track your order in real-time. 30-60 minute delivery. DashPass benefits available.</p>
    <p><a href="${doordashLink}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 12px 24px; background-color: #FF3008; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">Order on DoorDash</a></p>
    <p><a href="${doordashLink}" target="_blank" rel="noopener noreferrer" style="color: #FF3008; text-decoration: underline;">Open DoorDash App</a></p>
    
    <h3>Order on Uber Eats</h3>
    <p>Reliable alcohol delivery service to Murfreesboro homes. Live order tracking. Quick 30-60 minute delivery. Uber One member perks.</p>
    <p><a href="${ubereatsLink}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 12px 24px; background-color: #06C167; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">Order on Uber Eats</a></p>
    <p><a href="${ubereatsLink}" target="_blank" rel="noopener noreferrer" style="color: #06C167; text-decoration: underline;">Open Uber Eats App</a></p>
    
    <h2>Customer Testimonials</h2>
    <div itemscope itemtype="https://schema.org/Review">
      <p itemprop="reviewBody">"First visit. Met KP. He's good people. Sampled a few and bought a few. Great experience. It's generally worth working with the professionals at good liquor stores and getting their inputs and suggestions, and that's especially the case at CNG!"</p>
      <p><strong itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">M J</span></strong> - <span itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating"><span itemprop="ratingValue">5</span> stars</span></p>
    </div>
    
    <div itemscope itemtype="https://schema.org/Review">
      <p itemprop="reviewBody">"Love this store. Stop by if you are in the Murfreesboro area. They will take care of you. Thank you Anderson and KP!!!"</p>
      <p><strong itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">chad randolph</span></strong> - <span itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating"><span itemprop="ratingValue">5</span> stars</span></p>
    </div>
    
    <div itemscope itemtype="https://schema.org/Review">
      <p itemprop="reviewBody">"New to the area. I am extremely impressed with the customer service at CNG. They greeted me as I walked in and they had someone on the floor to help find and carry items to the register as I continued to shop. Very knowledgeable and helpful!"</p>
      <p><strong itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Jonathan A. Sawyer</span></strong> - <span itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating"><span itemprop="ratingValue">5</span> stars</span></p>
    </div>
    
    <h2>Frequently Asked Questions</h2>
    <div itemscope itemtype="https://schema.org/FAQPage">
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">What are your store hours?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">We're open Monday through Saturday from 8 AM to 11 PM, and Sunday from 10 AM to 10 PM. We're here to serve you 7 days a week!</p>
        </div>
      </div>
      
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Do you offer special orders?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">Yes! If we don't have a specific product in stock, we're happy to place special orders for you. Just ask any of our staff members, and we'll do our best to get what you're looking for.</p>
        </div>
      </div>
      
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">What types of payment do you accept?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">We accept all major credit cards, debit cards, and cash. We want to make your shopping experience as convenient as possible.</p>
        </div>
      </div>
      
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Do you have parking available?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">Yes, we have ample free parking right in front of our store at 2750 S Rutherford Blvd. Easy access and convenient parking for all our customers.</p>
        </div>
      </div>
      
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Can you help me choose the right wine or spirit?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">Absolutely! Our knowledgeable staff is always ready to help you find the perfect bottle for any occasion. Whether you're looking for a gift, planning a dinner party, or just exploring new flavors, we're here to guide you.</p>
        </div>
      </div>
      
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Do you carry local Tennessee spirits and craft beers?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">Yes! We're proud to carry a great selection of local Tennessee whiskeys, craft spirits, and beers from Murfreesboro and surrounding areas. We love supporting local producers!</p>
        </div>
      </div>
      
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">What brands of wine do you carry?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">We carry an extensive selection of wines from around the world, including popular brands and boutique wineries from Napa Valley, France, Italy, Spain, Australia, and more. Visit us to explore our full collection.</p>
        </div>
      </div>
      
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">Are there any age restrictions?</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">Yes, you must be 21 years or older to purchase alcohol. We require valid photo ID for all purchases. Please drink responsibly.</p>
        </div>
      </div>
    </div>
  `;
}

function getAboutPageContent() {
  const baseUrl = process.env.BASE_URL || 'https://www.cngliquors.com';
  
  return `
    <h1>About CNG Wine & Spirits</h1>
    <h2>Murfreesboro's Trusted Liquor Destination</h2>
    <p>Located in the heart of Murfreesboro, Tennessee, CNG Wine & Spirits has been proudly serving our community with an exceptional selection of <a href="${baseUrl}/Selection" style="color: #722F37; text-decoration: underline;">wines, spirits, and craft beers</a>.</p>
    <p>Our mission is simple: provide our customers with quality products, competitive prices, and the kind of personalized service that turns first-time visitors into lifelong friends.</p>
    <p>Whether you're a seasoned connoisseur looking for a rare vintage or someone exploring new flavors, our knowledgeable team is here to guide you to the perfect selection. <a href="${baseUrl}/Contact" style="color: #722F37; text-decoration: underline;">Visit our Murfreesboro store</a> today.</p>
    
    <h2>Our Values</h2>
    <h3>Quality Selection</h3>
    <p>We carefully curate our inventory to bring you only the finest wines, spirits, and beers from around the world.</p>
    
    <h3>Expert Service</h3>
    <p>Our knowledgeable staff is always ready to help you find the perfect bottle for any occasion or budget.</p>
    
    <h3>Community First</h3>
    <p>As a local Murfreesboro business, we're proud to serve our neighbors and support our community.</p>
    
    <h3>Competitive Prices</h3>
    <p>Great value without compromising on quality – that's our promise to every customer who walks through our doors.</p>
    
    <h2>Reasons to Shop With Us</h2>
    <ul>
      <li>Wide selection of wines from around the world</li>
      <li>Premium bourbon and whiskey collection</li>
      <li>Local and craft beer favorites</li>
      <li>Knowledgeable and friendly staff</li>
      <li>Competitive everyday pricing</li>
      <li>Convenient location with easy parking</li>
      <li>Open 7 days a week</li>
      <li>Special orders available</li>
    </ul>
    
    <h2>Visit Us Today</h2>
    <p>Stop by our store at 2750 S Rutherford Blvd. We look forward to helping you discover your next favorite bottle!</p>
    <p><a href="${baseUrl}/Contact" style="display: inline-block; padding: 12px 24px; background-color: #722F37; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">Get Directions</a></p>
  `;
}

function getContactPageContent() {
  const googleMapsLink = "https://maps.google.com/?q=2750+S+Rutherford+Blvd,+Murfreesboro,+TN+37130";
  
  return `
    <h1>Contact Us</h1>
    <h2>Visit Our Store</h2>
    <p><strong>Address:</strong> 2750 S Rutherford Blvd, Murfreesboro, TN 37130</p>
    <p><strong>Get Directions:</strong> <a href="${googleMapsLink}" target="_blank" rel="noopener noreferrer" style="color: #722F37; text-decoration: underline;">Open in Google Maps</a></p>
    <p><strong>Phone:</strong> <a href="tel:+16158958777" style="color: #722F37; text-decoration: underline;">(615) 895-8777</a></p>
    <p><strong>Email:</strong> <a href="mailto:cngliquors@gmail.com" style="color: #722F37; text-decoration: underline;">cngliquors@gmail.com</a></p>
    
    <h2>Store Hours</h2>
    <ul>
      <li>Monday: 8 AM – 11 PM</li>
      <li>Tuesday: 8 AM – 11 PM</li>
      <li>Wednesday: 8 AM – 11 PM</li>
      <li>Thursday: 8 AM – 11 PM</li>
      <li>Friday: 8 AM – 11 PM</li>
      <li>Saturday: 8 AM – 11 PM</li>
      <li>Sunday: 10 AM – 10 PM</li>
    </ul>
    
    <h2>Send Us a Message</h2>
    <p>Have a question about a product or want to place a special order? Fill out the form below and we'll get back to you as soon as possible.</p>
    <form>
      <label>Your Name *</label>
      <input type="text" name="name" required />
      <label>Email Address *</label>
      <input type="email" name="email" required />
      <label>Phone Number</label>
      <input type="tel" name="phone" />
      <label>Message *</label>
      <textarea name="message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  `;
}

function getDeliveryPageContent() {
  // External delivery partner links - these must be in static HTML for AI crawlers
  const doordashLink = "https://www.doordash.com/en/convenience/store/cng-wine-%26-spirits-murfreesboro-2517144/?srsltid=AfmBOoox9ZN9lXNizvsnMre6B5M9URBWcrWl2oug4VZfDkiN8afxcBCJ";
  const ubereatsLink = "https://www.ubereats.com/store/cng-wine-%26-spirits/wZSMW6AQVoip9eW1_Kujyw?srsltid=AfmBOoqoYeaaZ_WWv7lkNGAwlGbRBlfZZyPJZhDVzLmt9A2e8AW3xEBN";
  
  return `
    <h1>Order Online for Delivery</h1>
    <p>Get your favorite wines, spirits, and beers delivered right to your door in Murfreesboro, TN. Order through DoorDash or Uber Eats today!</p>
    
    <h2>Choose Your Delivery Partner</h2>
    
    <h3>Order on DoorDash</h3>
    <p>Fast delivery from your favorite liquor store in Murfreesboro. Track your order in real-time. 30-60 minute delivery. DashPass benefits available.</p>
    <p><a href="${doordashLink}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 12px 24px; background-color: #FF3008; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">Order on DoorDash</a></p>
    <p><a href="${doordashLink}" target="_blank" rel="noopener noreferrer" style="color: #FF3008; text-decoration: underline;">Open DoorDash App</a></p>
    
    <h3>Order on Uber Eats</h3>
    <p>Reliable alcohol delivery service to Murfreesboro homes. Live order tracking. Quick 30-60 minute delivery. Uber One member perks.</p>
    <p><a href="${ubereatsLink}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 12px 24px; background-color: #06C167; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">Order on Uber Eats</a></p>
    <p><a href="${ubereatsLink}" target="_blank" rel="noopener noreferrer" style="color: #06C167; text-decoration: underline;">Open Uber Eats App</a></p>
    
    <h2>Why Order Alcohol Delivery?</h2>
    <ul>
      <li><strong>Fast & Reliable:</strong> Get your order delivered within 30-60 minutes through our trusted delivery partners</li>
      <li><strong>Wide Selection:</strong> Access our complete inventory of wines, spirits, and craft beers from your phone</li>
      <li><strong>Safe Delivery:</strong> Contactless delivery options available with proper ID verification at your door</li>
      <li><strong>Easy Ordering:</strong> Browse, select, and checkout in minutes through DoorDash or Uber Eats app</li>
    </ul>
    
    <h2>How Alcohol Delivery Works</h2>
    <ol>
      <li><strong>Browse & Select:</strong> Open DoorDash or Uber Eats, search for CNG Wine & Spirits, and browse our full selection</li>
      <li><strong>Place Your Order:</strong> Add items to your cart, choose your delivery address in Murfreesboro, and complete your secure checkout</li>
      <li><strong>Receive Delivery:</strong> Track your order in real-time and receive it at your door. Valid ID required upon delivery (21+).</li>
    </ol>
    
    <h2>Important Delivery Information</h2>
    <ul>
      <li><strong>Age Verification Required:</strong> All orders require valid ID showing you are 21 years or older</li>
      <li><strong>Delivery Hours:</strong> Alcohol delivery is available during our store operating hours</li>
      <li><strong>Delivery Area:</strong> We deliver throughout Murfreesboro, TN and surrounding areas</li>
      <li><strong>Contactless Delivery:</strong> Request contactless delivery in your order notes for a safer, no-contact experience</li>
    </ul>
  `;
}

function getSelectionPageContent() {
  const baseUrl = process.env.BASE_URL || 'https://www.cngliquors.com';
  
  return `
    <h1>Explore Our Selection</h1>
    <p>Discover premium beverages carefully selected to satisfy every palate and occasion at CNG Wine & Spirits in Murfreesboro, TN.</p>
    
    <h2>Fine Wines</h2>
    <p>From bold reds to crisp whites, our wine selection spans the globe.</p>
    <p><strong>Categories:</strong> Red Wines, White Wines, Rosé, Sparkling, Dessert Wines</p>
    <p><strong>What We Carry:</strong> Napa Valley Cabernets, French Burgundy & Bordeaux, Italian Chianti & Barolo, Spanish Rioja, Australian Shiraz, New Zealand Sauvignon Blanc, Oregon Pinot Noir, Argentinian Malbec</p>
    
    <h2>Premium Spirits</h2>
    <p>Premium spirits from world-renowned distilleries.</p>
    <p><strong>Categories:</strong> Whiskey & Bourbon, Vodka, Rum, Gin, Tequila & Mezcal, Cognac & Brandy</p>
    <p><strong>What We Carry:</strong> Tennessee Whiskey, Kentucky Bourbon, Scotch Single Malts, Irish Whiskey, Japanese Whisky, Premium Vodkas, Artisan Gins, Aged Tequilas</p>
    
    <h2>Craft Beer</h2>
    <p>Local favorites and international craft brews.</p>
    <p><strong>Categories:</strong> IPAs, Lagers, Stouts, Sours, Wheat Beers, Seasonal</p>
    <p><strong>What We Carry:</strong> Tennessee Craft Breweries, Local Favorites, Imported Belgian Ales, German Lagers, American IPAs, Hard-to-Find Limited Releases</p>
    
    <h2>Champagne & Sparkling</h2>
    <p>Celebrate with our selection of bubbles.</p>
    <p><strong>Categories:</strong> French Champagne, Prosecco, Cava, Domestic Sparkling</p>
    <p><strong>What We Carry:</strong> Dom Pérignon, Veuve Clicquot, Moët & Chandon, Italian Prosecco, Spanish Cava, California Sparkling</p>
    
    <h2>Mixers & Accessories</h2>
    <p>Everything you need for the perfect cocktail.</p>
    <p><strong>Categories:</strong> Mixers, Bitters, Garnishes, Barware</p>
    <p><strong>What We Carry:</strong> Premium Tonic Waters, Craft Syrups, Artisan Bitters, Fresh Citrus, Cocktail Kits</p>
    
    <h2>Specialty Items</h2>
    <p>Unique finds and seasonal specialties.</p>
    <p><strong>Categories:</strong> Gift Sets, Rare Finds, Seasonal, Local Products</p>
    <p><strong>What We Carry:</strong> Gift Baskets, Limited Editions, Tennessee Products, Seasonal Selections</p>
    
    <h2>Can't Find What You're Looking For?</h2>
    <p>Our inventory is always changing. <a href="${baseUrl}/Contact" style="color: #722F37; text-decoration: underline;">Visit our Murfreesboro liquor store</a> or give us a call – we're happy to help you find exactly what you need or place a special order.</p>
    <p><a href="tel:+16158958777" style="display: inline-block; padding: 12px 24px; background-color: #722F37; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px; margin-right: 10px;">Call (615) 895-8777</a> <a href="mailto:cngliquors@gmail.com" style="display: inline-block; padding: 12px 24px; border: 2px solid #722F37; color: #722F37; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">Email Us</a></p>
  `;
}

const PAGE_CONTENT = {
  '/': {
    title: 'CNG Wine & Spirits | Liquor Store in Murfreesboro, TN | Wines, Spirits, & Beer',
    description: 'Discover CNG Wine & Spirits, the leading liquor store in Murfreesboro, TN. We offer a vast selection of wines, spirits, and craft beers. Find a liquor store near you with our convenient Murfreesboro location. Open 7 days a week. (615) 895-8777',
    content: getHomePageContent()
  },
  '/Home': {
    title: 'CNG Wine & Spirits | Liquor Store in Murfreesboro, TN | Wines, Spirits, & Beer',
    description: 'Discover CNG Wine & Spirits, the leading liquor store in Murfreesboro, TN. We offer a vast selection of wines, spirits, and craft beers. Find a liquor store near you with our convenient Murfreesboro location. Open 7 days a week. (615) 895-8777',
    content: getHomePageContent()
  },
  '/About': {
    title: 'About CNG Wine & Spirits | Best Liquor Store Murfreesboro, TN',
    description: 'Learn about CNG Wine & Spirits, your trusted liquor store near Murfreesboro, TN. We provide a premium selection of wines, spirits, and craft beers with exceptional service.',
    content: getAboutPageContent()
  },
  '/Contact': {
    title: 'Contact CNG Wine & Spirits | Murfreesboro, TN Liquor Store Near Me',
    description: 'Get in touch with CNG Wine & Spirits, your local liquor store in Murfreesboro, TN. Call (615) 895-8777, email, or visit us at 2750 S Rutherford Blvd for the best selection of wines, spirits, and beers.',
    content: getContactPageContent()
  },
  '/Delivery': {
    title: 'Alcohol Delivery Murfreesboro TN | DoorDash & Uber Eats | CNG Wine & Spirits',
    description: 'Get wine, beer, and liquor delivered fast in Murfreesboro, TN! Order from CNG Wine & Spirits on DoorDash and Uber Eats. Same-day alcohol delivery available. Shop now!',
    content: getDeliveryPageContent()
  },
  '/Selection': {
    title: 'Our Selection | Liquor Store Murfreesboro, TN | Wines, Spirits, Craft Beer',
    description: 'Explore the extensive selection at CNG Wine & Spirits, your top liquor store in Murfreesboro, TN. Find premium wines, spirits, craft beers, and champagne. Visit us for the best bottles near Murfreesboro!',
    content: getSelectionPageContent()
  }
};

function generateFullHTML(url) {
  const page = url === '/' ? '/' : url;
  const pageData = PAGE_CONTENT[page] || PAGE_CONTENT['/'];
  
  // Base URL for absolute links (use www.cngliquors.com for production)
  const baseUrl = process.env.BASE_URL || 'https://www.cngliquors.com';
  
  // Log baseUrl for debugging
  console.log(`[${new Date().toISOString()}] generateFullHTML: baseUrl = ${baseUrl}, url = ${url}`);
  
  // Enhanced Structured Data with Reviews and Aggregate Rating
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LiquorStore",
    "name": "CNG Wine & Spirits",
    "url": `${baseUrl}${url}`,
    "telephone": "(615) 895-8777",
    "email": "cngliquors@gmail.com",
    "description": "Murfreesboro's largest wine, beer and liquor store. Best liquor store in Murfreesboro, TN offering premium wines, spirits, and craft beers.",
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "M J"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "First visit. Met KP. He's good people. Sampled a few and bought a few. Great experience. It's generally worth working with the professionals at good liquor stores and getting their inputs and suggestions, and that's especially the case at CNG!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "chad randolph"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Love this store. Stop by if you are in the Murfreesboro area. They will take care of you. Thank you Anderson and KP!!!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jonathan A. Sawyer"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "New to the area. I am extremely impressed with the customer service at CNG. They greeted me as I walked in and they had someone on the floor to help find and carry items to the register as I continued to shop. Very knowledgeable and helpful!"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "10% off wine by case",
        "description": "Special discount on wine purchases by the case"
      },
      {
        "@type": "Offer",
        "name": "5% off spirits by case",
        "description": "Special discount on spirits purchases by the case"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Products and Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Wine",
            "description": "Fine wines from around the world"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Spirits",
            "description": "Premium spirits and liquors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wine tastings",
            "description": "Wine tasting events and experiences"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Curbside service",
            "description": "Convenient curbside pickup service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Uber Eats delivery",
            "description": "Alcohol delivery service via Uber Eats",
            "url": "https://www.ubereats.com/store/cng-wine-%26-spirits/wZSMW6AQVoip9eW1_Kujyw?srsltid=AfmBOoqoYeaaZ_WWv7lkNGAwlGbRBlfZZyPJZhDVzLmt9A2e8AW3xEBN"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DoorDash delivery",
            "description": "Alcohol delivery service via DoorDash",
            "url": "https://www.doordash.com/en/convenience/store/cng-wine-%26-spirits-murfreesboro-2517144/?srsltid=AfmBOoox9ZN9lXNizvsnMre6B5M9URBWcrWl2oug4VZfDkiN8afxcBCJ"
          }
        }
      ]
    }
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${pageData.title}</title>
  <meta name="description" content="${pageData.description}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="keywords" content="liquor store Murfreesboro, best liquor store Murfreesboro, wine store Murfreesboro, spirits Murfreesboro, beer store Murfreesboro, CNG Wine Spirits" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="${pageData.title}" />
  <meta property="og:description" content="${pageData.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${baseUrl}${url}" />
  <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/4463d18c5_CNGHeroImage.png" />
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  ${JSON.stringify(structuredData, null, 2)}
  </script>
  
  <link rel="icon" type="image/png" href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/92d9c1617_CNGLogoPNG.png" />
</head>
<body>
  <div id="root">
    <header style="background: #1A1A1A; color: white; padding: 1rem 0;">
      <nav style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; display: flex; justify-content: space-between; align-items: center;">
        <a href="${baseUrl}/" style="color: white; text-decoration: none; font-size: 1.5rem; font-weight: bold;">CNG Wine & Spirits</a>
        <nav style="display: flex; gap: 2rem;">
          <a href="${baseUrl}/Home" style="color: white; text-decoration: none;">Home</a>
          <a href="${baseUrl}/Selection" style="color: white; text-decoration: none;">Selection</a>
          <a href="${baseUrl}/Delivery" style="color: white; text-decoration: none;">Delivery</a>
          <a href="${baseUrl}/About" style="color: white; text-decoration: none;">About</a>
          <a href="${baseUrl}/Contact" style="color: white; text-decoration: none;">Contact</a>
        </nav>
      </nav>
    </header>
    <main style="max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; background: #F9F7F4; min-height: 80vh;">
      ${pageData.content}
      
      <section style="background: white; padding: 2rem; border-radius: 0.5rem; margin-top: 2rem;">
        <h2>CNG Wine & Spirits - Best Liquor Store in Murfreesboro, TN</h2>
        <p><strong>Address:</strong> <a href="https://maps.google.com/?q=2750+S+Rutherford+Blvd,+Murfreesboro,+TN+37130" target="_blank" rel="noopener noreferrer" style="color: #722F37; text-decoration: underline;">2750 S Rutherford Blvd, Murfreesboro, TN 37130</a></p>
        <p><strong>Phone:</strong> <a href="tel:+16158958777" style="color: #722F37; text-decoration: underline;">(615) 895-8777</a></p>
        <p><strong>Email:</strong> <a href="mailto:cngliquors@gmail.com" style="color: #722F37; text-decoration: underline;">cngliquors@gmail.com</a></p>
        <p><strong>Hours:</strong> Monday-Saturday 8:00 AM - 11:00 PM, Sunday 10:00 AM - 10:00 PM</p>
        <p><strong>Products:</strong> Wine, Spirits, Beer, Champagne, Mixers & Accessories, Specialty Items</p>
        <p><strong>Special Offers:</strong> 10% off wine by case, 5% off spirits by case</p>
        <p><strong>Services:</strong> Wine tastings, curbside service, <a href="${baseUrl}/Delivery" style="color: #722F37; text-decoration: underline;">DoorDash delivery</a>, <a href="${baseUrl}/Delivery" style="color: #722F37; text-decoration: underline;">Uber Eats delivery</a></p>
        <p><strong>Description:</strong> Murfreesboro's largest wine, beer and liquor store. Best liquor store in Murfreesboro offering premium wines, spirits, and craft beers with exceptional customer service.</p>
        <p><strong>Quick Links:</strong> <a href="${baseUrl}/Home" style="color: #722F37; text-decoration: underline;">Home</a> | <a href="${baseUrl}/Selection" style="color: #722F37; text-decoration: underline;">Our Selection</a> | <a href="${baseUrl}/Delivery" style="color: #722F37; text-decoration: underline;">Delivery</a> | <a href="${baseUrl}/About" style="color: #722F37; text-decoration: underline;">About Us</a> | <a href="${baseUrl}/Contact" style="color: #722F37; text-decoration: underline;">Contact</a></p>
      </section>
    </main>
            <footer style="background: #1A1A1A; color: white; padding: 2rem 0;">
              <div style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
                  <div>
                    <h3 style="color: #C9A962; margin-bottom: 1rem;">Quick Links</h3>
                    <ul style="list-style: none; padding: 0;">
                      <li style="margin-bottom: 0.5rem;"><a href="${baseUrl}/Home" style="color: white; text-decoration: none;">Home</a></li>
                      <li style="margin-bottom: 0.5rem;"><a href="${baseUrl}/Selection" style="color: white; text-decoration: none;">Our Selection</a></li>
                      <li style="margin-bottom: 0.5rem;"><a href="${baseUrl}/Delivery" style="color: white; text-decoration: none;">Delivery</a></li>
                      <li style="margin-bottom: 0.5rem;"><a href="${baseUrl}/About" style="color: white; text-decoration: none;">About Us</a></li>
                      <li style="margin-bottom: 0.5rem;"><a href="${baseUrl}/Contact" style="color: white; text-decoration: none;">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 style="color: #C9A962; margin-bottom: 1rem;">Contact Us</h3>
                    <ul style="list-style: none; padding: 0;">
                      <li style="margin-bottom: 0.5rem;"><a href="https://maps.google.com/?q=2750+S+Rutherford+Blvd,+Murfreesboro,+TN+37130" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none;">2750 S Rutherford Blvd, Murfreesboro, TN 37130</a></li>
                      <li style="margin-bottom: 0.5rem;"><a href="tel:+16158958777" style="color: white; text-decoration: none;">(615) 895-8777</a></li>
                      <li style="margin-bottom: 0.5rem;"><a href="mailto:cngliquors@gmail.com" style="color: white; text-decoration: none;">cngliquors@gmail.com</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 style="color: #C9A962; margin-bottom: 1rem;">Follow Us</h3>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                      <a href="https://www.instagram.com/cngliquor/" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: 0.5rem;">Instagram</a>
                      <a href="https://www.facebook.com/CNGLIQUOR" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: 0.5rem;">Facebook</a>
                      <a href="https://www.youtube.com/@CNGWineandSpirits" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: 0.5rem;">YouTube</a>
                      <a href="https://www.tiktok.com/@cngwinespirits" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: 0.5rem;">TikTok</a>
                      <a href="https://www.pinterest.com/cngliquors" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: 0.5rem;">Pinterest</a>
                    </div>
                  </div>
                </div>
                <div style="border-top: 1px solid #333; padding-top: 1rem; text-align: center;">
                  <p>© 2026 CNG Wine & Spirits. All rights reserved. Designed & Developed By <a href="https://nashvilledigitalgroup.com/" target="_blank" rel="noopener noreferrer" style="color: #C9A962; text-decoration: none;">Nashville Digital Group</a></p>
                  <p style="font-size: 0.875rem; margin-top: 0.5rem;">Must be 21 or older to purchase. Please drink responsibly.</p>
                </div>
              </div>
            </footer>
  </div>
  <!-- React app will load from dist/assets/ -->
</body>
</html>`;
}

const app = express();

// Serve static files from dist in production (MUST be before catch-all route)
if (isProduction) {
  // Serve static assets (JS, CSS, images) from dist/assets
  // IMPORTANT: Don't let Express serve index.html automatically - we handle it in catch-all
  app.use('/assets', express.static(resolve(__dirname, 'dist/assets'), {
    maxAge: '1y',
    etag: true,
    setHeaders: (res, path) => {
      // Set correct MIME types for JavaScript and CSS
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      } else if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css; charset=utf-8');
      }
    }
  }));
  // Serve robots.txt and sitemap.xml from public
  app.use(express.static(resolve(__dirname, 'public')));
} else {
  // In development, serve public files
  app.use(express.static(resolve(__dirname, 'public')));
}

// Redirect non-www to www (before catch-all route)
app.use((req, res, next) => {
  const host = req.get('host') || '';
  // If request comes to bare domain (cngliquors.com), redirect to www
  if (host === 'cngliquors.com' || host.startsWith('cngliquors.com:')) {
    const protocol = req.protocol || 'https';
    const redirectUrl = `${protocol}://www.cngliquors.com${req.originalUrl}`;
    return res.redirect(301, redirectUrl);
  }
  next();
});

// Catch-all route for HTML pages
// This must come AFTER static middleware so static files are served first
// Use app.use() for Express 5 compatibility (catches all methods and paths)
app.use((req, res, next) => {
  // Only handle GET requests for HTML pages
  if (req.method !== 'GET') {
    return next();
  }
  
  // Skip if this is a static asset request (should be handled by static middleware above)
  if (req.path.startsWith('/assets/') || 
      req.path.endsWith('.js') || 
      req.path.endsWith('.css') || 
      req.path.endsWith('.png') || 
      req.path.endsWith('.jpg') || 
      req.path.endsWith('.svg') ||
      req.path.endsWith('.ico') ||
      req.path.endsWith('.woff') ||
      req.path.endsWith('.woff2') ||
      req.path === '/robots.txt' ||
      req.path === '/sitemap.xml') {
    return next();
  }

  const userAgent = req.get('user-agent') || '';
  const isCrawler = /bot|crawler|spider|GPTBot|ChatGPT|Claude|Google-Extended|anthropic|BingBot|Slurp|DuckDuckBot|Baiduspider|Yandex|Sogou|Exabot|Facebot|ia_archiver|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora|pinterest|slackbot/i.test(userAgent);
  
  // Also serve static HTML for curl, wget, or requests without JavaScript
  const isNoJSRequest = !userAgent.includes('Mozilla') || req.query.format === 'html';
  
  if (isCrawler || isNoJSRequest) {
    console.log(`[${new Date().toISOString()}] Serving static HTML to ${isCrawler ? 'crawler' : 'no-JS client'}: ${userAgent.substring(0, 50)}`);
    const html = generateFullHTML(req.originalUrl);
    
    // Verify absolute URLs are present
    if (!html.includes('https://www.cngliquors.com/Home')) {
      console.error(`[${new Date().toISOString()}] WARNING: Generated HTML does not contain absolute URLs!`);
    } else {
      console.log(`[${new Date().toISOString()}] ✓ Generated HTML contains absolute URLs`);
    }
    
    res.set('Content-Type', 'text/html');
    res.send(html);
  } else {
    // For regular users, serve the React app index.html
    // This handles all routes (/, /Home, /About, etc.) - React Router will handle routing
    try {
      // ALWAYS use dist/index.html in production, never the root index.html
      const indexPath = resolve(__dirname, 'dist/index.html');
      
      console.log(`[${new Date().toISOString()}] Request: ${req.path}`);
      console.log(`[${new Date().toISOString()}] isProduction: ${isProduction}`);
      console.log(`[${new Date().toISOString()}] NODE_ENV: ${process.env.NODE_ENV || 'not set'}`);
      console.log(`[${new Date().toISOString()}] Serving index.html from: ${indexPath}`);
      console.log(`[${new Date().toISOString()}] File exists: ${fs.existsSync(indexPath)}`);
      
      if (!fs.existsSync(indexPath)) {
        console.error(`[${new Date().toISOString()}] ERROR: dist/index.html does not exist!`);
        return res.status(500).send('Build files not found. Please rebuild the application.');
      }
      
      const template = fs.readFileSync(indexPath, 'utf-8');
      
      // Verify it's the correct file (should contain /assets/, not /src/)
      if (template.includes('/src/main.jsx')) {
        console.error(`[${new Date().toISOString()}] ERROR: Wrong index.html served! Contains /src/main.jsx`);
        console.error(`[${new Date().toISOString()}] This should be dist/index.html but it seems to be the source file.`);
      }
      
      if (!template.includes('/assets/')) {
        console.error(`[${new Date().toISOString()}] WARNING: Template does not contain /assets/ path`);
      }
      
      res.set('Content-Type', 'text/html; charset=utf-8');
      res.send(template);
    } catch (error) {
      console.error(`[${new Date().toISOString()}] Error reading index.html:`, error);
      console.error(`[${new Date().toISOString()}] Error stack:`, error.stack);
      console.error(`[${new Date().toISOString()}] NODE_ENV:`, process.env.NODE_ENV);
      console.error(`[${new Date().toISOString()}] isProduction:`, isProduction);
      res.status(500).send(`Error loading page: ${error.message}`);
    }
  }
});

app.listen(port, () => {
  console.log(`========================================`);
  console.log(`Server starting...`);
  console.log(`Port: ${port}`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV || 'not set'}`);
  console.log(`isProduction: ${isProduction}`);
  console.log(`__dirname: ${__dirname}`);
  console.log(`========================================`);
  
  if (isProduction) {
    const distIndexPath = resolve(__dirname, 'dist/index.html');
    const rootIndexPath = resolve(__dirname, 'index.html');
    console.log(`Production mode - checking files:`);
    console.log(`  dist/index.html: ${distIndexPath}`);
    console.log(`  dist/index.html exists: ${fs.existsSync(distIndexPath)}`);
    console.log(`  root/index.html: ${rootIndexPath}`);
    console.log(`  root/index.html exists: ${fs.existsSync(rootIndexPath)}`);
    
    if (fs.existsSync(distIndexPath)) {
      const content = fs.readFileSync(distIndexPath, 'utf-8');
      if (content.includes('/assets/')) {
        console.log(`  ✓ dist/index.html contains /assets/ (correct)`);
      } else {
        console.log(`  ✗ dist/index.html does NOT contain /assets/ (wrong file!)`);
      }
      if (content.includes('/src/main.jsx')) {
        console.log(`  ✗ dist/index.html contains /src/main.jsx (wrong file!)`);
      }
    }
  }
  console.log(`========================================`);
  console.log(`Server running at http://localhost:${port}`);
  console.log(`========================================`);
});

