import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/currency';

const AUTOPLAY_INTERVAL = 4500;

function FeaturedCarousel({ products }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, AUTOPLAY_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.length]);

  const goTo = (i) => {
    setIndex(i);
    startTimer(); // reset timer on manual interaction
  };

  const next = () => goTo((index + 1) % products.length);
  const prev = () => goTo((index - 1 + products.length) % products.length);

  const active = products[index];

  return (
    <section
      className="relative overflow-hidden rounded-4xl border border-sand/60 bg-white p-5 shadow-soft md:p-10"
      aria-label="Featured products carousel"
      aria-roledescription="carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-8 md:grid-cols-2"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${products.length}: ${active.name}`}
        >
          <div className="overflow-hidden rounded-3xl">
            <img
              src={active.image}
              alt={active.name}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover transition duration-700"
            />
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-2xs font-semibold uppercase tracking-[0.3em] text-gold">
                Featured Piece
              </p>
              <h3 className="mt-2 font-heading text-3xl leading-tight md:text-4xl">{active.name}</h3>
              <p className="mt-1 text-xl font-semibold text-cocoa">{formatPrice(active.price)}</p>
            </div>
            <p className="text-sm leading-relaxed text-cocoa/70">{active.description}</p>
            <Link to={`/products/${active.id}`} className="btn-primary inline-flex">
              Explore Piece
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2" aria-label="Slide indicators" role="tablist">
          {products.map((product, dotIndex) => (
            <button
              key={product.id}
              onClick={() => goTo(dotIndex)}
              role="tab"
              aria-selected={dotIndex === index}
              aria-label={`Go to ${product.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIndex === index ? 'w-6 bg-gold' : 'w-2 bg-sand'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-sand text-cocoa/70 transition hover:border-gold hover:text-gold"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-sand text-cocoa/70 transition hover:border-gold hover:text-gold"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCarousel;
