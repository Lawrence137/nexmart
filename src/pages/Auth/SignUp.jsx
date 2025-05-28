import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation for form container (simplified for mobile)
const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4, // Slightly faster
      ease: 'easeOut',
    },
  },
};

// Animation for form fields (reduced stagger and distance)
const fieldVariants = {
  initial: { opacity: 0, y: 10 }, // Reduced y distance
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05, // Reduced delay for faster stagger
      duration: 0.25, // Faster animation
      ease: 'easeOut',
    },
  }),
};

// Animation for button (simplified)
const buttonVariants = {
  hover: {
    scale: 1.03, // Reduced scale
    boxShadow: '0px 4px 12px rgba(255, 147, 102, 0.2)', // Reduced shadow size
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  tap: { scale: 0.97 },
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      variants={formContainerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-200 via-rose-200 to-purple-200 p-4 relative overflow-hidden"
    >
      {/* Simplified Decorative Background (removed heavy blur) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-300/20 rounded-full -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-rose-300/20 rounded-full translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md border border-white/30 shadow-lg rounded-3xl p-6 sm:p-8 will-change-opacity">
        {/* Reduced Gradient Overlay Opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/10 to-rose-200/10 rounded-3xl pointer-events-none" />

        {/* Form Header (removed underline animation) */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-3xl font-bold text-gray-800 text-center mb-6"
        >
          Sign Up
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Field */}
          <motion.div custom={0} variants={fieldVariants} initial="initial" animate="animate">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/40 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/70 transition-colors duration-200"
              placeholder="Enter your username"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div custom={1} variants={fieldVariants} initial="initial" animate="animate">
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
              className="w-full px-4 py-3 bg-white/10 border border-white/40 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/70 transition-colors duration-200"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Password Field */}
          <motion.div custom={2} variants={fieldVariants} initial="initial" animate="animate">
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
              className="w-full px-4 py-3 bg-white/10 border border-white/40 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/70 transition-colors duration-200"
              placeholder="Enter your password"
            />
          </motion.div>

          {/* Confirm Password Field */}
          <motion.div custom={3} variants={fieldVariants} initial="initial" animate="animate">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/40 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/70 transition-colors duration-200"
              placeholder="Confirm your password"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full py-3 mt-4 bg-gradient-to-r from-orange-400 to-rose-400 text-white font-medium rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-colors duration-200"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Link to Login */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="text-center text-sm text-gray-600 mt-6"
        >
          Already have an account?{' '}
          <Link to="/login" className="text-orange-400 hover:text-orange-500 font-medium transition-colors">
            Log In
          </Link>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SignUp;