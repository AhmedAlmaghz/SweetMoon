import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SocialSidebar from './components/SocialSidebar';

// استخدام React.lazy لتحميل المكونات بشكل ديناميكي
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const ProductPage = lazy(() => import('./components/ProductPage'));
const Products = lazy(() => import('./components/Products'));
const Locations = lazy(() => import('./components/Locations'));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SocialSidebar />
        {/* استخدام Suspense لتحديد مكون يظهر أثناء تحميل المكونات الديناميكية */}
        <Suspense fallback={<div className="text-center py-16">جاري التحميل...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;