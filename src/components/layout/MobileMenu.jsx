import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation for mobile menu slide-in from the left
const mobileMenuVariants = {
  hidden: { opacity: 0, x: '-100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

// Hover animation for links
const linkVariants = {
  hover: {
    x: 10,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.div
      variants={mobileMenuVariants}
      initial="hidden"
      animate={isMenuOpen ? 'visible' : 'hidden'}
      className="md:hidden fixed top-16 left-0 w-3/4 h-[calc(100vh-4rem)] bg-gradient-to-r from-amber-50/90 via-orange-100/90 to-rose-200/90 backdrop-blur-lg border-r border-orange-200/50 shadow-lg z-50"
    >
      <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6 h-full flex flex-col">
        {/* Close Button */}
        <div className="flex justify-end">
          <motion.button
            onClick={() => setIsMenuOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-orange-500 hover:text-orange-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>

        {/* Menu Links */}
        <div className="flex-1 space-y-2">
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/categories"
              className="block px-4 py-2 hover:text-orange-300 hover:bg-orange-100/20 rounded-lg drop-shadow-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/deals"
              className="block px-4 py-2 hover:text-orange-300 hover:bg-orange-100/20 rounded-lg drop-shadow-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Deals
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/cart"
              className="block px-4 py-2 hover:text-orange-300 hover:bg-orange-100/20 rounded-lg drop-shadow-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/auth/login"
              className="block px-4 py-2 hover:text-orange-300 hover:bg-orange-100/20 rounded-lg drop-shadow-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </motion.div>
          <motion.div whileHover="hover" variants={linkVariants}>
            <Link
              to="/auth/register"
              className="block px-4 py-2 hover:text-orange-300 hover:bg-orange-100/20 rounded-lg drop-shadow-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;