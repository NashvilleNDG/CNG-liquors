import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';

/**
 * Component to handle OAuth callback from Base44 SSO
 * This component extracts tokens/credentials from URL parameters
 * and authenticates the user, then redirects to Dashboard
 */
export default function OAuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log('OAuth callback received');
        console.log('URL search params:', Object.fromEntries(searchParams.entries()));

        // Extract token or code from URL parameters
        const token = searchParams.get('token') || searchParams.get('access_token');
        const code = searchParams.get('code');
        const error = searchParams.get('error');

        if (error) {
          console.error('OAuth error:', error);
          toast.error(`Authentication failed: ${error}`);
          navigate('/Login');
          return;
        }

        // If we have a token, store it and authenticate
        if (token) {
          // Store token and authenticate user
          localStorage.setItem('authToken', token);
          
          // Try to get user info from Base44
          try {
            // If Base44 SDK has a method to get user from token, use it
            // For now, create a basic user object
            const user = {
              email: searchParams.get('email') || 'user@example.com',
              id: searchParams.get('userId') || 'oauth-user',
              provider: 'google'
            };
            
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isAuthenticated', 'true');
            
            toast.success('Login successful!');
            navigate('/Dashboard');
          } catch (err) {
            console.error('Error processing OAuth callback:', err);
            toast.error('Authentication completed but failed to load user data.');
            navigate('/Login');
          }
        } else if (code) {
          // If we have an authorization code, exchange it for a token
          // This would typically be done server-side, but for Base44,
          // the SDK might handle this automatically
          console.log('Authorization code received:', code);
          toast.info('Processing authentication...');
          
          // Try to authenticate with the code using Base44 SDK
          // Note: This depends on Base44 SDK implementation
          // For now, redirect to login with a message
          toast.error('OAuth code exchange not implemented. Please use email/password login.');
          navigate('/Login');
        } else {
          // No token or code found
          console.warn('No token or code found in OAuth callback');
          toast.error('Invalid OAuth callback. Please try logging in again.');
          navigate('/Login');
        }
      } catch (error) {
        console.error('OAuth callback error:', error);
        toast.error('An error occurred during authentication.');
        navigate('/Login');
      }
    };

    handleCallback();
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#722F37] mx-auto mb-4"></div>
        <p className="text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
}

