module.exports = {
  source: 'build',
  include: [
    '/',
    '/Home',
    '/About',
    '/Contact',
    '/Delivery',
    '/Selection'
  ],
  skipThirdPartyRequests: true,
  cacheAjaxRequests: false,
  puppeteerArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process'
  ],
  // Wait for all content to load
  waitFor: 2000,
  // Remove scripts after rendering (optional)
  removeScriptTags: false,
  // Keep inline styles
  inlineCss: true,
  // Preload all images
  preloadImages: true,
  // Fix relative URLs
  fixWebpackChunksIssue: true,
  // Crawl all links
  crawlFrom: '/',
  // Include all content
  minifyHtml: false,
  // Keep all text content
  removeStyleTags: false
};

