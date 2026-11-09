import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

// ─── Cart Item Row ─────────────────────────────────────────────────────────────
function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.22 }}
      className="flex gap-3 rounded-2xl border border-sand/60 bg-cream/40 p-3"
    >
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="h-20 w-16 flex-shrink-0 rounded-xl object-cover"
      />
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h4 className="text-sm font-semibold leading-tight text-cocoa">{item.name}</h4>
          <p className="mt-0.5 text-xs text-cocoa/60">{formatPrice(item.price)}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDecrease(item.id)}
            aria-label={`Decrease quantity of ${item.name}`}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-sand text-cocoa transition hover:border-gold hover:text-gold"
          >
            −
          </button>
          <span className="w-6 text-center text-xs font-semibold">{item.quantity}</span>
          <button
            onClick={() => onIncrease(item.id)}
            aria-label={`Increase quantity of ${item.name}`}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-sand text-cocoa transition hover:border-gold hover:text-gold"
          >
            +
          </button>
          <button
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from cart`}
            className="ml-auto text-xs font-medium text-cocoa/40 transition hover:text-red-400"
          >
            Remove
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Cart Drawer ──────────────────────────────────────────────────────────────
function CartDrawer() {
  const { isOpen, setIsOpen, items, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-cocoa/30 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-sand bg-white shadow-drawer"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-sand/60 px-6 py-5">
              <div>
                <h2 className="font-heading text-2xl text-cocoa">Your Bag</h2>
                <p className="text-xs text-cocoa/50">
                  {items.length === 0 ? 'Empty' : `${items.reduce((s, i) => s + i.quantity, 0)} items`}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sand text-cocoa/60 transition hover:border-cocoa hover:text-cocoa"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 space-y-3 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="rounded-full border border-sand p-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-10 w-10 text-cocoa/30"
                      aria-hidden="true"
                    >
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                  </div>
                  <p className="text-sm text-cocoa/60">Your bag is empty.</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn-outline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onIncrease={increaseQuantity}
                      onDecrease={decreaseQuantity}
                      onRemove={removeFromCart}
                    />
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer CTA */}
            {items.length > 0 && (
              <div className="space-y-3 border-t border-sand/60 px-6 py-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cocoa/60">Subtotal</span>
                  <span className="font-semibold text-cocoa">{formatPrice(totalPrice)}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary block w-full text-center"
                >
                  Checkout
                </Link>
                <Link
                  to="/cart"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center text-xs uppercase tracking-widest text-cocoa/50 transition hover:text-cocoa"
                >
                  View Full Cart
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
