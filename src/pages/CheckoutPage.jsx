import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import PageTransition from '../components/PageTransition';
import { formatPrice } from '../utils/currency';

const STEPS = [
  { id: 1, label: 'Shipping' },
  { id: 2, label: 'Payment' },
  { id: 3, label: 'Confirm' },
];

function CheckoutPage() {
  const { items, totalPrice, itemCount } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const totalItems = useMemo(
    () => items.reduce((count, item) => count + item.quantity, 0),
    [items]
  );

  const next = () => setCurrentStep((prev) => Math.min(3, prev + 1));
  const prev = () => setCurrentStep((prev) => Math.max(1, prev - 1));

  return (
    <PageTransition>
      <main className="section-width section-padding py-14 md:py-16">
        <h1 className="font-heading text-4xl text-cocoa">Checkout</h1>

        {/* Progress Steps */}
        <nav aria-label="Checkout steps" className="mt-6">
          <ol className="flex flex-wrap gap-2">
            {STEPS.map(({ id, label }) => {
              const isActive = currentStep === id;
              const isDone = currentStep > id;
              return (
                <li key={id}>
                  <div
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                      isActive
                        ? 'bg-cocoa text-white'
                        : isDone
                          ? 'bg-gold/15 text-gold'
                          : 'bg-white text-cocoa/45'
                    }`}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {id}. {label}
                    {isDone && <span className="ml-1.5">✓</span>}
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Step Content */}
          <section className="card-base space-y-6 p-6" aria-live="polite">
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <h2 className="font-heading text-2xl">Shipping Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="input-field" placeholder="Full Name" autoComplete="name" />
                  <input className="input-field" placeholder="Email Address" type="email" autoComplete="email" />
                  <input className="input-field" placeholder="Phone Number" type="tel" autoComplete="tel" />
                  <input className="input-field" placeholder="City" autoComplete="address-level2" />
                  <input className="input-field sm:col-span-2" placeholder="Street Address" autoComplete="street-address" />
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <h2 className="font-heading text-2xl">Payment Method</h2>
                <div role="group" aria-label="Payment method" className="flex flex-wrap gap-2">
                  {[
                    { id: 'card', label: 'Credit Card' },
                    { id: 'cod', label: 'Cash on Delivery' },
                  ].map(({ id, label }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPaymentMethod(id)}
                      aria-pressed={paymentMethod === id}
                      className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition ${
                        paymentMethod === id
                          ? 'bg-cocoa text-white'
                          : 'border border-sand bg-white text-cocoa hover:border-cocoa'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {paymentMethod === 'card' ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className="input-field sm:col-span-2" placeholder="Card Number" inputMode="numeric" autoComplete="cc-number" />
                    <input className="input-field" placeholder="Expiry MM/YY" autoComplete="cc-exp" />
                    <input className="input-field" placeholder="CVV" autoComplete="cc-csc" />
                    <input className="input-field sm:col-span-2" placeholder="Cardholder Name" autoComplete="cc-name" />
                  </div>
                ) : (
                  <div className="rounded-2xl border border-sand/60 bg-cream/50 p-4 text-sm text-cocoa/70">
                    Payment will be collected when your order is delivered. No upfront payment required.
                  </div>
                )}
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <h2 className="font-heading text-2xl">Confirm Order</h2>
                <p className="text-sm text-cocoa/70">
                  Your details are ready. Click <strong>Place Order</strong> to complete your MAISON JUMANMODE
                  purchase.
                </p>
                <button className="btn-primary">Place Order</button>
              </motion.div>
            )}

            {/* Navigation */}
            <div className="flex gap-3 border-t border-sand/50 pt-4">
              {currentStep > 1 && (
                <button onClick={prev} className="btn-outline">
                  ← Back
                </button>
              )}
              {currentStep < 3 && (
                <button onClick={next} className="btn-primary">
                  Continue →
                </button>
              )}
            </div>
          </section>

          {/* Order Summary */}
          <aside className="card-base h-fit p-6">
            <h2 className="font-heading text-2xl text-cocoa">Order Summary</h2>
            <p className="mt-1 text-xs text-cocoa/45">{totalItems} items</p>

            <div className="mt-5 space-y-3">
              {items.length === 0 ? (
                <p className="text-sm text-cocoa/60">No items in cart.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-2 text-sm">
                    <span className="text-cocoa/75 leading-snug">
                      {item.name}
                      <span className="ml-1 text-cocoa/40">x{item.quantity}</span>
                    </span>
                    <span className="flex-shrink-0 font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))
              )}
              <div className="h-px bg-sand" />
              <div className="flex justify-between font-semibold text-cocoa">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </PageTransition>
  );
}

export default CheckoutPage;
