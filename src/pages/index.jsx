import Layout from "./Layout.jsx";

import About from "./About";

import Contact from "./Contact";

import Delivery from "./Delivery";

import Home from "./Home";

import Selection from "./Selection";

import Login from "./Login";

import Dashboard from "./Dashboard";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import OAuthCallback from "../components/auth/OAuthCallback";

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
        <Routes>
                    {/* Auth routes without Layout */}
                    <Route path="/Login" element={<Login />} />
                    {/* OAuth callback route for Base44 SSO */}
                    <Route path="/auth/callback" element={<OAuthCallback />} />
                    <Route 
                        path="/Dashboard" 
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } 
                    />
            
            {/* Public routes with Layout */}
            <Route 
                path="/" 
                element={
                    <Layout currentPageName={currentPage}>
                        <Home />
                    </Layout>
                } 
            />
            <Route 
                path="/Home" 
                element={
                    <Layout currentPageName={currentPage}>
                        <Home />
                    </Layout>
                } 
            />
            <Route 
                path="/About" 
                element={
                    <Layout currentPageName={currentPage}>
                        <About />
                    </Layout>
                } 
            />
            <Route 
                path="/Contact" 
                element={
                    <Layout currentPageName={currentPage}>
                        <Contact />
                    </Layout>
                } 
            />
            <Route 
                path="/Delivery" 
                element={
                    <Layout currentPageName={currentPage}>
                        <Delivery />
                    </Layout>
                } 
            />
            <Route 
                path="/Selection" 
                element={
                    <Layout currentPageName={currentPage}>
                        <Selection />
                    </Layout>
                } 
            />
        </Routes>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}