import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12 sm:mb-16"
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.8 }}
        className="h-1 bg-gradient-to-r from-sky-500 to-navy-700 mx-auto mb-4 sm:mb-6 rounded-full"
      />
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;