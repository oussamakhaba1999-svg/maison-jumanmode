import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useScrolled } from '../hooks/useScrolled';
import { NAV_LINKS, BRAND_NAME } from '../constants/navigation';
import logoImg from '../assets/logos/ChatGPT Image 21 مارس 2026، 03_27_33 م.png';

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-sand/60 bg-cream/96 backdrop-blur-2xl"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-400 ${
                      isActive
                        ? 'bg-gold/10 text-gold'
                        : 'text-cocoa/75 hover:bg-white hover:text-cocoa'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/cart"
                onClick={onClose}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-cocoa/75 transition-all duration-400 hover:bg-white hover:text-cocoa"
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(24);
  const { pathname } = useLocation();
  const { itemCount, setIsOpen } = useCart();

  const isHomeTop = pathname === '/' && !scrolled;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isHomeTop
          ? 'border-transparent bg-[#17130f]'
          : 'border-b border-sand/40 bg-cream/94 shadow-[0_1px_32px_rgba(30,26,22,0.07)] backdrop-blur-2xl'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">

        {/* ── Brand Logo + Tagline ── */}
        <Link
          to="/"
          aria-label={`${BRAND_NAME} – Home`}
          className="group flex flex-shrink-0 items-center gap-3"
        >
          <div className="relative">
            <img
              src={logoImg}
              alt={BRAND_NAME}
              className={`h-10 w-10 rounded-full object-cover transition-all duration-700 md:h-11 md:w-11 ${
                isHomeTop
                  ? 'ring-1 ring-white/25 brightness-105'
                  : 'ring-1 ring-sand group-hover:ring-gold/60'
              }`}
            />
            {/* Gold glow on hover (desktop) */}
            <span
              className={`absolute inset-0 rounded-full transition-all duration-700 ${
                isHomeTop ? '' : 'group-hover:shadow-[0_0_16px_rgba(201,169,110,0.4)]'
              }`}
            />
          </div>

          {/* Wordmark + signature */}
          <div className="flex flex-col leading-none">
            <span
              className={`font-heading text-[11px] tracking-[0.08em] sm:text-base lg:text-lg transition-all duration-500 ${
                isHomeTop ? 'text-white' : 'text-cocoa'
              }`}
            >
              {BRAND_NAME}
            </span>
            <span
              className={`mt-0.5 text-[8px] sm:text-[10px] font-light uppercase tracking-[0.28em] transition-all duration-500 ${
                isHomeTop ? 'text-white/45' : 'text-gold/70'
              }`}
            >
              Handcrafted in Morocco
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => {
                    const base = isHomeTop
                      ? 'text-white/70 hover:text-white'
                      : 'text-cocoa/60 hover:text-cocoa';
                    return `nav-link-underline text-xs font-medium uppercase tracking-[0.14em] transition-all duration-400 ${
                      isActive ? (isHomeTop ? 'text-white' : 'text-gold active') : base
                    }`;
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Actions ── */}
        <div className="flex items-center gap-2.5">

          {/* Cart page link (desktop) */}
          <Link
            to="/cart"
            aria-label="View cart page"
            className={`hidden rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-500 md:inline-flex md:items-center md:gap-1.5 ${
              isHomeTop
                ? 'border border-white/35 text-white/80 hover:border-white hover:text-white'
                : 'border border-cocoa/12 text-cocoa/65 hover:border-cocoa/40 hover:text-cocoa'
            }`}
          >
            Cart
          </Link>

          {/* Cart drawer trigger */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label={`Open cart, ${itemCount} items`}
            className={`relative rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-500 ${
              isHomeTop
                ? 'border border-white/45 bg-white/10 text-white hover:bg-white hover:text-cocoa hover:shadow-[0_4px_18px_rgba(255,255,255,0.25)]'
                : 'border border-gold/30 bg-white text-cocoa shadow-sm hover:border-gold hover:bg-gold hover:text-white hover:shadow-[0_4px_20px_rgba(201,169,110,0.4)]'
            }`}
          >
            Bag
            {itemCount > 0 && (
              <motion.span
                key={itemCount}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -right-1.5 -top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-white shadow"
              >
                {itemCount}
              </motion.span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 md:hidden ${
              isHomeTop
                ? 'border border-white/40 text-white'
                : 'border border-sand bg-white text-cocoa shadow-sm hover:border-gold/40'
            }`}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-4 w-4 transition-transform duration-400 ${menuOpen ? 'rotate-45' : ''}`}
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
}

export default Navbar;
