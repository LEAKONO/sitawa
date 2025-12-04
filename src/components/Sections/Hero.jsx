import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Linkedin } from 'lucide-react';
import { heroData } from '../../utils/constants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '0.2s' }} />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '0.4s' }} />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              <span className="block text-gray-900 dark:text-white">Dr. Michael</span>
              <span className="gradient-text">Sitawa Mugah</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              Senior Researcher & Strategic Consultant specializing in Security Sector Reform, 
              Peace Operations, and Maritime Security in Eastern Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold flex items-center hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              
              <motion.a
                href="/cv.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-morphism rounded-full font-semibold flex items-center hover-lift"
              >
                Download CV
                <Download className="ml-2" size={20} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-6 mt-12"
            >
              <a
                href="mailto:michael.sitawa@gmail.com"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/michael-sitawa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative glass-morphism rounded-2xl overflow-hidden p-8">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden">
                  {/* Profile image placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-200 to-purple-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                        <span className="text-6xl font-bold text-primary-600 dark:text-primary-400">
                          MS
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Dr. Michael Sitawa
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Ph.D in Sociology
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {heroData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;