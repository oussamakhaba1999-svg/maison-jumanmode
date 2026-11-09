import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

function ProductCard({ product, onQuickView }) {
  const { addToCart, setIsOpen } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product, 1);
    setIsOpen(true);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group card-base overflow-hidden"
    >
      {/* Image */}
      <Link
        to={`/products/${product.id}`}
        className="relative block overflow-hidden focus-visible:outline-2 focus-visible:outline-gold"
        aria-label={`View ${product.name}`}
        tabIndex={0}
      >
        {/* Product image with zoom */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          {/* Dark hover layer */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
        </div>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.limitedEdition && (
            <span className="badge">Limited Edition</span>
          )}
          {product.stock <= 3 && (
            <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-2xs font-semibold uppercase tracking-widest text-red-500 shadow-sm">
              Only {product.stock} left
            </span>
          )}
        </div>

        {/* Quick View hover button */}
        {onQuickView && (
          <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center pb-5 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              aria-label={`Quick view ${product.name}`}
              className="rounded-full bg-white/95 px-6 py-2.5 text-2xs font-semibold uppercase tracking-[0.2em] text-cocoa shadow-soft backdrop-blur-sm transition hover:bg-gold hover:text-white"
            >
              Quick View
            </button>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-2xs font-medium uppercase tracking-widest text-cocoa/45">
              {product.category}
            </p>
            <h3 className="mt-0.5 font-heading text-xl leading-snug text-cocoa">{product.name}</h3>
          </div>
          <p className="flex-shrink-0 text-sm font-semibold text-cocoa">{formatPrice(product.price)}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link to={`/products/${product.id}`} className="btn-outline flex-1 text-center">
            View
          </Link>
          <button onClick={handleAdd} className="btn-primary flex-1">
            Add to Bag
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default memo(ProductCard);
