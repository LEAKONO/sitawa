import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../utils/constants';
import SectionTitle from '../shared/SectionTitle';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'research', label: 'Research' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'academic', label: 'Academic' },
  ];

  // Category colors for badges
  const categoryColors = {
    research: 'from-sky-500 to-blue-600',
    consulting: 'from-emerald-500 to-teal-600',
    academic: 'from-indigo-500 to-purple-600',
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Research, Consulting & Academic Initiatives"
        />

        {/* Filter Buttons - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                filter === category.id
                  ? 'bg-gradient-to-r from-sky-600 to-navy-800 text-white shadow-lg'
                  : 'glass-morphism text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Responsive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass-morphism rounded-2xl overflow-hidden h-full card-hover flex flex-col">
                  {/* Project Header - Responsive */}
                  <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                    {/* Category Badge - Top Right */}
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <span className={`px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r ${categoryColors[project.category] || 'from-sky-500 to-navy-700'} text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm`}>
                        {project.category}
                      </span>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-1 sm:space-x-2">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github size={16} className="sm:w-4.5 sm:h-4.5" />
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={16} className="sm:w-4.5 sm:h-4.5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Content - Responsive */}
                  <div className="p-4 sm:p-6 pt-0 flex-1 flex flex-col">
                    {/* Technologies */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                        Methods & Approaches
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-sky-100 to-sky-50 dark:from-sky-900/20 dark:to-sky-800/20 text-sky-700 dark:text-sky-300 rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    {project.stats && (
                      <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-base sm:text-lg font-bold gradient-text mb-1">
                                {value}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Projects Message - Responsive */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8 sm:py-12"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              No {filter !== 'all' ? filter : ''} projects available at the moment.
            </p>
          </motion.div>
        )}

        {/* Call to Action - FIXED: Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="glass-morphism rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Let's Collaborate on Your Next Project
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              With extensive experience in research, consulting, and academic initiatives across Eastern Africa, 
              I'm well-equipped to contribute to your next project. Let's discuss how we can work together to 
              achieve meaningful impact.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 bg-gradient-to-r from-sky-600 to-navy-800 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 shadow-md text-sm sm:text-base"
            >
              Start a Conversation
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;