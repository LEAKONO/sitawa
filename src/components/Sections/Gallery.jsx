// src/components/Sections/Gallery.jsx (Simplified)
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
          <div className="glass-morphism rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Images
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
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
                // { src: '/images/certificates/19.jpg', alt: 'Professional Portrait' },
                { src: '/images/certificates/20.jpg', alt: 'Research Presentation' },
                { src: '/images/certificates/21.jpg', alt: 'Field Work' },
                { src: '/images/certificates/22.jpg', alt: 'Professional Portrait' },
                { src: '/images/certificates/23.jpg', alt: 'Conference Speaking' }

              ].map((img, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <motion.a
                href="https://photos.app.goo.gl/9CPeD1yudznCvyUD6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-navy-800 text-white rounded-full font-semibold hover:shadow-lg transition-all"
              >
                <ExternalLink size={18} />
                View All Images in Full Gallery
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;