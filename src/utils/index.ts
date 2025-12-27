


export function createPageUrl(pageName: string) {
    // Map page names to actual route paths (matching route definitions)
    const routeMap: Record<string, string> = {
        'Home': '/Home',
        'About': '/About',
        'Contact': '/Contact',
        'Delivery': '/Delivery',
        'Selection': '/Selection'
    };
    
    // Return mapped route or default to capitalized format
    return routeMap[pageName] || `/${pageName}`;
}

/**
 * Creates an absolute URL for a page (useful for SSR/crawler rendering)
 * @param pageName - The page name (e.g., 'Home', 'About')
 * @returns Absolute URL (e.g., 'https://www.cngliquors.com/Home')
 */
export function createAbsolutePageUrl(pageName: string): string {
    const baseUrl = typeof window !== 'undefined' 
        ? window.location.origin 
        : (process.env.VITE_BASE_URL || 'https://www.cngliquors.com');
    const relativePath = createPageUrl(pageName);
    return `${baseUrl}${relativePath}`;
}

/**
 * Detects if we're in SSR/crawler context
 * @returns true if rendering for SSR/crawlers, false for client-side
 */
export function isSSRContext(): boolean {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
        return true; // Server-side rendering
    }
    
    // Check if we're being rendered by a crawler (user agent check)
    const userAgent = window.navigator?.userAgent || '';
    const isCrawler = /bot|crawler|spider|GPTBot|ChatGPT|Claude|Google-Extended|anthropic|BingBot|Slurp|DuckDuckBot|Baiduspider|Yandex|Sogou|Exabot|Facebot|ia_archiver|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora|pinterest|slackbot/i.test(userAgent);
    
    // Check if JavaScript is disabled (noscript context)
    const hasNoScript = document.querySelector('noscript') !== null;
    
    return isCrawler || hasNoScript;
}