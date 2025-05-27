import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
    }),
  };

  // Animation for the badge and buttons on hover
  const hoverVariants = {
    hover: { scale: 105, transition: { duration: 0.3 } },
  };

  // Floating animation for decorative elements and secondary image
  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 2.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background with animated gradient and wave pattern */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-100 to-rose-200"
          animate={{
            background: [
              'linear-gradient(to bottom right, #fef3c7, #fed7aa, #fecaca)',
              'linear-gradient(to bottom right, #fef3c7, #fdba74, #f9a8d4)',
              'linear-gradient(to bottom right, #fef3c7, #fed7aa, #fecaca)',
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wave.png')] bg-repeat" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="text-center lg:text-left">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              whileHover="hover"
              className="inline-block"
            >
              <motion.span
                // variants={hoverVariants}
                className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-orange-400/20 text-orange-800 ring-1 ring-orange-400/30 shadow-sm mb-6"
              >
                🌟 New Collection Available
              </motion.span>
            </motion.div>

            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800"
            >
              Discover Amazing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                Products
              </span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-4 text-base sm:text-lg leading-7 text-gray-600"
            >
              Shop the latest trends with our curated collection of premium products at unbeatable prices.
            </motion.p>

            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.div whileHover="hover">
                <Link
                  to="/products"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 text-base sm:text-lg font-medium text-white shadow-lg transition duration-300 ease-out hover:shadow-xl"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-rose-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative">Shop Now</span>
                </Link>
              </motion.div>
              <motion.div whileHover="hover">
                <Link
                  to="/categories"
                  className="inline-flex items-center justify-center rounded-lg border border-orange-300 px-6 py-3 text-base sm:text-lg font-medium text-orange-800 transition-colors hover:bg-orange-50"
                >
                  Browse Categories
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Layered Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:ml-auto"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Shopping Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-rose-500/20 mix-blend-multiply" />
            </div>

            {/* Secondary Floating Image */}
            {/* <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-xl shadow-md border border-orange-300/50"
            >
              <img
                src="https://images.unsplash.com/photo-1599487486966-2f73c697d44a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Product Highlight"
                className="w-full h-full object-cover"
              />
            </motion.div> */}

            {/* Decorative Elements - Floating Dots */}
            <motion.div
              variants={floatVariants}
              className="absolute -top-4 -right-4 w-12 h-12 bg-orange-400/40 rounded-full blur-lg"
            />
            <motion.div
              variants={floatVariants}
              className="absolute top-1/2 -right-2 w-8 h-8 bg-rose-400/40 rounded-full blur-md"
            />
            <motion.div
              variants={floatVariants}
              className="absolute -bottom-4 left-1/4 w-10 h-10 bg-amber-400/40 rounded-full blur-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;