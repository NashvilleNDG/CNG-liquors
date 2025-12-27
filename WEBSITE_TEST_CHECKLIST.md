# Website Test Checklist - CNG Wine & Spirits

## ✅ Code Quality Checks

### Linting
- ✅ No linting errors found
- ✅ All pages properly exported
- ✅ Routing structure verified

### File Structure
- ✅ All page components exist (Home, About, Contact, Delivery, Selection)
- ✅ Layout component properly structured
- ✅ App.jsx entry point correct

---

## 🔍 Functional Testing Checklist

### Navigation Testing

#### Header Navigation
- [ ] Logo links to `/Home`
- [ ] "Home" link works → `/Home`
- [ ] "Our Selection" link works → `/Selection`
- [ ] "Delivery" link works → `/Delivery`
- [ ] "About Us" link works → `/About`
- [ ] "Contact" link works → `/Contact`
- [ ] "Order Online" button links to `/Delivery`

#### Mobile Menu
- [ ] Menu button toggles correctly
- [ ] All navigation links work in mobile view
- [ ] Menu closes on link click
- [ ] "Call (615) 895-8777" button works

#### Footer Navigation
- [ ] All footer links work correctly
- [ ] Social media links open in new tabs
- [ ] Phone and email links work

---

### Page Testing

#### Home Page (`/` and `/Home`)
- [ ] Page loads correctly
- [ ] Hero section displays
- [ ] All sections visible (Features, Categories, Testimonials, FAQs, etc.)
- [ ] Images load correctly
- [ ] "Stay Connected" email form displays
- [ ] Email popup triggers (after delay/conditions)
- [ ] All CTAs work

#### About Page (`/About`)
- [ ] Page loads correctly
- [ ] Store image displays
- [ ] All content sections visible
- [ ] "Get Directions" link works
- [ ] Links to other pages work

#### Contact Page (`/Contact`)
- [ ] Page loads correctly
- [ ] Contact form displays
- [ ] Store information visible (address, phone, email)
- [ ] Google Maps embed loads
- [ ] Store hours display correctly
- [ ] Form validation works:
  - [ ] Name required
  - [ ] Email required and validated
  - [ ] Message required
  - [ ] Phone optional
- [ ] Form submission works (saves to Base44)
- [ ] Success message displays
- [ ] Form resets after submission

#### Delivery Page (`/Delivery`)
- [ ] Page loads correctly
- [ ] DoorDash link works (opens in new tab)
- [ ] Uber Eats link works (opens in new tab)
- [ ] All sections display correctly
- [ ] CTAs work

#### Selection Page (`/Selection`)
- [ ] Page loads correctly
- [ ] All 6 categories display
- [ ] Category images load
- [ ] Category details visible
- [ ] Links work

---

### Form Testing

#### Stay Connected Form (Home Page)
- [ ] Email input accepts valid email
- [ ] Submit button works
- [ ] Form saves to Base44 (Subscriber entity)
- [ ] Success message displays
- [ ] Form clears after submission

#### Email Popup Form (Home Page)
- [ ] Popup appears after conditions met
- [ ] Email input works
- [ ] Submit saves to Base44
- [ ] Success message displays
- [ ] Popup closes automatically
- [ ] Close button works

#### Contact Form (`/Contact`)
- [ ] All fields accept input
- [ ] Validation works for required fields
- [ ] Email format validation
- [ ] Submission saves to Base44 (ContactEnquiry entity)
- [ ] Email notifications sent
- [ ] Success toast displays
- [ ] Form resets after success
- [ ] Error handling works

---

### External Links Testing

- [ ] Phone link: `tel:+16158958777` opens phone dialer
- [ ] Email link: `mailto:cngliquors@gmail.com` opens email client
- [ ] Google Maps link opens correctly
- [ ] DoorDash link opens in new tab
- [ ] Uber Eats link opens in new tab
- [ ] Facebook link opens correctly
- [ ] Instagram link opens correctly

---

### SEO & Crawlability Testing

#### Meta Tags
- [ ] All pages have proper `<title>` tags
- [ ] All pages have meta descriptions
- [ ] Open Graph tags present
- [ ] Twitter Card tags present

#### Structured Data
- [ ] Schema.org JSON-LD present in HTML
- [ ] LocalBusiness schema correct
- [ ] Reviews/ratings included
- [ ] Business information accurate

#### Sitemap & Robots
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] All pages listed in sitemap
- [ ] Sitemap uses correct domain (www.cngliquors.com)

#### Crawler Testing (Test with curl)
```bash
# Test as crawler (should return static HTML with full content)
curl -A "GPTBot" http://localhost:5173/ > crawler-test.html

# Verify crawler HTML contains:
# - Business name
# - Address
# - Phone
# - Hours
# - All navigation links
# - Structured data
```

---

### Performance Testing

- [ ] Page loads within reasonable time
- [ ] Images optimize correctly
- [ ] No console errors in browser
- [ ] Tracking scripts load correctly
- [ ] Mobile responsiveness works

---

### Browser Compatibility

Test in:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (if available)
- [ ] Mobile browser (Chrome mobile)

---

### Tracking Codes Verification

- [ ] Google Tag Manager loads (GTM-MRWZZRGW)
- [ ] Google Analytics loads (G-PX2J5VXVTG)
- [ ] ContentSquare loads (44bbf16319113)
- [ ] No console errors from tracking scripts

---

## 🚨 Known Issues / Notes

### Base44 Dependency
- Forms require Base44 to be configured and accessible
- If Base44 is not accessible, forms will show errors
- This is expected behavior

### Email Notifications
- Contact form sends emails to 2 addresses
- Email popup sends emails to 2 addresses
- Stay Connected form uses mailto: link (opens email client)

---

## ✅ Quick Verification Steps

1. **Start Dev Server:**
   ```bash
   npm run dev
   ```

2. **Visit:** http://localhost:5173

3. **Test Navigation:**
   - Click all header links
   - Verify pages load correctly
   - Test mobile menu

4. **Test Forms:**
   - Submit Stay Connected form
   - Submit Contact form (test with Base44 access)
   - Check Email popup behavior

5. **Check Browser Console:**
   - Open DevTools (F12)
   - Check for errors
   - Verify tracking scripts load

6. **Test Responsive Design:**
   - Resize browser window
   - Test mobile menu
   - Check all pages on mobile viewport

---

## 📊 Test Results

Date: ___________
Tester: ___________

### Overall Status
- [ ] ✅ All tests passed
- [ ] ⚠️ Some issues found (see notes below)
- [ ] ❌ Critical issues found

### Issues Found:
1. 
2. 
3. 

### Notes:
___________________________________________________
___________________________________________________

