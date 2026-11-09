/**
 * Quantity stepper control with accessible labels.
 * @param {{ quantity: number, onDecrease: () => void, onIncrease: () => void, min?: number, max?: number }} props
 */
function QuantitySelector({ quantity, onDecrease, onIncrease, min = 1, max = 99 }) {
  return (
    <div
      className="inline-flex items-center overflow-hidden rounded-full border border-sand bg-white"
      role="group"
      aria-label="Quantity"
    >
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex h-10 w-10 items-center justify-center text-lg text-cocoa transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
      >
        −
      </button>
      <output
        aria-live="polite"
        aria-atomic="true"
        className="w-10 text-center text-sm font-semibold text-cocoa"
      >
        {quantity}
      </output>
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="flex h-10 w-10 items-center justify-center text-lg text-cocoa transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
