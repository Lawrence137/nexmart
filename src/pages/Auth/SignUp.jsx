import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    boxShadow: '0px 8px 24px rgba(255, 147, 102, 0.3)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  tap: { scale: 0.95, boxShadow: '0px 4px 12px rgba(255, 147, 102, 0.2)' },
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
    // Add your form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      variants={formContainerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-rose-50 p-4"
    >
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-8">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/10 to-rose-100/10 pointer-events-none rounded-2xl" />

        {/* Form Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-3xl font-semibold text-gray-800 text-center mb-6"
        >
          Sign Up
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Field */}
          <motion.div custom={0} variants={fieldVariants} initial="initial" animate="animate">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/70 transition-all duration-300"
              placeholder="Enter your username"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div custom={1} variants={fieldVariants} initial="initial" animate="animate">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/70 transition-all duration-300"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Password Field */}
          <motion.div custom={2} variants={fieldVariants} initial="initial" animate="animate">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/70 transition-all duration-300"
              placeholder="Enter your password"
            />
          </motion.div>

          {/* Confirm Password Field */}
          <motion.div custom={3} variants={fieldVariants} initial="initial" animate="animate">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/70 transition-all duration-300"
              placeholder="Confirm your password"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full py-3 mt-4 bg-gradient-to-r from-orange-400 to-rose-400 text-white font-medium rounded-xl shadow-md hover:from-orange-500 hover:to-rose-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all duration-300"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Link to Login */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-center text-sm text-gray-600 mt-6"
        >
          Already have an account?{' '}
          <Link to="/auth/login" className="text-orange-400 hover:text-orange-500 font-medium transition-colors">
            Log In
          </Link>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SignUp;