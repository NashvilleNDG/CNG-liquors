


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