import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import QuantitySelector from '../components/QuantitySelector';
import PageTransition from '../components/PageTransition';
import { formatPrice } from '../utils/currency';

function ProductDetailsPage() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, setIsOpen } = useCart();

  const product = products.find((item) => item.id === id);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter((item) => item.id !== product.id).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <PageTransition>
        <main className="section-width section-padding flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-heading text-5xl text-cocoa">Product Not Found</h1>
          <p className="text-sm text-cocoa/60">
            The piece you are looking for is no longer available.
          </p>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </main>
      </PageTransition>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsOpen(true);
  };

  return (
    <PageTransition>
      <main className="section-width section-padding py-16 md:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-cocoa/50">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold">Shop</Link></li>
            <li>/</li>
            <li className="text-cocoa/80" aria-current="page">{product.name}</li>
          </ol>
        </nav>

        {/* Product Grid */}
        <section className="grid gap-12 md:grid-cols-2" aria-label="Product details">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="overflow-hidden rounded-3xl bg-white shadow-card">
              <img
                src={product.images[activeImage]}
                alt={`${product.name} — view ${activeImage + 1}`}
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.02]"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={`${product.id}-thumb-${index}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                  aria-pressed={activeImage === index}
                  className={`overflow-hidden rounded-2xl border-2 transition ${
                    activeImage === index ? 'border-gold' : 'border-transparent hover:border-sand'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="space-y-7"
          >
            <div>
              <p className="text-2xs font-semibold uppercase tracking-[0.3em] text-gold">
                {product.category}
              </p>
              <h1 className="mt-2 font-heading text-4xl leading-tight md:text-5xl">{product.name}</h1>
              <p className="mt-2 text-2xl font-semibold text-cocoa">{formatPrice(product.price)}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.limitedEdition && <span className="badge">Limited Edition</span>}
              {product.stock <= 5 && (
                <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-2xs font-semibold uppercase tracking-widest text-amber-600">
                  Only {product.stock} left
                </span>
              )}
            </div>

            <p className="leading-relaxed text-cocoa/75">{product.description}</p>

            {/* Materials */}
            <div className="rounded-2xl border border-sand/60 bg-cream/60 p-5">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-cocoa/60">
                Materials
              </h2>
              <ul className="space-y-1.5">
                {product.materials.map((material) => (
                  <li key={material} className="flex items-center gap-2 text-sm text-cocoa/80">
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {material}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-wrap items-center gap-4">
              <QuantitySelector
                quantity={quantity}
                onDecrease={() => setQuantity((prev) => Math.max(1, prev - 1))}
                onIncrease={() => setQuantity((prev) => prev + 1)}
                max={product.stock}
              />
              <button onClick={handleAddToCart} className="btn-primary flex-1">
                Add to Bag — {formatPrice(product.price * quantity)}
              </button>
            </div>
          </motion.div>
        </section>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="mb-8 font-heading text-3xl">You May Also Like</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </main>
    </PageTransition>
  );
}

export default ProductDetailsPage;
