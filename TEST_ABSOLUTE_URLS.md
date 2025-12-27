# Testing Absolute URLs for Crawlers

## How to Test

The absolute URLs are ONLY in the static HTML served to crawlers/bots. Regular browsers get the React app with relative URLs.

### Method 1: Using curl with a bot User-Agent

```bash
# Test as GPTBot (should return HTML with absolute URLs)
curl -A "GPTBot" https://cng-liquors.onrender.com/ > test.html

# Check the file
grep -i "href=" test.html | head -10

# You should see:
# <a href="https://www.cngliquors.com/Home">
# <a href="https://www.cngliquors.com/Selection">
# etc.
```

### Method 2: Using curl with format=html parameter

```bash
curl "https://cng-liquors.onrender.com/?format=html" > test.html
grep -i "href=" test.html | head -10
```

### Method 3: Using browser with User-Agent override

1. Open browser DevTools (F12)
2. Go to Network tab
3. Right-click on any request → "Edit and Resend"
4. Change User-Agent to: `GPTBot`
5. Send request
6. View response - should show absolute URLs

### Method 4: View Page Source as Bot

The static HTML is served when:
- User-Agent contains "bot", "crawler", "spider", "GPTBot", "ChatGPT", "Claude", etc.
- OR `?format=html` query parameter is used
- OR User-Agent doesn't contain "Mozilla"

Regular browser views (with "Mozilla" in User-Agent) get the React app with relative URLs - this is expected behavior.

## Expected Results

**For Crawlers (static HTML):**
```html
<a href="https://www.cngliquors.com/Home">Home</a>
<a href="https://www.cngliquors.com/Selection">Selection</a>
<a href="https://www.cngliquors.com/Delivery">Delivery</a>
<a href="https://www.cngliquors.com/About">About</a>
<a href="https://www.cngliquors.com/Contact">Contact</a>
```

**For Regular Users (React app):**
```html
<!-- React Router Links - relative URLs are correct here -->
<Link to="/Home">Home</Link>
```

