// components/Sections/Publications.jsx
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
    <section id="publications" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container-custom">
        <SectionTitle
          title="Publications"
          subtitle="Research contributions in security studies, peace operations, and development"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {publicationTypes.map((type) => (
            <motion.button
              key={type.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(type.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all ${
                filter === type.id
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                  : 'glass-morphism text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Filter size={16} />
              <span className="font-medium">{type.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Publication Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-morphism p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {publications.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Publications</div>
          </div>
          <div className="glass-morphism p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {publications.filter(p => p.type.toLowerCase().includes('journal')).length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Journal Articles</div>
          </div>
          <div className="glass-morphism p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {publications.filter(p => p.type.toLowerCase().includes('book')).length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Books & Chapters</div>
          </div>
          <div className="glass-morphism p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {publications.filter(p => p.type.toLowerCase().includes('conference') || p.type.toLowerCase().includes('blog')).length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Other Publications</div>
          </div>
        </div>

        {/* Publications List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
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
                <div className="glass-morphism rounded-2xl p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    {/* Publication Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          {pub.type.toLowerCase().includes('book') ? (
                            <BookOpen className="text-white" size={24} />
                          ) : pub.type.toLowerCase().includes('journal') ? (
                            <FileText className="text-white" size={24} />
                          ) : (
                            <FileText className="text-white" size={24} />
                          )}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              pub.type.toLowerCase().includes('journal') 
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                                : pub.type.toLowerCase().includes('book')
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                                : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                            }`}>
                              {pub.type}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                              <Calendar size={12} className="mr-1" />
                              {pub.year}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {pub.title}
                          </h3>
                          
                          <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                            {pub.authors}
                          </p>
                          
                          {pub.journal && (
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                              {pub.journal}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.keywords.slice(0, 4).map((keyword, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                        {pub.keywords.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                            +{pub.keywords.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                      <div className="flex gap-3">
                        <motion.a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={16} />
                          <span className="hidden sm:inline">Read</span>
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 glass-morphism rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                        >
                          <Download size={16} />
                          <span className="hidden sm:inline">PDF</span>
                        </motion.button>
                      </div>
                      
                      <button
                        onClick={() => setSelectedPub(pub)}
                        className="text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline flex items-center gap-1 justify-center md:justify-start"
                      >
                        <Search size={14} />
                        View Abstract
                      </button>
                    </div>
                  </div>

                  {/* Abstract Preview */}
                  {pub.abstract && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                        {pub.abstract}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Abstract Modal */}
        <AnimatePresence>
          {selectedPub && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedPub(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedPub.type.toLowerCase().includes('journal') 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : selectedPub.type.toLowerCase().includes('book')
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                      }`}>
                        {selectedPub.type}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3">
                        {selectedPub.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 mt-2">
                        {selectedPub.authors}
                      </p>
                      {selectedPub.journal && (
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                          {selectedPub.journal}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedPub(null)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Abstract
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {selectedPub.abstract || 'No abstract available.'}
                      </p>
                    </div>

                    {selectedPub.keywords && selectedPub.keywords.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Keywords
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedPub.keywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <Calendar size={14} />
                        Published: {selectedPub.year}
                      </div>
                      <div className="flex gap-3">
                        <motion.a
                          href={selectedPub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Full Article
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-5 py-2.5 glass-morphism rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-2"
                        >
                          <Download size={16} />
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing research collaborations, joint publications, 
              or editorial opportunities. Let's advance knowledge in security studies together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Discuss Research Collaboration
              <ExternalLink className="ml-2" size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;