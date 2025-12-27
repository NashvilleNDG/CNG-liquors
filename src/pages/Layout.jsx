
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl, createAbsolutePageUrl, isSSRContext } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react';
import { Toaster } from 'sonner';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/92d9c1617_CNGLogoPNG.png";

const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'Our Selection', page: 'Selection' },
  { name: 'Delivery', page: 'Delivery' },
  { name: 'About Us', page: 'About' },
  { name: 'Contact', page: 'Contact' },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSSR, setIsSSR] = useState(false);
  
  // Detect SSR/crawler context on mount
  useEffect(() => {
    setIsSSR(isSSRContext());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load tracking scripts and preconnect to external origins
  useEffect(() => {
    // Add favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = LOGO_URL;
    document.head.appendChild(favicon);

    // Add dns-prefetch and preconnect links for performance
    const origins = [
      { url: 'https://qtrypzzcjebvfcihiynt.supabase.co', preconnect: true },
      { url: 'https://www.googletagmanager.com', preconnect: false },
      { url: 'https://www.google-analytics.com', preconnect: false },
      { url: 'https://t.contentsquare.net', preconnect: false }
    ];
    
    origins.forEach(({ url, preconnect }) => {
      // DNS prefetch for all
      const dnsLink = document.createElement('link');
      dnsLink.rel = 'dns-prefetch';
      dnsLink.href = url;
      document.head.appendChild(dnsLink);
      
      // Preconnect only for critical origins
      if (preconnect) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    // Defer third-party scripts until page is fully loaded
    const loadThirdPartyScripts = () => {
      // Google Tag Manager
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MRWZZRGW');

      // Google Analytics
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-PX2J5VXVTG';
      document.head.appendChild(gtagScript);

      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PX2J5VXVTG');

      // Hotjar/ContentSquare
      const hotjarScript = document.createElement('script');
      hotjarScript.src = 'https://t.contentsquare.net/uxa/44bbf16319113.js';
      document.head.appendChild(hotjarScript);
    };

    // Load scripts after user interaction or after delay
    let scriptsLoaded = false;
    const loadScripts = () => {
      if (scriptsLoaded) return;
      scriptsLoaded = true;
      loadThirdPartyScripts();
    };

    // Delay script loading
    const isMobile = window.innerWidth <= 768;
    const delay = isMobile ? 6000 : 4000;
    const timer = setTimeout(loadScripts, delay);

    // Load on user interaction
    const interactionEvents = ['mousedown', 'touchstart', 'keydown', 'scroll'];
    const handleInteraction = () => {
      clearTimeout(timer);
      loadScripts();
      interactionEvents.forEach(event => window.removeEventListener(event, handleInteraction));
    };

    interactionEvents.forEach(event => window.addEventListener(event, handleInteraction, { once: true, passive: true }));

    return () => {
      clearTimeout(timer);
      interactionEvents.forEach(event => window.removeEventListener(event, handleInteraction));
    };
  }, [currentPageName]);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [currentPageName]);

  const isHomePage = currentPageName === 'Home';
  const headerBg = 'bg-[#1A1A1A] shadow-lg';
  const textColor = 'text-white';

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-MRWZZRGW"
          height="0" 
          width="0" 
          style={{display: 'none', visibility: 'hidden'}}
        />
      </noscript>
      <Toaster richColors />
      {/* Top Bar */}
      <div className="bg-[#1A1A1A] text-white py-2 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+16158958777" className="flex items-center gap-2 hover:text-[#C9A962] transition-colors">
              <Phone className="w-4 h-4" />
              (615) 895-8777
            </a>
            <a 
              href="https://maps.google.com/?q=2750+S+Rutherford+Blvd,+Murfreesboro,+TN+37130"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#C9A962] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              2750 S Rutherford Blvd, Murfreesboro, TN
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C9A962]" />
            <span>Open Today: 8 AM – 11 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between lg:justify-between">
            {/* Logo */}
            {isSSR ? (
              <a href={createAbsolutePageUrl('Home')} className="flex items-center gap-3 lg:flex-initial flex-1 lg:justify-start justify-center">
                <div className="bg-white rounded-full p-2.5 shadow-lg">
                  <img 
                    src={LOGO_URL} 
                    alt="CNG Wine & Spirits Logo" 
                    className="h-10 w-auto"
                    width="40"
                    height="40"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </a>
            ) : (
              <Link to={createPageUrl('Home')} className="flex items-center gap-3 lg:flex-initial flex-1 lg:justify-start justify-center">
                <div className="bg-white rounded-full p-2.5 shadow-lg">
                  <img 
                    src={LOGO_URL} 
                    alt="CNG Wine & Spirits Logo" 
                    className="h-10 w-auto"
                    width="40"
                    height="40"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </Link>
            )}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const pageUrl = createPageUrl(link.page);
                const absoluteUrl = createAbsolutePageUrl(link.page);
                const isActive = currentPageName === link.page;
                
                // Use absolute URLs for SSR/crawlers, React Router Links for regular users
                if (isSSR) {
                  return (
                    <a
                      key={link.page}
                      href={absoluteUrl}
                      className={`font-medium transition-colors hover:text-[#C9A962] ${textColor} ${
                        isActive ? 'text-[#C9A962]' : ''
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                }
                
                return (
                  <Link
                    key={link.page}
                    to={pageUrl}
                    className={`font-medium transition-colors hover:text-[#C9A962] ${textColor} ${
                      isActive ? 'text-[#C9A962]' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              {isSSR ? (
                <a
                  href={createAbsolutePageUrl('Delivery')}
                  className="px-6 py-3 bg-[#722F37] hover:bg-[#8B3A42] text-white rounded-lg font-medium transition-all shadow-lg shadow-[#722F37]/30"
                >
                  Order Online
                </a>
              ) : (
                <Link
                  to={createPageUrl('Delivery')}
                  className="px-6 py-3 bg-[#722F37] hover:bg-[#8B3A42] text-white rounded-lg font-medium transition-all shadow-lg shadow-[#722F37]/30"
                >
                  Order Online
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${textColor} absolute right-6`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#1A1A1A] border-t border-gray-700"
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {navLinks.map((link) => {
                  const pageUrl = createPageUrl(link.page);
                  const absoluteUrl = createAbsolutePageUrl(link.page);
                  const isActive = currentPageName === link.page;
                  
                  // Use absolute URLs for SSR/crawlers, React Router Links for regular users
                  if (isSSR) {
                    return (
                      <a
                        key={link.page}
                        href={absoluteUrl}
                        className={`block py-3 font-medium border-b border-gray-700 ${
                          isActive ? 'text-[#C9A962]' : 'text-white'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  }
                  
                  return (
                    <Link
                      key={link.page}
                      to={pageUrl}
                      className={`block py-3 font-medium border-b border-gray-700 ${
                        isActive ? 'text-[#C9A962]' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                {isSSR ? (
                  <a
                    href={createAbsolutePageUrl('Delivery')}
                    className="block w-full text-center px-6 py-3 bg-[#722F37] text-white rounded-lg font-medium mb-2.5"
                  >
                    Order Online
                  </a>
                ) : (
                  <Link
                    to={createPageUrl('Delivery')}
                    className="block w-full text-center px-6 py-3 bg-[#722F37] text-white rounded-lg font-medium mb-2.5"
                  >
                    Order Online
                  </Link>
                )}
                <a
                  href="tel:+16158958777"
                  className="block w-full text-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium"
                >
                  Call (615) 895-8777
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="bg-white rounded-full p-3 inline-block mb-6">
                <img 
                  src={LOGO_URL} 
                  alt="CNG Wine & Spirits" 
                  className="h-16 w-auto"
                  width="64"
                  height="64"
                  loading="lazy"
                />
              </div>
              <p className="text-white leading-relaxed">
                Your premier destination for fine wines, premium spirits, and craft beers in Murfreesboro, Tennessee.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-serif text-[#C9A962] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link 
                      to={createPageUrl(link.page)}
                      className="text-white hover:text-[#C9A962] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Store Hours */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-serif text-[#C9A962] mb-6">Store Hours</h4>
              <ul className="space-y-2 text-white">
                <li className="flex justify-between md:justify-between justify-center gap-4">
                  <span>Mon - Sat</span>
                  <span>8 AM – 11 PM</span>
                </li>
                <li className="flex justify-between md:justify-between justify-center gap-4">
                  <span>Sunday</span>
                  <span>10 AM – 10 PM</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-serif text-[#C9A962] mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://maps.google.com/?q=2750+S+Rutherford+Blvd,+Murfreesboro,+TN+37130"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white hover:text-[#C9A962] transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                    <span className="text-left">2750 S Rutherford Blvd, Murfreesboro, TN 37130</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+16158958777"
                    className="flex items-center gap-3 text-white hover:text-[#C9A962] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#C9A962]" />
                    <span className="text-left">(615) 895-8777</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:cngliquors@gmail.com"
                    className="flex items-center gap-3 text-white hover:text-[#C9A962] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#C9A962]" />
                    <span className="text-left">cngliquors@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center mb-8">
              <h3 className="text-lg font-serif text-white mb-6">Follow Us</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.instagram.com/cngliquor/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#E4405F] rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Follow us on Instagram">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/CNGLIQUOR" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Follow us on Facebook">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.youtube.com/@CNGWineandSpirits" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Subscribe on YouTube">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@cngwinespirits" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#000000] rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Follow us on TikTok">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href="https://www.pinterest.com/cngliquors" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#E60023] rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Follow us on Pinterest">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941d136f08b371ab7b95ffa/412364744_Pinteresticon.png" alt="Pinterest" className="w-6 h-6" width="24" height="24" loading="lazy" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="text-white text-sm">
              © {new Date().getFullYear()} CNG Wine & Spirits. All rights reserved. Designed & Developed By <a href="https://nashvilledigitalgroup.com/" target="_blank" rel="noopener noreferrer" className="text-[#C9A962] hover:underline">Nashville Digital Group</a>
            </div>
            <p className="text-white text-sm">
              Must be 21 or older to purchase. Please drink responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
