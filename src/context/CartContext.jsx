import { createContext, useContext, useMemo, useReducer, useEffect } from 'react';

// ─── Constants ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'jumanmode_cart';

// ─── Action Types ────────────────────────────────────────────────────────────
const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  UPDATE: 'UPDATE',
  CLEAR: 'CLEAR',
  SET_OPEN: 'SET_OPEN',
};

// ─── Reducer ─────────────────────────────────────────────────────────────────
function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      const { product, quantity = 1 } = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      const items = existing
        ? state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          )
        : [...state.items, { ...product, quantity }];
      return { ...state, items };
    }
    case ACTIONS.REMOVE:
      return { ...state, items: state.items.filter((item) => item.id !== action.payload) };

    case ACTIONS.INCREASE:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case ACTIONS.DECREASE:
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
          )
          .filter((item) => item.quantity > 0),
      };
    case ACTIONS.UPDATE:
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.max(1, action.payload.quantity) }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case ACTIONS.CLEAR:
      return { ...state, items: [] };
    case ACTIONS.SET_OPEN:
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
}

// ─── Initial State ────────────────────────────────────────────────────────────
function getInitialState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const items = stored ? JSON.parse(stored) : [];
    return { items, isOpen: false };
  } catch {
    return { items: [], isOpen: false };
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, getInitialState);

  // Persist cart items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      /* storage unavailable – fail silently */
    }
  }, [state.items]);

  const totalPrice = useMemo(
    () => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [state.items]
  );

  const itemCount = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      totalPrice,
      itemCount,
      setIsOpen: (open) => dispatch({ type: ACTIONS.SET_OPEN, payload: open }),
      addToCart: (product, quantity = 1) =>
        dispatch({ type: ACTIONS.ADD, payload: { product, quantity } }),
      removeFromCart: (id) => dispatch({ type: ACTIONS.REMOVE, payload: id }),
      increaseQuantity: (id) => dispatch({ type: ACTIONS.INCREASE, payload: id }),
      decreaseQuantity: (id) => dispatch({ type: ACTIONS.DECREASE, payload: id }),
      updateQuantity: (id, quantity) =>
        dispatch({ type: ACTIONS.UPDATE, payload: { id, quantity } }),
      clearCart: () => dispatch({ type: ACTIONS.CLEAR }),
    }),
    [state.items, state.isOpen, totalPrice, itemCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within <CartProvider>');
  return context;
}
