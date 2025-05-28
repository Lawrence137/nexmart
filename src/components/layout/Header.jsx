import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import MobileMenu from './MobileMenu'; // REMOVE THIS IMPORT

// Animation for header entrance
const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Hover animation for navigation links and buttons
const linkVariants = {
  hover: {
    y: -2,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Hamburger to X animation variants
const topLineVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 6 },
};

const middleLineVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

const bottomLineVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -6 },
};

// Accept isMenuOpen and setIsMenuOpen as props
const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  // No need for local state for isMenuOpen here anymore, it's controlled by parent
  // const [isMenuOpen, setIsMenuOpen] = useState(false); // REMOVE THIS LINE

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      // Keep z-index at z-30 or z-40, it will now be behind the overlay
      // The key is that the overlay is rendered outside this component's direct parent.
      className="sticky top-0 z-30 bg-gradient-to-r from-amber-50/80 via-orange-100/80 to-rose-200/80 backdrop-blur-lg shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500"
              >
                NexMart
              </motion.span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-full bg-white/70 border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm transition-all duration-300"
              />
              <motion.button
                className="absolute right-3 top-2.5 text-orange-500 hover:text-orange-600"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link to="/categories" className="text-white hover:text-orange-300 drop-shadow-md transition-colors">
                Categories
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link to="/deals" className="text-white hover:text-orange-300 drop-shadow-md transition-colors">
                Deals
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link to="/cart" className="relative text-white hover:text-orange-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md"
                  >
                    0
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={linkVariants}>
              <Link to="/auth/login" className="text-white hover:text-orange-300 drop-shadow-md transition-colors">
                Login
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/auth/register"
                className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-rose-600 shadow-md transition-all duration-300"
              >
                Sign Up
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-900 hover:text-orange-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16"
                  variants={topLineVariants}
                  initial="closed"
                  animate={isMenuOpen ? 'open' : 'closed'}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12h16"
                  variants={middleLineVariants}
                  initial="closed"
                  animate={isMenuOpen ? 'open' : 'closed'}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 18h16"
                  variants={bottomLineVariants}
                  initial="closed"
                  animate={isMenuOpen ? 'open' : 'closed'}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* REMOVE MobileMenu component from here */}
      {/* <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
    </motion.header>
  );
};

export default Header;