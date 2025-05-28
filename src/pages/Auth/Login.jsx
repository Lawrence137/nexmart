import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation for form container fade-in and slight scale
const formContainerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Animation for form fields (staggered entrance)
const fieldVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

// Animation for button hover and tap
const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 8px 24px rgba(255, 147, 102, 0.4)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  tap: { scale: 0.95, boxShadow: '0px 4px 12px rgba(255, 147, 102, 0.2)' },
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log('Login submitted:', formData);
  };

  return (
    <motion.div
      variants={formContainerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-200 via-rose-200 to-purple-200 p-4 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-300/20 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-rose-300/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/30 shadow-xl rounded-3xl p-6 sm:p-8">
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/20 to-rose-200/20 rounded-3xl pointer-events-none" />
        {/* Inner Glow Effect */}
        <div className="absolute inset-0 rounded-3xl shadow-inner shadow-orange-300/20 pointer-events-none" />

        {/* Form Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 text-center mb-6 relative"
        >
          Log In
          <motion.span
            className="absolute left-1/2 bottom-0 h-1 w-16 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full -translate-x-1/2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <motion.div custom={0} variants={fieldVariants} initial="initial" animate="animate">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/40 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/70 focus:border-orange-400/90 hover:bg-white/20 transition-all duration-300"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Password Field */}
          <motion.div custom={1} variants={fieldVariants} initial="initial" animate="animate">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/40 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/70 focus:border-orange-400/90 hover:bg-white/20 transition-all duration-300"
              placeholder="Enter your password"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full py-3 mt-4 bg-gradient-to-r from-orange-400 to-rose-400 text-white font-medium rounded-xl shadow-lg hover:from-orange-500 hover:to-rose-500 focus:outline-none focus:ring-2 focus:ring-orange-400/70 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Log In</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-300/50 to-rose-300/50 opacity-0 hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </form>

        {/* Link to Sign Up */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-center text-sm text-gray-600 mt-6"
        >
          Don’t have an account?{' '}
          <Link to="/signup" className="text-orange-400 hover:text-orange-500 font-medium transition-colors">
            Sign Up
          </Link>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Login;