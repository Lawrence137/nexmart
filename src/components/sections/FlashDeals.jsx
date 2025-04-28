import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../common/ProductCard';

const calculateTimeLeft = (endTime) => {
  const difference = new Date(endTime).getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return { hours: '00', minutes: '00', seconds: '00' };
  }

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0')
  };
};

const CountdownTimer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-xl font-bold text-white">
          {timeLeft.hours}
        </div>
        <span className="text-xl font-bold text-gray-900">:</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-xl font-bold text-white">
          {timeLeft.minutes}
        </div>
        <span className="text-xl font-bold text-gray-900">:</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-xl font-bold text-white">
          {timeLeft.seconds}
        </div>
      </div>
    </div>
  );
};

const FlashDeals = () => {
  // Example deals data - in a real app, this would come from an API
  const deals = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 79.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Electronics",
      discount: 60,
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 89.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Electronics",
      discount: 70,
      endTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(), // 12 hours from now
    },
    // Add more deals as needed
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-600 ring-1 ring-inset ring-red-500/20 mb-4"
          >
            Limited Time Only
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4"
          >
            Flash Deals
          </motion.h2>
          <CountdownTimer endTime={deals[0].endTime} />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={deal} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals; 