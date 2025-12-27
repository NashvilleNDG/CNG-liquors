# Google Login Setup for CNG Wine & Spirits Dashboard

## Current Status: ✅ Configured Correctly

Google Authentication is **enabled** in the Base44 dashboard using the default Base44 OAuth. The implementation now uses the correct Base44 SDK method according to [Base44 documentation](https://docs.base44.com/Setting-up-your-app/Managing-login-and-registration#customizing-the-google-login).

## Solution

According to Base44 documentation, to log users in, **always use `base44.auth.redirectToLogin(nextUrl)`**. This method:
- Sends the user to Base44's login page
- Shows all enabled authentication options (Email, Google, etc.)
- Brings the user back to your site after they sign in

**Implementation:**
```javascript
base44.auth.redirectToLogin(redirectUrl);
```

## How Google Login Works

According to [Base44 documentation](https://docs.base44.com/Setting-up-your-app/Managing-login-and-registration#customizing-the-google-login), the login flow works like this:

1. User clicks "Continue with Google" button
2. Code calls `base44.auth.redirectToLogin('/Dashboard')`
3. User is redirected to Base44's login page (managed by Base44)
4. User can choose to login with:
   - Email and password
   - Google (if enabled in dashboard)
   - Microsoft (if enabled)
   - Facebook (if enabled)
5. After successful authentication, Base44 redirects user back to `/Dashboard`
6. User is now authenticated and can access the dashboard

## Key Points from Base44 Documentation

- ✅ **Always use `base44.auth.redirectToLogin(nextUrl)`** - This is the correct method
- ❌ **Don't use `User.login()`** - This is not supported and will cause errors
- ✅ **Base44 manages the login page** - You don't need to create custom login pages
- ✅ **All enabled auth methods** (Email, Google, etc.) appear on Base44's login page automatically

## Configuration Details

### Base44 Dashboard Settings

- ✅ **Google authentication:** Enabled
- ✅ **OAuth Type:** Default Base44 OAuth (selected)
- ✅ **Status:** Active

### Current Implementation

The code now correctly uses:
```javascript
base44.auth.redirectToLogin(redirectUrl);
```

This redirects users to Base44's managed login page where they can choose Google (or any other enabled authentication method).

## Configuration Details

### Base44 Dashboard Settings

- ✅ **Google authentication:** Enabled
- ✅ **OAuth Type:** Default Base44 OAuth (selected)
- ✅ **Status:** Active

### Implementation Notes

The code tries multiple methods in order:
1. Base44 SDK methods (`signInWithGoogle`, `googleLogin`)
2. Base44 OAuth URL redirect (`/auth/oauth/google`)

## Custom Google OAuth Setup (Optional - Advanced)

If you want to use **custom Google OAuth** (shows your domain instead of "base44.com" in the Google login window), you'll need:

1. **Builder plan or higher** (required for custom OAuth)
2. **Custom domain** connected to your app
3. **Google Cloud Console** project setup
4. Follow the detailed instructions in [Base44 documentation](https://docs.base44.com/Setting-up-your-app/Managing-login-and-registration#customizing-the-google-login)

For most use cases, the **default Base44 OAuth** (currently configured) works perfectly fine.

## Reference Documentation

- [Base44 Login and Registration Guide](https://docs.base44.com/Setting-up-your-app/Managing-login-and-registration)
- [Customizing Google Login](https://docs.base44.com/Setting-up-your-app/Managing-login-and-registration#customizing-the-google-login)

## Previous Setup Instructions (Reference - For Custom OAuth Only)

1. **Log in to Base44 Dashboard**
   - Go to: https://app.base44.com
   - Sign in with your Base44 account

2. **Navigate to App Settings**
   - Select your app: `6941d136f08b371ab7b95ffa` (CNG Wine & Spirits)
   - Go to **Authentication** or **SSO** settings

3. **Enable Google OAuth**
   - Find "Social Login" or "OAuth Providers" section
   - Enable Google as an authentication provider
   - Configure OAuth credentials:
     - Client ID (from Google Cloud Console)
     - Client Secret (from Google Cloud Console)
     - Redirect URI: `https://www.cngliquors.com/auth/callback`

4. **Get Google OAuth Credentials**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs:
     - `https://www.cngliquors.com/auth/callback`
     - `https://app.base44.com/api/apps/6941d136f08b371ab7b95ffa/auth/sso/callback`

5. **Update Code**
   - Once configured in Base44, uncomment the Google login button in `src/pages/Login.jsx`
   - Change `{false && (` to `{true && (` around line 127

### Option 2: Use Email/Password Login

The email/password login is fully functional and should be used until Google SSO is configured:

- **Email:** `nashvillendg@gmail.com`
- **Password:** (Set in Base44 dashboard)

## Current Implementation

The code is ready for Google login once Base44 SSO is configured:

- ✅ OAuth callback handler: `src/components/auth/OAuthCallback.jsx`
- ✅ Route configured: `/auth/callback`
- ✅ Google login button UI (currently hidden)
- ✅ Error handling for SSO failures

## Testing Google Login

Once Google SSO is configured in Base44:

1. Uncomment the Google login button in `src/pages/Login.jsx`
2. Click "Continue with Google"
3. You should be redirected to Google's OAuth consent screen
4. After authorizing, you'll be redirected back to `/auth/callback`
5. The callback handler will authenticate you and redirect to `/Dashboard`

## Notes

- The Base44 SSO endpoint format is: `https://app.base44.com/api/apps/{APP_ID}/auth/sso/google`
- Make sure the redirect URI matches exactly what's configured in both Base44 and Google Cloud Console
- The OAuth callback handler (`OAuthCallback.jsx`) will need to be updated based on how Base44 returns the authentication tokens
