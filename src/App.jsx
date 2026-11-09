import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import LuxuryLoader from './components/LuxuryLoader';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LuxuryCursor from './components/LuxuryCursor';

// ─── Route-based Code Splitting ───────────────────────────────────────────────
const HomePage            = lazy(() => import('./pages/HomePage'));
const BridalPage = lazy(() => import('./pages/BridalPage'));
const ShopPage            = lazy(() => import('./pages/ShopPage'));
const ProductDetailsPage  = lazy(() => import('./pages/ProductDetailsPage'));
const AboutPage           = lazy(() => import('./pages/AboutPage'));
const ContactPage         = lazy(() => import('./pages/ContactPage'));
const CartPage            = lazy(() => import('./pages/CartPage'));
const CheckoutPage        = lazy(() => import('./pages/CheckoutPage'));
const NotFoundPage        = lazy(() => import('./pages/NotFoundPage'));

// ─── Minimal Suspense Fallback ────────────────────────────────────────────────
function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="h-8 w-8 animate-pulse rounded-full bg-sand" />
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);
  // 2800ms gives the intro sequence time to breathe: blur-clear (0.3–1.5s) + hold + fade out (0.75s)
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setAppReady(true), 2800);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      {/* Gold custom cursor — desktop only (hidden on touch via CSS) */}
      <LuxuryCursor />

      {/* Cinematic intro — AnimatePresence fires the exit fade */}
      <AnimatePresence>
        {!appReady && <LuxuryLoader key="loader" />}
      </AnimatePresence>

      {appReady && (
        <div className="min-h-screen bg-cream font-body text-cocoa">
          <Navbar />
          <Suspense fallback={<PageFallback />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/"             element={<HomePage />} />
                <Route path="/bridal" element={<BridalPage />} />
                <Route path="/shop"         element={<ShopPage />} />
                <Route path="/products"     element={<Navigate to="/shop" replace />} />
                <Route path="/products/:id" element={<ProductDetailsPage />} />
                <Route path="/cart"         element={<CartPage />} />
                <Route path="/checkout"     element={<CheckoutPage />} />
                <Route path="/about"        element={<AboutPage />} />
                <Route path="/contact"      element={<ContactPage />} />
                <Route path="*"            element={<NotFoundPage />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
          <Footer />
          <CartDrawer />
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}

export default App;
