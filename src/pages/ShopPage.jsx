import { useMemo, useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import SectionTitle from '../components/SectionTitle';
import PageTransition from '../components/PageTransition';
import QuickViewModal from '../components/QuickViewModal';
import { useCart } from '../context/CartContext';

const PRICE_FILTER_MAP = {
  'all': () => true,
  'under-400': (p) => p.price < 400,
  '400-500': (p) => p.price >= 400 && p.price <= 500,
  'over-500': (p) => p.price > 500,
};

const POPULARITY_FILTER_MAP = {
  'all': () => true,
  'popular': (p) => p.popularity >= 88,
  'top-rated': (p) => p.popularity >= 94,
};

function ShopPage() {
  const [priceRange, setPriceRange] = useState('all');
  const [popularity, setPopularity] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { addToCart, setIsOpen } = useCart();

  const filteredProducts = useMemo(() => {
    const priceFilter = PRICE_FILTER_MAP[priceRange] ?? PRICE_FILTER_MAP.all;
    const popularityFilter = POPULARITY_FILTER_MAP[popularity] ?? POPULARITY_FILTER_MAP.all;
    return products.filter((p) => priceFilter(p) && popularityFilter(p));
  }, [priceRange, popularity]);

  const handleQuickAdd = (product) => {
    addToCart(product, 1);
    setIsOpen(true);
    setQuickViewProduct(null);
  };

  return (
    <PageTransition>
      <main className="section-width section-padding py-16 md:py-20">
        <SectionTitle
          eyebrow="Collection"
          title="Handmade Bags"
          description="Minimal, handcrafted, and intentionally produced in limited quantities."
          align="left"
        />

        <FilterBar
          category="All"
          setCategory={() => {}}
          categories={['All']}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          popularity={popularity}
          setPopularity={setPopularity}
          hideCategory
        />

        {filteredProducts.length === 0 ? (
          <div className="card-base p-14 text-center">
            <p className="text-cocoa/60">No products match your current filters.</p>
            <button
              onClick={() => { setPriceRange('all'); setPopularity('all'); }}
              className="btn-outline mt-5"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <p className="mb-7 text-xs text-cocoa/45">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} found
            </p>
            <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" aria-label="Product grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={() => setQuickViewProduct(product)}
                />
              ))}
            </section>
          </>
        )}
      </main>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleQuickAdd}
      />
    </PageTransition>
  );
}

export default ShopPage;
