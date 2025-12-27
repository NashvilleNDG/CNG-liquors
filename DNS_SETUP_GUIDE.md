# DNS Setup Guide for Domain Standardization

## Current DNS Configuration Analysis

Based on your DNS records:

### ✅ What's Working
- **`www.cngliquors.com`** → CNAME → `cng-liquors.onrender.com` ✅
  - This correctly points to your Render deployment
  - All traffic to `www.cngliquors.com` will reach your Render server

### ⚠️ What Needs Attention
- **`cngliquors.com`** (bare domain) → A Record → `216.24.57.1` ⚠️
  - Currently points to a different IP address (not Render)
  - Traffic to `cngliquors.com` goes to a different server
  - This IP may be from a previous hosting provider or old setup

## Recommended DNS Configuration

### Option 1: Point Bare Domain to Render (Recommended if Render supports apex domains)

Render.com typically requires CNAME records, but apex domains (bare domains) can't use CNAME records in standard DNS. Render may provide:

1. **ALIAS/ANAME Records** (if your DNS provider supports them)
   - Some DNS providers (Cloudflare, DNSimple, Route 53) support ALIAS/ANAME records
   - These allow apex domains to work like CNAME records

2. **Check Render Documentation**
   - Render may provide specific IP addresses for apex domains
   - Or they may recommend using a DNS provider that supports ALIAS records

### Option 2: Use Redirect Service (Easiest Solution)

If you can't point the apex domain to Render directly, use a redirect service:

1. **Keep current CNAME for www** ✅ (already correct)
2. **Update A record for `cngliquors.com`** to point to a redirect service
3. **Services that can help:**
   - **Cloudflare** (Free plan): Can set up redirects at DNS level
   - **DNS provider**: Some DNS providers offer redirect services

### Option 3: Server-Side Redirect (Already Implemented)

I've added server-side redirect logic to your `server.js` that will redirect `cngliquors.com` to `www.cngliquors.com` IF requests reach your Render server.

**However**, since your DNS A record points to `216.24.57.1` (not Render), requests to `cngliquors.com` won't reach Render, so this redirect won't work until you update DNS.

## Action Items

### Immediate Actions Needed:

1. **Check what `216.24.57.1` is:**
   - Is this from a previous hosting provider?
   - Is there a server running there that can redirect?
   - If yes, configure that server to redirect `cngliquors.com` → `www.cngliquors.com`

2. **Contact Render Support:**
   - Ask about apex domain support
   - Inquire if they provide IP addresses for A records
   - Check if they recommend a specific DNS provider

3. **Update DNS (Choose one):**
   
   **Option A: Use ALIAS/ANAME (if supported):**
   - Change A record for `cngliquors.com` to ALIAS pointing to `cng-liquors.onrender.com`
   - Only works if your DNS provider supports ALIAS records
   
   **Option B: Point to Render IP (if provided):**
   - Update A record for `cngliquors.com` to Render's IP address
   - Render would need to provide this
   
   **Option C: Use Redirect Service:**
   - Keep www CNAME as is ✅
   - Use a redirect service or update the server at `216.24.57.1` to redirect

## Current Status Summary

| Domain | Current Setup | Status | Action Needed |
|--------|---------------|--------|---------------|
| `www.cngliquors.com` | CNAME → Render | ✅ Working | None - keep as is |
| `cngliquors.com` | A → `216.24.57.1` | ⚠️ Points elsewhere | Update to point to Render or redirect |

## Testing After DNS Update

Once DNS is updated:

```bash
# Test www domain (should work)
curl -I https://www.cngliquors.com

# Test bare domain (should redirect to www)
curl -I https://cngliquors.com
# Should see: HTTP/1.1 301 Moved Permanently
# Location: https://www.cngliquors.com/
```

## Notes

- DNS changes can take 24-48 hours to propagate globally
- Use `dig` or `nslookup` to verify DNS changes
- The server-side redirect I added will work once DNS points `cngliquors.com` to Render

