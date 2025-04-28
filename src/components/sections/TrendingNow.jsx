import { useRef } from 'react';
import { motion } from 'framer-motion';

const trends = [
  {
    id: 1,
    label: "Most Searched",
    title: "Wireless Earbuds",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    searches: "50K+ searches this week"
  },
  {
    id: 2,
    label: "Trending",
    title: "Smart Watches",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    searches: "28K+ searches this week"
  },
  {
    id: 3,
    label: "New Arrival",
    title: "Designer Bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    searches: "15K+ searches this week"
  },
  {
    id: 4,
    label: "Popular",
    title: "Running Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    searches: "32K+ searches this week"
  },
  {
    id: 5,
    label: "Best Seller",
    title: "Smart Home Devices",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    searches: "22K+ searches this week"
  }
];

const TrendingNow = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-blue-600 font-medium block mb-2"
            >
              What's Hot
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Trending Now
            </motion.h2>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {trends.map((trend, index) => (
            <motion.div
              key={trend.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-[300px] group cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900">
                <img
                  src={trend.image}
                  alt={trend.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-3">
                    {trend.label}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{trend.title}</h3>
                  <p className="text-sm text-gray-300">{trend.searches}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow; 