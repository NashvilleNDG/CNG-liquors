import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "6941d136f08b371ab7b95ffa", 
  requiresAuth: false // Temporarily disabled for local development
});
