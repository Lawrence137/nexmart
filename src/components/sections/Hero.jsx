import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background with modern gradient and pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-blue-900 to-slate-900" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-6">
                New Collection Available
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Discover Amazing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Products
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              Shop the latest trends with our curated collection of premium products at unbeatable prices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/products"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-3 text-lg font-medium text-blue-600 transition duration-300 ease-out hover:text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Shop Now</span>
              </Link>
              <Link
                to="/categories"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-white/10"
              >
                Browse Categories
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:ml-auto"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Shopping Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-blue-800/40 mix-blend-multiply" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 