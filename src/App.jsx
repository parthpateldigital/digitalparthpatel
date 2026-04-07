import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SeoServices from './pages/SeoServices'
import SmoServices from './pages/SmoServices'
import SmmServices from './pages/SmmServices'
import PpcServices from './pages/PpcServices'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'

// Admin Imports
import AdminLayout from './admin/layouts/AdminLayout'
import Dashboard from './admin/pages/Dashboard'
import Leads from './admin/pages/Leads'
import Services from './admin/pages/Services'
import SeoSettings from './admin/pages/SeoSettings'
import AdsManagement from './admin/pages/AdsManagement'
import BlogManagement from './admin/pages/Blog'
import Testimonials from './admin/pages/Testimonials'
import Media from './admin/pages/Media'
import Team from './admin/pages/Team'
import ContactSettings from './admin/pages/ContactSettings'
import WebsiteSettings from './admin/pages/WebsiteSettings'
import UsersManagement from './admin/pages/Users'
import Login from './admin/pages/Login'
import ProtectedRoute from './admin/components/ProtectedRoute'

import { ThemeProvider } from './admin/context/ThemeContext'
import { ToastProvider } from './admin/context/ToastContext'
import { BlogProvider } from './context/BlogContext'

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BlogProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              {/* Main Website Area */}
              <Route path="/" element={
                <div className="min-h-screen bg-dark text-slate-100 selection:bg-primary selection:text-white transition-colors duration-500">
                  <Navbar />
                  <main>
                    <Home />
                  </main>
                  <Footer />
                  <WhatsAppButton />
                  <ScrollToTopButton />
                </div>
              } />

              {/* Website Pages with Navbar/Footer */}
              <Route path="/*" element={
                <div className="min-h-screen bg-dark text-slate-100 selection:bg-primary selection:text-white transition-colors duration-500">
                  <Navbar />
                  <main>
                    <Routes>
                      <Route path="/services/Search-Engine-Optimization" element={<SeoServices />} />
                      <Route path="/services/Social-Media-Optimization" element={<SmoServices />} />
                      <Route path="/services/Social-Media-Marketing" element={<SmmServices />} />
                      <Route path="/services/Pay-Per-Click-Advertising" element={<PpcServices />} />
                       <Route path="/about" element={<About />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:id" element={<BlogPost />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="/terms-of-service" element={<TermsOfService />} />
                      <Route path="/cookie-policy" element={<CookiePolicy />} />
                    </Routes>
                  </main>
                  <Footer />
                  <WhatsAppButton />
                  <ScrollToTopButton />
                </div>
              } />

              {/* Admin Login - No Layout */}
              <Route path="/admin/login" element={<Login />} />

              {/* Admin Area with Sidebar/Navbar */}
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="leads" element={<Leads />} />
                  <Route path="services" element={<Services />} />
                  <Route path="seo" element={<SeoSettings />} />
                  <Route path="ads" element={<AdsManagement />} />
                  <Route path="blog" element={<BlogManagement />} />
                  <Route path="testimonials" element={<Testimonials />} />
                  <Route path="media" element={<Media />} />
                  <Route path="team" element={<Team />} />
                  <Route path="contact" element={<ContactSettings />} />
                  <Route path="website" element={<WebsiteSettings />} />
                  <Route path="users" element={<UsersManagement />} />
                </Route>
              </Route>
            </Routes>
          </Router>
        </BlogProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
