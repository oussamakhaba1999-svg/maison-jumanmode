import { motion } from 'framer-motion';

const priceOptions = [
  { value: 'all', label: 'All prices' },
  { value: 'under-400', label: 'Under $400' },
  { value: '400-500', label: '$400 – $500' },
  { value: 'over-500', label: 'Over $500' },
];

const popularityOptions = [
  { value: 'all', label: 'All products' },
  { value: 'popular', label: 'Most popular' },
  { value: 'top-rated', label: 'Top rated only' },
];

function FilterBar({
  category,
  setCategory,
  categories = [],
  priceRange,
  setPriceRange,
  popularity,
  setPopularity,
  hideCategory = false,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="Product filters"
      className={`mb-10 grid gap-3 rounded-3xl border border-sand/60 bg-white/90 p-4 shadow-card backdrop-blur-md ${
        hideCategory ? 'md:grid-cols-2' : 'md:grid-cols-3'
      }`}
    >
      {!hideCategory && (
        <label className="space-y-1.5 text-xs font-medium uppercase tracking-wider text-cocoa/60">
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field mt-1"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      )}

      <label className="space-y-1.5 text-xs font-medium uppercase tracking-wider text-cocoa/60">
        Price Range
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="input-field mt-1"
        >
          {priceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-1.5 text-xs font-medium uppercase tracking-wider text-cocoa/60">
        Sort By
        <select
          value={popularity}
          onChange={(e) => setPopularity(e.target.value)}
          className="input-field mt-1"
        >
          {popularityOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
    </motion.section>
  );
}

export default FilterBar;
