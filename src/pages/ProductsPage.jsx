import { motion } from 'framer-motion';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';

function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
      <SectionTitle
        eyebrow="Collection"
        title="Luxury Handmade Bags"
        description="Explore our complete collection of handcrafted crystal and agate bags."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </main>
  );
}

export default ProductsPage;
