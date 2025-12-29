# Base44 to AI-Crawlable Migration Prompt for Cursor AI

Copy and paste this entire prompt into Cursor AI when you open your Base44 project:

---

## PROBLEM STATEMENT

I have a website built with Base44 that is a client-side React SPA (Single Page Application). The site is not crawlable by AI tools (Claude, ChatGPT, Gemini) and web scrapers because all content loads via JavaScript after the initial page load. When AI crawlers access the site, they only see an empty `<div id="root"></div>` with no actual content.

**Current Situation:**
- Website is a React-based single page application
- All content loads via JavaScript after page load
- AI crawlers only see: `<div id="root"></div>` with no content
- All actual content (business info, pages, links, buttons) is invisible to crawlers
- Site doesn't work with JavaScript disabled

**Goal:**
Make the website fully crawlable by AI tools and web scrapers WITHOUT breaking the existing user experience. The site should deliver full HTML content in the initial response, BEFORE JavaScript executes, so AI models can access all pages, links, buttons, and text.

---

## TECHNICAL REQUIREMENTS

1. **Server-Side Rendering (SSR)**: Implement an Express.js server that detects crawlers and serves pre-constructed static HTML
2. **Static HTML Content**: Extract all page content from React components and embed as static HTML strings in the server
3. **Absolute URLs**: All navigation links and external links must use absolute URLs (e.g., `https://www.yourdomain.com/PageName`)
4. **Proper HTML Links**: All buttons and links must use proper `<a href="...">` tags in the static HTML, not just React Router `<Link>` components
5. **Complete Information**: Include all business information, FAQs, testimonials, product details, forms, and page content in static HTML
6. **Schema.org Structured Data**: Add comprehensive structured data (LocalBusiness, Review, FAQPage, Product, etc.) in JSON-LD format
7. **SEO Meta Tags**: Implement proper meta tags (title, description, Open Graph) for all pages
8. **Sitemap & Robots.txt**: Create/update `sitemap.xml` and `robots.txt` to help crawlers discover all pages

---

## IMPLEMENTATION STEPS

### Step 1: Create Express.js Server (`server.js`)

Create a new file `server.js` in the project root with the following structure:

```javascript
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = process.env.NODE_ENV !== 'development';
const port = process.env.PORT || 3000;

// Create functions for each page's static HTML content
function getHomePageContent() {
  // Extract all content from your Home page React component
  // Include: hero text, features, product categories, testimonials, FAQs, etc.
  return `
    <h1>Your Page Title</h1>
    <p>All your page content here...</p>
    <!-- Include all text, links, buttons as static HTML -->
  `;
}

function getAboutPageContent() {
  // Extract content from About page
  return `...`;
}

// Repeat for all pages (Contact, Products, Services, etc.)

const PAGE_CONTENT = {
  '/': { title: '...', description: '...', content: getHomePageContent() },
  '/Home': { title: '...', description: '...', content: getHomePageContent() },
  '/About': { title: '...', description: '...', content: getAboutPageContent() },
  // Add all your routes here
};

function generateFullHTML(url) {
  const page = url === '/' ? '/' : url;
  const pageData = PAGE_CONTENT[page] || PAGE_CONTENT['/'];
  const baseUrl = process.env.BASE_URL || 'https://www.yourdomain.com';
  
  // Include comprehensive Schema.org structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // or appropriate type
    "name": "Your Business Name",
    "url": `${baseUrl}${url}`,
    "telephone": "your-phone",
    "address": { /* ... */ },
    // Add reviews, FAQs, products, etc.
  };
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${pageData.title}</title>
  <meta name="description" content="${pageData.description}" />
  <!-- Open Graph tags -->
  <!-- Structured Data JSON-LD -->
  <script type="application/ld+json">
  ${JSON.stringify(structuredData, null, 2)}
  </script>
</head>
<body>
  <div id="root">
    <header>
      <nav>
        <!-- Navigation with absolute URLs -->
        <a href="${baseUrl}/Home">Home</a>
        <a href="${baseUrl}/About">About</a>
        <!-- All navigation links -->
      </nav>
    </header>
    <main>
      ${pageData.content}
    </main>
    <footer>
      <!-- Footer with all links (social media, contact, etc.) -->
      <!-- All external links must be absolute URLs -->
    </footer>
  </div>
</body>
</html>`;
}

const app = express();

