import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/QuantitySelector';
import PageTransition from '../components/PageTransition';
import { formatPrice } from '../utils/currency';

function CartPage() {
  const { items, totalPrice, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <PageTransition>
      <main className="section-width section-padding py-14 md:py-16">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-heading text-4xl text-cocoa">Your Bag</h1>
          {items.length > 0 && (
            <span className="text-xs text-cocoa/50">
              {items.reduce((s, i) => s + i.quantity, 0)} items
            </span>
          )}
        </div>

        {items.length === 0 ? (
          <div className="card-base p-12 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-sand">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-8 w-8 text-cocoa/30"
                aria-hidden="true"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <p className="text-cocoa/60">Your bag is empty.</p>
            <Link to="/shop" className="btn-primary mt-5 inline-flex">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
            {/* Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="card-base flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
                >
                  <Link to={`/products/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-36 w-28 rounded-2xl object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between gap-3">
                    <div>
                      <h2 className="font-heading text-xl text-cocoa">{item.name}</h2>
                      <p className="text-sm text-cocoa/55">{formatPrice(item.price)} each</p>
                    </div>
                    <QuantitySelector
                      quantity={item.quantity}
                      onDecrease={() => decreaseQuantity(item.id)}
                      onIncrease={() => increaseQuantity(item.id)}
                    />
                  </div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <p className="font-semibold text-cocoa">{formatPrice(item.price * item.quantity)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from bag`}
                      className="text-xs text-cocoa/40 transition hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Summary */}
            <aside className="card-base h-fit p-6">
              <h2 className="font-heading text-2xl text-cocoa">Order Summary</h2>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-cocoa/60">Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cocoa/60">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="h-px bg-sand" />
                <div className="flex justify-between text-base font-semibold text-cocoa">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>
              <Link to="/checkout" className="btn-primary mt-6 block w-full text-center">
                Proceed to Checkout
              </Link>
              <Link
                to="/shop"
                className="mt-3 block w-full text-center text-xs uppercase tracking-widest text-cocoa/45 transition hover:text-cocoa"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </PageTransition>
  );
}

export default CartPage;
