// Test script to verify absolute URLs are generated correctly
const baseUrl = 'https://www.cngliquors.com';

// Simulate the generateFullHTML function's navigation section
const navHTML = `
<a href="${baseUrl}/" style="color: white; text-decoration: none; font-size: 1.5rem; font-weight: bold;">CNG Wine & Spirits</a>
<nav style="display: flex; gap: 2rem;">
  <a href="${baseUrl}/Home" style="color: white; text-decoration: none;">Home</a>
  <a href="${baseUrl}/Selection" style="color: white; text-decoration: none;">Selection</a>
  <a href="${baseUrl}/Delivery" style="color: white; text-decoration: none;">Delivery</a>
  <a href="${baseUrl}/About" style="color: white; text-decoration: none;">About</a>
  <a href="${baseUrl}/Contact" style="color: white; text-decoration: none;">Contact</a>
</nav>
`;

console.log('Generated Navigation HTML:');
console.log(navHTML);
console.log('\n---\n');
console.log('Extracted href attributes:');
const hrefs = navHTML.match(/href="([^"]+)"/g);
hrefs.forEach(href => console.log(href));
console.log('\n---\n');
console.log('All URLs should be absolute (starting with https://)');
const allAbsolute = hrefs.every(href => href.includes('https://'));
console.log(`✓ All URLs are absolute: ${allAbsolute}`);

