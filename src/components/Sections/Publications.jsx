import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Download, Calendar, FileText, BookOpen, Search, Filter } from 'lucide-react';
import { publications } from '../../utils/constants';
import SectionTitle from '../shared/SectionTitle';

const Publications = () => {
  const [filter, setFilter] = useState('all');
  const [selectedPub, setSelectedPub] = useState(null);

  const publicationTypes = [
    { id: 'all', label: 'All Publications' },
    { id: 'journal', label: 'Journal Articles' },
    { id: 'book', label: 'Books & Chapters' },
    { id: 'conference', label: 'Conference Papers' },
    { id: 'blog', label: 'Blog Articles' },
  ];

  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type.toLowerCase().includes(filter));

  return (
    <section id="publications" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Publications"
          subtitle="Research contributions in security studies, peace operations, and development"
        />

        {/* Filter Tabs - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {publicationTypes.map((type) => (
            <motion.button
              key={type.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(type.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-2.5 rounded-full transition-all text-sm sm:text-base ${
                filter === type.id
                  ? 'bg-gradient-to-r from-sky-600 to-navy-800 text-white shadow-lg'
                  : 'glass-morphism text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Filter size={14} className="sm:w-4 sm:h-4" />
              <span className="font-medium whitespace-nowrap">{type.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Publication Statistics - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          <div className="glass-morphism p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-1 sm:mb-2">
              {publications.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Total Publications</div>
          </div>
          <div className="glass-morphism p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
              {publications.filter(p => p.type.toLowerCase().includes('journal')).length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Journal Articles</div>
          </div>
          <div className="glass-morphism p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 sm:mb-2">
              {publications.filter(p => p.type.toLowerCase().includes('book')).length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Books & Chapters</div>
          </div>
          <div className="glass-morphism p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400 mb-1 sm:mb-2">
              {publications.filter(p => p.type.toLowerCase().includes('conference') || p.type.toLowerCase().includes('blog')).length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Other Publications</div>
          </div>
        </div>

        {/* Publications List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4 sm:space-y-6"
          >
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.005 }}
                className="group"
              >
                <div className="glass-morphism rounded-2xl p-4 sm:p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6">
                    {/* Publication Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-sky-500 to-navy-700 flex items-center justify-center flex-shrink-0">
                          {pub.type.toLowerCase().includes('book') ? (
                            <BookOpen className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                          ) : pub.type.toLowerCase().includes('journal') ? (
                            <FileText className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                          ) : (
                            <FileText className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                            <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${
                              pub.type.toLowerCase().includes('journal') 
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                                : pub.type.toLowerCase().includes('book')
                                ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                                : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                            }`}>
                              {pub.type}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center">
                              <Calendar size={12} className="mr-1" />
                              {pub.year}
                            </span>
                          </div>
                          
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            {pub.title}
                          </h3>
                          
                          <p className="text-sky-600 dark:text-sky-400 font-medium text-sm sm:text-base mb-2 sm:mb-3">
                            {pub.authors}
                          </p>
                          
                          {pub.journal && (
                            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                              {pub.journal}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        {pub.keywords.slice(0, 4).map((keyword, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-sky-100 to-sky-50 dark:from-sky-900/20 dark:to-sky-800/20 text-sky-700 dark:text-sky-300 rounded-full text-xs font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                        {pub.keywords.length > 4 && (
                          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                            +{pub.keywords.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions - Responsive */}
                    <div className="flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-3 md:items-end">
                      <div className="flex gap-2 sm:gap-3">
                        <motion.a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-sky-600 to-navy-800 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
                        >
                          <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">Read</span>
                          <span className="sm:hidden">Read</span>
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-2 sm:px-4 sm:py-2 glass-morphism rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
                        >
                          <Download size={14} className="sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">PDF</span>
                          <span className="sm:hidden">PDF</span>
                        </motion.button>
                      </div>
                      
                      <button
                        onClick={() => setSelectedPub(pub)}
                        className="text-sky-600 dark:text-sky-400 font-medium text-xs sm:text-sm hover:underline flex items-center gap-1 justify-center md:justify-start mt-1 sm:mt-0"
                      >
                        <Search size={12} className="sm:w-3.5 sm:h-3.5" />
                        View Abstract
                      </button>
                    </div>
                  </div>

                  {/* Abstract Preview */}
                  {pub.abstract && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-2">
                        {pub.abstract}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Abstract Modal - Responsive */}
        <AnimatePresence>
          {selectedPub && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
              onClick={() => setSelectedPub(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-2 sm:mx-4"
              >
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="pr-4">
                      <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${
                        selectedPub.type.toLowerCase().includes('journal') 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : selectedPub.type.toLowerCase().includes('book')
                          ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                          : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                      }`}>
                        {selectedPub.type}
                      </span>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-3">
                        {selectedPub.title}
                      </h3>
                      <p className="text-sky-600 dark:text-sky-400 text-sm sm:text-base mt-1 sm:mt-2">
                        {selectedPub.authors}
                      </p>
                      {selectedPub.journal && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 sm:mt-2">
                          {selectedPub.journal}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedPub(null)}
                      className="p-1 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 text-lg"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-2 sm:mb-3">
                        Abstract
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                        {selectedPub.abstract || 'No abstract available.'}
                      </p>
                    </div>

                    {selectedPub.keywords && selectedPub.keywords.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-2 sm:mb-3">
                          Keywords
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {selectedPub.keywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-sky-100 to-sky-50 dark:from-sky-900/20 dark:to-sky-800/20 text-sky-700 dark:text-sky-300 rounded-lg text-xs sm:text-sm"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-3 sm:mb-0">
                        <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                        Published: {selectedPub.year}
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <motion.a
                          href={selectedPub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-2.5 bg-gradient-to-r from-sky-600 to-navy-800 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                        >
                          <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                          Full Article
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-2.5 glass-morphism rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                        >
                          <Download size={14} className="sm:w-4 sm:h-4" />
                          Download PDF
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="glass-morphism rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              I'm always open to discussing research collaborations, joint publications, 
              or editorial opportunities. Let's advance knowledge in security studies together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3 bg-gradient-to-r from-sky-600 to-navy-800 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              Discuss Research Collaboration
              <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;