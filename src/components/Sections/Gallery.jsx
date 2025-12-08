// src/components/Sections/Gallery.jsx (Responsive)
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Image, Video, FileText, Award } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';

const Gallery = () => {
  // External gallery links
  const galleryLinks = [
    {
      id: 1,
      title: 'Professional Events',
      description: 'Conference speeches, workshops, and international meetings',
      icon: <Image size={24} />,
      count: '25+ images',
      link: 'https://photos.app.goo.gl/2U1944Y2m5bHR4118',
      color: 'from-sky-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Field Research',
      description: 'Fieldwork in Eastern Africa, DRC, and conflict zones',
      icon: <Video size={24} />,
      count: '15+ images/videos',
      link: 'https://photos.app.goo.gl/9CPeD1yudznCvyUD6',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  // Responsive image grid based on screen size
  const responsiveImages = [
    { src: '/images/certificates/hero1.jpeg', alt: 'Conference Speaking' },
    { src: '/images/certificates/hero2.jpeg', alt: 'Research Presentation' },
    { src: '/images/certificates/hero3.jpeg', alt: 'Field Work' },
    { src: '/images/certificates/hero4.jpeg', alt: 'Professional Portrait' },
    { src: '/images/certificates/1.jpeg', alt: 'Conference Speaking' },
    { src: '/images/certificates/2.jpeg', alt: 'Research Presentation' },
    { src: '/images/certificates/3.jpeg', alt: 'Field Work' },
    { src: '/images/certificates/4.jpeg', alt: 'Professional Portrait' },
    { src: '/images/certificates/5.jpeg', alt: 'Conference Speaking' },
    { src: '/images/certificates/6.jpeg', alt: 'Research Presentation' },
    { src: '/images/certificates/7.jpeg', alt: 'Field Work' },
    { src: '/images/certificates/8.jpeg', alt: 'Professional Portrait' },
    { src: '/images/certificates/9.jpeg', alt: 'Professional Portrait' },
    { src: '/images/certificates/11.jpg', alt: 'Conference Speaking' },
    { src: '/images/certificates/12.jpg', alt: 'Research Presentation' },
    { src: '/images/certificates/13.jpg', alt: 'Field Work' },
    { src: '/images/certificates/14.jpg', alt: 'Professional Portrait' },
    { src: '/images/certificates/15.jpg', alt: 'Conference Speaking' },
    { src: '/images/certificates/16.jpg', alt: 'Research Presentation' },
    { src: '/images/certificates/17.jpg', alt: 'Field Work' },
    { src: '/images/certificates/18.jpg', alt: 'Professional Portrait' },
    { src: '/images/certificates/20.jpg', alt: 'Research Presentation' },
    { src: '/images/certificates/21.jpg', alt: 'Field Work' },
    { src: '/images/certificates/22.jpg', alt: 'Professional Portrait' },
    { src: '/images/certificates/23.jpg', alt: 'Conference Speaking' }
  ];

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Gallery"
          subtitle="Browse professional photos, field work, and recognitions"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="glass-morphism rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Featured Images
            </h3>
            
            {/* Responsive image grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {responsiveImages.map((img, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Responsive button container */}
            <div className="mt-4 sm:mt-6">
              <motion.a
                href="https://photos.app.goo.gl/9CPeD1yudznCvyUD6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-sky-600 to-navy-800 text-white rounded-full font-semibold hover:shadow-lg transition-all w-full sm:w-auto text-sm sm:text-base"
              >
                <ExternalLink size={16} className="sm:size-[18px]" />
                <span className="truncate sm:whitespace-normal">
                  View All Images
                </span>
              </motion.a>
              
              {/* Optional: Show count on larger screens */}
              <div className="text-center mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Showing {responsiveImages.length} of 100+ images
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optional: Gallery links for different categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <div className="glass-morphism rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Gallery Collections
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {galleryLinks.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`group bg-gradient-to-r ${item.color} rounded-xl p-4 sm:p-5 text-white hover:shadow-xl transition-all`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm sm:text-base">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-white/80 mt-1">{item.description}</p>
                      </div>
                    </div>
                    <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-medium">{item.count}</span>
                    <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                      Open Gallery
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;