import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ExternalLink, Calendar, Award, BookOpen } from 'lucide-react';
import { certificates, publications } from '../../utils/constants';
import SectionTitle from '../shared/SectionTitle';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeTab, setActiveTab] = useState('certificates');

  return (
    <section id="certificates" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Certificates & Publications"
          subtitle="Academic credentials and published research work"
        />

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 glass-morphism">
            {['certificates', 'publications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {tab === 'certificates' ? 'Certifications' : 'Publications'}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'certificates' ? (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedCertificate(cert)}
                  className="cursor-pointer"
                >
                  <div className="glass-morphism rounded-2xl p-6 h-full card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center">
                        <Award className="text-white" size={24} />
                      </div>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold">
                        {cert.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {cert.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {cert.issuer}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {cert.credentialId && (
                          <span className="font-mono text-xs">
                            ID: {cert.credentialId}
                          </span>
                        )}
                        <ExternalLink size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="publications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="glass-morphism rounded-2xl p-6 card-hover">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex items-center justify-center">
                            <BookOpen className="text-primary-600 dark:text-primary-400" size={20} />
                          </div>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold">
                            {pub.type}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {pub.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {pub.authors}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {pub.keywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{pub.year}</span>
                          </div>
                          {pub.journal && (
                            <div className="flex items-center space-x-1">
                              <FileText size={14} />
                              <span>{pub.journal}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center space-x-2"
                        >
                          <ExternalLink size={16} />
                          <span>Read</span>
                        </a>
                        <button className="px-4 py-2 glass-morphism rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center space-x-2">
                          <Download size={16} />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>

                    {pub.abstract && (
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                          {pub.abstract}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedCertificate(null)}
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
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedCertificate.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {selectedCertificate.issuer}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCertificate(null)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Certificate Details
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Type:</span>
                            <span className="font-medium">{selectedCertificate.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Issued:</span>
                            <span className="font-medium">{selectedCertificate.date}</span>
                          </div>
                          {selectedCertificate.credentialId && (
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">Credential ID:</span>
                              <span className="font-mono font-medium">{selectedCertificate.credentialId}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center">
                      <FileText className="text-gray-400 dark:text-gray-600" size={64} />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button className="px-6 py-3 glass-morphism rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                      <Download className="inline mr-2" size={18} />
                      Download
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                      Verify Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;