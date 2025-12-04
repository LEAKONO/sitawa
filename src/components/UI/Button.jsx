import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  className = '',
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = 'rounded-full font-semibold transition-all duration-300 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:shadow-lg hover:shadow-primary-500/30',
    secondary: 'glass-morphism text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthStyle}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;