// Serve static assets (JS, CSS, images)
app.use(express.static('dist', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Detect crawlers/bots
function isCrawler(userAgent) {
  return /bot|crawler|spider|GPTBot|ChatGPT|Claude|Google-Extended|anthropic|BingBot|Slurp|DuckDuckBot|Baiduspider|Yandex|Sogou|Exabot|Facebot|ia_archiver|facebookexternalhit|twitterbot|linkedinbot|embedly|quora|pinterest|slackbot/i.test(userAgent);
}

// Main route handler
app.use((req, res, next) => {
  if (req.method !== 'GET') return next();
  
  const userAgent = req.headers['user-agent'] || '';
  const isBot = isCrawler(userAgent) || !userAgent.includes('Mozilla') || req.query.format === 'html';
  
  if (isBot) {
    // Serve static HTML for crawlers
    const html = generateFullHTML(req.path);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  } else {
    // Serve React app for regular users
    const indexPath = resolve(__dirname, 'dist', 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      next();
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### Step 2: Extract All Page Content

For EACH page in your React app:

1. **Read the React component** (e.g., `src/pages/Home.jsx`)
2. **Extract all visible content**: text, headings, descriptions, features, products, FAQs, testimonials
3. **Extract all links**: navigation links, external links (social media, maps, phone, email), button links
4. **Convert to static HTML**: Create a function in `server.js` that returns all this content as static HTML strings
5. **Use absolute URLs**: All links must be `https://www.yourdomain.com/PageName` format

**Example:**
- If your React component has: `<Link to="/About">About Us</Link>`
- In static HTML, use: `<a href="https://www.yourdomain.com/About">About Us</a>`

### Step 3: Include All External Links

Make sure ALL external links are in the static HTML:

- **Social Media**: Instagram, Facebook, YouTube, TikTok, etc. (with full URLs)
- **Maps**: Google Maps links (with full URLs)
- **Phone**: `tel:+1...` links
- **Email**: `mailto:...` links
- **Delivery/Order Links**: DoorDash, Uber Eats, Grubhub, etc. (with full URLs)
- **Any other external services**

### Step 4: Update package.json

Add/update scripts:

```json
{
  "scripts": {
    "build": "vite build",
    "start": "NODE_ENV=production node server.js",
    "preview": "vite preview"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### Step 5: Create/Update Sitemap

Create or update `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.yourdomain.com/</loc>
    <lastmod>2024-12-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add all your pages -->
</urlset>
```

### Step 6: Update robots.txt

Create or update `public/robots.txt`:

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://www.yourdomain.com/sitemap.xml
```

### Step 7: Test Crawlability

After implementation, test with:

```bash
# Test as a crawler
curl -A "GPTBot" https://www.yourdomain.com/

# Should return full HTML with all content, not just <div id="root"></div>
```

---

## CRITICAL CHECKLIST

Before considering the migration complete, verify:

- [ ] All pages have static HTML content in `server.js`
- [ ] All navigation links use absolute URLs (`https://www.yourdomain.com/PageName`)
- [ ] All external links (social media, maps, phone, email) are in static HTML with absolute URLs
- [ ] All buttons that link to pages use `<a href="...">` tags in static HTML
- [ ] All business information (name, address, phone, hours, products, services) is in static HTML
- [ ] All FAQs, testimonials, product details are in static HTML
- [ ] Schema.org structured data is included for all pages
- [ ] Meta tags (title, description, Open Graph) are set for all pages
- [ ] `sitemap.xml` lists all pages with correct URLs
- [ ] `robots.txt` allows AI crawlers
- [ ] Server detects crawlers correctly and serves static HTML
- [ ] Regular users still get the React app (client-side routing works)
- [ ] All forms are visible in static HTML (even if non-functional for crawlers)

---

## DEPLOYMENT NOTES

1. **Render.com**: Deploy as a "Web Service" (not "Static Site") so the Express server runs
2. **Environment Variables**: Set `BASE_URL` to your production domain
3. **Build Process**: The build should create `dist/` folder, then `server.js` serves from there
4. **Port**: Render.com will set `PORT` environment variable automatically

---

## VERIFICATION

After deployment, verify AI crawlability:

1. **View Source**: Right-click → "View Page Source" - should see full HTML content, not just `<div id="root"></div>`
2. **Test with curl**: `curl -A "GPTBot" https://www.yourdomain.com/` - should return full HTML
3. **Check Links**: All links in the HTML source should be absolute URLs
4. **Test AI Models**: Ask Claude/ChatGPT about your business - they should be able to access your website info

---

## IMPORTANT NOTES

- **Don't break existing functionality**: The React app should still work normally for regular users
- **Hybrid approach**: Crawlers get static HTML, users get the React SPA
- **Keep React components**: Don't delete your React components - they're still needed for the user experience
- **Update regularly**: When you add new pages or content, update both the React component AND the static HTML in `server.js`

---

**Start by:**
1. Analyzing all pages in your React app
2. Listing all routes and their content
3. Identifying all external links
4. Creating the `server.js` file with static HTML for each page
5. Testing locally before deploying

