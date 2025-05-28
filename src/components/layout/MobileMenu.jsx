import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Animation for mobile menu slide-in from the left
const mobileMenuVariants = {
  hidden: { opacity: 0, x: '-100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3, // Reduced duration for quicker response
      ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for smoother feel
      type: 'tween', // Switched to tween for better mobile performance
    },
  },
  exit: {
    opacity: 0,
    x: '-100%',
    transition: {
      duration: 0.25, // Slightly faster exit
      ease: [0.4, 0, 0.2, 1],
      type: 'tween',
    },
  },
};

// Animation for links (hover, tap, and staggered entrance)
const linkVariants = {
  initial: { opacity: 0, y: 10 }, // Reduced y distance for less computation
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Slightly reduced delay for faster staggered effect
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
  hover: {
    scale: 1.03, // Reduced scale for less GPU strain
    boxShadow: '0px 4px 12px rgba(255, 147, 102, 0.2)', // Reduced shadow size
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  tap: { scale: 0.97, boxShadow: '0px 2px 6px rgba(255, 147, 102, 0.1)' },
};

// Backdrop animation
const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: 'easeOut' }, // Faster and simpler
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef(null);

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
        className="md:hidden fixed top-0 left-0 w-3/4 h-screen bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl z-50 rounded-r-2xl overflow-hidden will-change-transform"
      >
        <div className="px-4 pt-4 pb-6 space-y-4 sm:px-6 h-full flex flex-col relative">
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-100/10 to-rose-100/10 pointer-events-none" />

          {/* Close Button */}
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

          {/* Menu Links */}
          <div className="flex-1 space-y-3">
            {['Categories', 'Deals', 'Cart', 'Login', 'Sign Up'].map((label, index) => (
              <motion.div
                key={label}
                custom={index}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                variants={linkVariants}
              >
                <Link
                  to={
                    label === 'Categories'
                      ? '/categories'
                      : label === 'Deals'
                      ? '/deals'
                      : label === 'Cart'
                      ? '/cart'
                      : label === 'Login'
                      ? '/login'
                      : '/signup'
                  }
                  className="block px-5 py-3 text-lg font-medium text-gray-800 bg-gradient-to-r from-white/20 to-orange-100/20 hover:from-orange-200/40 hover:to-rose-200/40 rounded-xl shadow-md border border-white/30 hover:border-orange-300/50 transition-all duration-300 flex items-center justify-between group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    {label}
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
              </motion.div>
            ))}
          </div>

          {/* Decorative Gradient at Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-orange-200/20 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;