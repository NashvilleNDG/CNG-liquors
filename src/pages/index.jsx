import Layout from "./Layout.jsx";

import About from "./About";

import Contact from "./Contact";

import Delivery from "./Delivery";

import Home from "./Home";

import Selection from "./Selection";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    About: About,
    
    Contact: Contact,
    
    Delivery: Delivery,
    
    Home: Home,
    
    Selection: Selection,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    // Default to Home if no page found or if root path
    if (!urlLastPart || urlLastPart === '') {
      return 'Home';
    }
    return pageName || 'Home';
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Delivery" element={<Delivery />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Selection" element={<Selection />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}