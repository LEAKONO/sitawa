import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  const cvDriveLink = "https://drive.google.com/file/d/1c8oAVu6zOvQaNbZwW8dnnr-ccRnH7q5U/view?usp=sharing";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-navy-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />
      
      {/* Background animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute top-20 right-4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-navy-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '0.2s' }} />
        <div className="absolute -bottom-8 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '0.4s' }} />
      </div>

      <div className="container-custom section-padding relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* IMAGE SECTION - Comes first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-sky-600 to-navy-800 rounded-3xl blur-xl opacity-30" />
              <div className="relative glass-morphism rounded-2xl overflow-hidden p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="aspect-square bg-gradient-to-br from-sky-100 to-navy-100 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="/images/certificates/hero4.jpeg"
                      alt="Dr. Michael Sitawa Mugah"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-3 sm:mt-4 text-center"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    SITAWA M.M
                  </h3>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SECTION - Comes second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-4 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sky-600 rounded-full mr-2 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 sm:mb-6"
            >
              <span className="block text-gray-900 dark:text-white">Dr. Michael</span>
              <span className="gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Sitawa Mugah</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Senior Researcher & Strategic Consultant with 15+ years of experience specializing in 
              Security Sector Reform, Peace Operations, and Maritime Security in Eastern Africa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-sky-600 to-navy-800 text-white rounded-full font-semibold flex items-center justify-center hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              
              <motion.a
                href={cvDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 glass-morphism rounded-full font-semibold flex items-center justify-center hover-lift text-sm sm:text-base"
              >
                Download CV
                <Download className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8"
            >
              <a
                href="mailto:michael.sitawa@gmail.com"
                className="flex items-center space-x-1.5 sm:space-x-2 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/michael-sitawa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 sm:space-x-2 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;