import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/currency';

function QuickViewModal({ product, onClose, onAddToCart }) {
  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-50 bg-cocoa/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="qv-product-name"
            className="fixed left-1/2 top-1/2 z-50 w-[94%] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-4xl border border-sand/60 bg-white shadow-soft"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close quick view"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-sand bg-white text-cocoa/60 transition hover:border-cocoa hover:text-cocoa"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="grid md:grid-cols-2">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] h-full w-full object-cover"
              />
              <div className="flex flex-col justify-center space-y-5 p-7">
                <div>
                  <p className="text-2xs font-semibold uppercase tracking-[0.28em] text-gold">
                    {product.category}
                  </p>
                  <h3 id="qv-product-name" className="mt-2 font-heading text-3xl text-cocoa">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xl font-semibold text-cocoa">{formatPrice(product.price)}</p>
                </div>
                <p className="text-sm leading-relaxed text-cocoa/70">{product.description}</p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <button onClick={() => onAddToCart(product)} className="btn-primary">
                    Add to Bag
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    onClick={onClose}
                    className="btn-outline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default QuickViewModal;
