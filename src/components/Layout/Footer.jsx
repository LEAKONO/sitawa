import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { socialLinks } from '../../utils/constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
              Dr. Michael Sitawa
            </h3>
            <p className="max-w-md text-sm sm:text-base">
              Senior Researcher & Strategic Consultant specializing in Security Sector Reform, 
              Peace Operations, and Maritime Security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4 sm:space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start text-sm sm:text-base">
                Made with <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-1 text-red-500 fill-current" /> 
                by Dr. Michael Sitawa
              </p>
              <p className="text-xs sm:text-sm mt-2">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
              <a href="/privacy" className="hover:text-white transition-colors text-sm sm:text-base">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors text-sm sm:text-base">
                Terms of Service
              </a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 text-white flex items-center justify-center hover:shadow-lg transition-all"
                aria-label="Back to top"
              >
                <ArrowUp size={16} className="sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;