import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    title: "Summer '24 Collection",
    description: "Discover the latest trends for the upcoming season",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    size: "large",
  },
  {
    id: 2,
    title: "Sustainable Fashion",
    description: "Eco-friendly products for a better tomorrow",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
  {
    id: 3,
    title: "Tech Essentials",
    description: "Must-have gadgets for modern living",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    size: "small",
  }
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-medium mb-2"
          >
            Curated For You
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Featured Collections
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                collection.size === 'large' ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'
              }`}
            >
              <div className="absolute inset-0">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/50 to-transparent" />
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {collection.title}
                </h3>
                <p className="text-gray-200 mb-4">
                  {collection.description}
                </p>
                <Link
                  to={`/collections/${collection.id}`}
                  className="inline-flex items-center text-white font-medium group/link"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 group-hover/link:after:scale-x-100">
                    Explore Collection
                  </span>
                  <svg
                    className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections; 