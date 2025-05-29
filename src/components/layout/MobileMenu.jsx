import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

// Animation for mobile menu
const mobileMenuVariants = {
  hidden: { opacity: 0, x: '-100%' },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1], type: 'tween' } },
  exit: { opacity: 0, x: '-100%', transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1], type: 'tween' } },
};

// Animation for category items
const categoryItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  hover: {
    x: 5,
    color: '#fb923c', // Orange-400
    transition: { duration: 0.2 },
  },
};

// Animation for category dropdown
const categoryDropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.05 },
  },
};

const linkVariants = {
  initial: { opacity: 0, y: 10 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' },
  }),
  hover: { scale: 1.03, boxShadow: '0px 4px 12px rgba(255, 147, 102, 0.2)', transition: { duration: 0.25, ease: 'easeOut' } },
  tap: { scale: 0.97 },
};

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: 'easeOut' },
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef(null);
  const { currentUser, logout } = useAuth();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Categories list (same as in Header)
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, setIsMenuOpen]);

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);
  };

  const links = [
    { label: 'Deals', to: '/deals' },
    { label: 'Cart', to: '/cart' },
    ...(currentUser
      ? [{ label: 'Log Out', onClick: handleLogout }]
      : [
          { label: 'Login', to: '/login' },
          { label: 'Sign Up', to: '/signup' },
        ]),
  ];

  return (
    <>
      {isMenuOpen && (
        <motion.div
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 will-change-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <motion.div
        ref={menuRef}
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isMenuOpen ? 'visible' : 'hidden'}
        exit="exit"
        className="md:hidden fixed top-0 left-0 w-3/4 h-screen bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl z-50 rounded-r-2xl overflow-hidden will-change-transform"
      >
        <div className="px-4 pt-4 pb-6 space-y-4 sm:px-6 h-full flex flex-col relative">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-100/10 to-rose-100/10 pointer-events-none" />

          <div className="flex justify-end">
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/20 text-orange-400 hover:bg-orange-200/30 hover:text-orange-500 focus:outline-none transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>

          <div className="flex-1 space-y-3">
            {/* Categories Collapsible Section */}
            <motion.div
              custom={0}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              variants={linkVariants}
            >
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="w-full px-5 py-3 text-lg font-medium text-gray-800 bg-gradient-to-r from-white/20 to-orange-100/20 hover:from-orange-200/40 hover:to-rose-200/40 rounded-xl shadow-md border border-white/30 hover:border-orange-300/50 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="relative">
                  Categories
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400/70 opacity-0 group-hover:opacity-100"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                </span>
                <motion.span
                  animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-orange-400 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              {/* Categories List */}
              <motion.div
                variants={categoryDropdownVariants}
                initial="hidden"
                animate={isCategoriesOpen ? 'visible' : 'hidden'}
                className="pl-5 pt-2 space-y-2"
              >
                {categories.map((category) => (
                  <motion.div
                    key={category.name}
                    variants={categoryItemVariants}
                    whileHover="hover"
                    className="text-gray-700 hover:text-orange-400"
                  >
                    <Link
                      to={category.path}
                      className="block text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Other Links */}
            {links.map((link, index) => (
              <motion.div
                key={link.label}
                custom={index + 1} // Offset index for animation delay
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                variants={linkVariants}
              >
                {link.to ? (
                  <Link
                    to={link.to}
                    className="block px-5 py-3 text-lg font-medium text-gray-800 bg-gradient-to-r from-white/20 to-orange-100/20 hover:from-orange-200/40 hover:to-rose-200/40 rounded-xl shadow-md border border-white/30 hover:border-orange-300/50 transition-all duration-300 flex items-center justify-between group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400/70 opacity-0 group-hover:opacity-100"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      />
                    </span>
                    <motion.span
                      className="text-orange-400 opacity-0 group-hover:opacity-100"
                      whileHover={{ x: 8, rotate: 45 }}
                      transition={{ duration: 0.25 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.span>
                  </Link>
                ) : (
                  <button
                    onClick={link.onClick}
                    className="w-full px-5 py-3 text-lg font-medium text-gray-800 bg-gradient-to-r from-white/20 to-orange-100/20 hover:from-orange-200/40 hover:to-rose-200/40 rounded-xl shadow-md border border-white/30 hover:border-orange-300/50 transition-all duration-300 flex items-center justify-between group"
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400/70 opacity-0 group-hover:opacity-100"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      />
                    </span>
                    <motion.span
                      className="text-orange-400 opacity-0 group-hover:opacity-100"
                      whileHover={{ x: 8, rotate: 45 }}
                      transition={{ duration: 0.25 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.span>
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-orange-200/20 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;