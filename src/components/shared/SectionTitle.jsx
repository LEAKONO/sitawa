import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.8 }}
        className="h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6 rounded-full"
      />
      
      <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;