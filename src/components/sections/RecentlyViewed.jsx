import { motion } from 'framer-motion';
import ProductCard from '../common/ProductCard';
import { useRecentlyViewed } from '../../hooks/useRecentlyViewed';

const RecentlyViewed = () => {
  const { recentProducts, clearHistory } = useRecentlyViewed();

  if (recentProducts.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Recently Viewed
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-gray-600"
            >
              Pick up where you left off
            </motion.p>
          </div>

          <button
            onClick={clearHistory}
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Clear History
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {recentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed; 