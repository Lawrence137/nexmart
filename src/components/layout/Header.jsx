import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

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

// Dropdown animation
const dropdownVariants = {
  hidden: { opacity: 0, y: -10, height: 0 },
  visible: {
    opacity: 1,
    y: 0,
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.05 },
  },
};

// Dropdown item animation
const dropdownItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  hover: {
    x: 5,
    color: '#fb923c', // Orange-400
    transition: { duration: 0.2 },
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
  const { currentUser, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  // Categories list (same as before)
  const categories = [
    { name: 'Electronics', path: '/categories/electronics' },
    { name: 'Fashion', path: '/categories/fashion' },
    { name: 'Home & Living', path: '/categories/home-living' },
    { name: 'Beauty', path: '/categories/beauty' },
    { name: 'Sports & Outdoors', path: '/categories/sports-outdoors' },
    { name: 'Groceries', path: '/categories/groceries' },
    { name: 'Toys & Games', path: '/categories/toys-games' },
    { name: 'Health & Wellness', path: '/categories/health-wellness' },
    { name: 'Books & Stationery', path: '/categories/books-stationery' },
    { name: 'Automotive', path: '/categories/automotive' },
  ];

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
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
            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <motion.div whileHover="hover" variants={linkVariants}>
                <button className="text-white hover:text-orange-300 drop-shadow-md transition-colors flex items-center">
                  Categories
                  <motion.span
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-1"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
              </motion.div>

              {/* Dropdown Menu */}
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate={isDropdownOpen ? 'visible' : 'hidden'}
                className="absolute top-full left-0 mt-2 w-56 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-4 z-50"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-orange-100/10 to-rose-200/10 rounded-xl pointer-events-none" />
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <motion.li
                      key={category.name}
                      variants={dropdownItemVariants}
                      whileHover="hover"
                      className="text-gray-700 hover:text-orange-400"
                    >
                      <Link to={category.path} className="block text-sm font-medium">
                        {category.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

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

            {/* Conditionally render Login/Sign Up or Logout */}
            {currentUser ? (
              <motion.div whileHover={{ scale: 1.05 }}>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-rose-600 shadow-md transition-all duration-300"
                >
                  Log Out
                </button>
              </motion.div>
            ) : (
              <>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link to="/login" className="text-white hover:text-orange-300 drop-shadow-md transition-colors">
                    Login
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-rose-600 shadow-md transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </>
            )}
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
    </motion.header>
  );
};

export default Header;