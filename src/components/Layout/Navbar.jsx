import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { navLinks } from '../../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScrollSection = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSection);
    handleScrollSection();
    
    return () => window.removeEventListener('scroll', handleScrollSection);
  }, []);

  const handleLinkClick = (section) => {
    setIsOpen(false);
    setActiveSection(section);
    
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-morphism py-3 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleLinkClick('home')}
          >
            <span className="text-2xl font-display font-bold gradient-text hover:opacity-90 transition-opacity">
              Dr. Michael Sitawa
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const section = link.href.substring(1);
              const isActive = activeSection === section;
              
              return (
                <motion.button
                  key={link.name}
                  onClick={() => handleLinkClick(section)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className={`font-medium transition-colors ${
                    isActive
                      ? 'text-sky-600 dark:text-sky-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400'
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Active indicator */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-sky-600 to-navy-800 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                  
                  {/* Active glow effect */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-600/10 to-navy-800/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
            
            <ThemeToggle />
            
            <motion.button
              onClick={() => handleLinkClick('contact')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-sky-600 to-navy-800 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const section = link.href.substring(1);
                const isActive = activeSection === section;
                
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(section)}
                    className={`py-3 px-4 rounded-xl text-left font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-600 to-navy-800 text-white shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              
              <button
                onClick={() => handleLinkClick('contact')}
                className="py-3 px-4 bg-gradient-to-r from-sky-600 to-navy-800 text-white rounded-xl font-semibold text-center shadow-md hover:shadow-lg transition-all mt-2"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;