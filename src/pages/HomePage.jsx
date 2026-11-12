import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import products, { galleryImages } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import PageTransition from '../components/PageTransition';
import SocialConnectSection from '../components/SocialConnectSection';
import ReviewsSection from '../components/ReviewsSection';
import PackagingSection from '../components/PackagingSection';
import QuickViewModal from '../components/QuickViewModal';
import { useCart } from '../context/CartContext';
import BridalSection from '../components/BridalSection';

const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

// ─── Stagger children animation helper ────────────────────────────────────────
const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  },
};

// ─── Cinematic Hero ────────────────────────────────────────────────────────────
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Parallax: bg image moves slower than scroll → zoom out feel
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative grid min-h-screen items-center overflow-hidden bg-[#17130f] md:grid-cols-2"
      aria-label="Hero"
    >
      {/* Parallax background */}
      <motion.div
        className="relative order-first md:order-last md:col-start-2 md:row-start-1"
        style={{ y: bgY }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/maison-jumanmode-homepage.jpeg`}
          alt="Maison Jumanmode bridal couture portrait with an embroidered wedding dress"
          width={1154}
          height={836}
          className="max-h-[90svh] w-full object-contain"
          fetchPriority="high"
          decoding="sync"
        />
      </motion.div>

      {/* Overlay — gradient for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      {/* Animated content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center text-white md:col-start-1 md:row-start-1 md:px-10"
      >
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.p
            variants={stagger.item}
            className="mb-5 text-2xs font-semibold uppercase tracking-[0.5em] text-white/50"
          >
            Handcrafted in Morocco — Since 2022
          </motion.p>

          {/* Main heading */}
          <motion.h1
            variants={stagger.item}
            className="font-heading text-6xl leading-[1.05] md:text-8xl"
          >
            Art You<br />
            <em className="not-italic text-gold">Carry.</em>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={stagger.item}
            className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/65 md:text-base"
          >
            Beaded, handcrafted, and born from passion — MAISON JUMANMODE creates
            handmade bags and bridal couture with meticulous care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={stagger.item}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-full bg-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-cocoa transition hover:bg-gold hover:text-white"
            >
              Discover Collection
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-white/30 px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:border-white hover:text-white"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/4 hidden md:flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-2xs font-medium uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ─── Marquee ticker ────────────────────────────────────────────────────────────
const tickerItems = [
  'Handcrafted Luxury',
  '✦',
  'Limited Edition',
  '✦',
  'Free Worldwide Shipping',
  '✦',
  'Certified Authentic',
  '✦',
  'Made in Morocco',
  '✦',
];

function Ticker() {
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-y border-sand/60 bg-white py-3.5" aria-hidden="true">
      <motion.div
        animate={{ x: '-33.33%' }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="flex w-max gap-10"
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`flex-shrink-0 text-2xs font-semibold uppercase tracking-[0.25em] ${
              item === '✦' ? 'text-gold' : 'text-cocoa/50'
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Brand Story ───────────────────────────────────────────────────────────────
function BrandStory() {
  return (
    <section className="section-width section-padding py-24" aria-label="Brand story">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main image */}
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src={`${import.meta.env.BASE_URL}images/maison-jumanmode-our-story.jpeg`}
              alt="MAISON JUMANMODE bridal couture atelier portrait"
              loading="lazy"
              width="768"
              height="1364"
              className="h-auto w-full"
            />
          </div>
          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute -bottom-6 -right-4 rounded-2xl border border-sand/60 bg-white/95 p-5 shadow-card backdrop-blur-md"
          >
            <p className="text-2xs font-semibold uppercase tracking-widest text-gold">Est. 2022</p>
            <p className="mt-1 font-heading text-xl text-cocoa">Bead by Bead.</p>
            <p className="mt-1 text-xs text-cocoa/55">Each piece takes 40+ hours.</p>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-7"
        >
          <div>
            <p className="text-2xs font-semibold uppercase tracking-[0.4em] text-gold">
              The Craft
            </p>
            <h2 className="mt-3 font-heading text-4xl leading-tight text-cocoa md:text-5xl">
              Every Bead<br />Has a Story.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-cocoa/70">
            <p>
              MAISON JUMANMODE was born from a love of texture, patience, and beauty. In a quiet atelier in
              Morocco, each bag is assembled crystal by crystal — no machines, no shortcuts.
            </p>
            <p>
              Our artisans have spent years mastering the art of hand-beading. They work with natural
              agate, faceted crystals, and silk-threaded glass beads sourced from trusted
              specialists.
            </p>
            <p>
              The result is something rare — a bag that feels as beautiful as it looks, and becomes
              more meaningful with every use.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 border-t border-sand/50 pt-7">
            {[
              { value: '40+', label: 'Hours per piece' },
              { value: '100%', label: 'Hand beaded' },
              { value: '6', label: 'Limited designs' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl text-gold">{stat.value}</p>
                <p className="text-xs text-cocoa/50">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-outline inline-flex">
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── HomePage ──────────────────────────────────────────────────────────────────
function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { addToCart, setIsOpen } = useCart();

  const handleQuickAdd = (product) => {
    addToCart(product, 1);
    setIsOpen(true);
    setQuickViewProduct(null);
  };

  return (
    <PageTransition>
      <main className="overflow-x-clip">
        {/* 1. Cinematic Hero */}
        <HeroSection />

        {/* 2. Scrolling ticker */}
        <Ticker />

        <section id="collections" aria-labelledby="collections-title" className="section-width section-padding py-24">
          <div className="mb-12 text-center">
            <p className="text-2xs font-semibold uppercase tracking-[0.35em] text-gold">Discover the Maison</p>
            <h2 id="collections-title" className="mt-4 font-heading text-4xl text-cocoa md:text-5xl">Our Collections</h2>
            <p className="mt-4 text-cocoa/65">Two collections. One passion for craftsmanship.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Link to="/shop" aria-label="Explore all handmade bags" className="group block overflow-hidden rounded-3xl border border-sand/60 bg-white transition hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
              <div className="overflow-hidden bg-sand/20"><img src={featuredProducts[0].image} alt="MAISON JUMANMODE handmade beaded bags" loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]" /></div>
              <div className="p-7 md:p-9"><h3 className="font-heading text-3xl text-cocoa">Handmade Bags</h3><p className="mt-3 text-sm leading-relaxed text-cocoa/65">Discover every handcrafted bag in our collection.</p><span className="mt-6 inline-block border-b border-gold pb-2 text-xs font-semibold uppercase tracking-widest text-cocoa">Explore All Bags →</span></div>
            </Link>
            <Link to="/bridal" aria-label="Explore all bridal wear" className="group block overflow-hidden rounded-3xl border border-sand/60 bg-white transition hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
              <div className="overflow-hidden bg-sand/20"><img src={`${import.meta.env.BASE_URL}images/maison-jumanmode-bridal-collection-1.jpeg`} alt="MAISON JUMANMODE bridal wear collection" loading="lazy" className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" /></div>
              <div className="p-7 md:p-9"><h3 className="font-heading text-3xl text-cocoa">Bridal Wear</h3><p className="mt-3 text-sm leading-relaxed text-cocoa/65">Explore our bridal creations for your special day.</p><span className="mt-6 inline-block border-b border-gold pb-2 text-xs font-semibold uppercase tracking-widest text-cocoa">Explore All Bridal Wear →</span></div>
            </Link>
          </div>
        </section>

        <BridalSection />

        {/* 4. Brand Story */}
        <BrandStory />

        {/* 5. Packaging / Promise */}
        <PackagingSection />

        {/* 6. Reviews */}
        <ReviewsSection />

        {/* 7. Instagram Grid */}
        <section className="section-width section-padding pb-24">
          <SectionTitle
            eyebrow="@jumanmode1"
            title="Follow the Craft"
            description="Captured moments of texture, light, and quiet luxury from our atelier."
          />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <motion.a
                key={`${index}-${image}`}
                href="https://www.instagram.com/jumanmode1"
                target="_blank"
                rel="noreferrer"
                aria-label={`MAISON JUMANMODE Instagram post ${index + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.06] group-hover:brightness-90"
                />
                {/* Instagram hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="rounded-full bg-black/40 px-4 py-2 backdrop-blur-sm">
                    <p className="text-2xs font-semibold uppercase tracking-widest text-white">
                      View Post
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* 8. Social Connect */}
        <SocialConnectSection />

        {/* Quick View Modal */}
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleQuickAdd}
        />
      </main>
    </PageTransition>
  );
}

export default HomePage;
