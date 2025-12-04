import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hoverable = true,
  padding = 'medium',
  ...props 
}) => {
  const paddingStyles = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };
  
  return (
    <motion.div
      whileHover={hoverable ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`
        glass-morphism
        rounded-2xl
        ${paddingStyles[padding]}
        ${hoverable ? 'card-hover' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;