// components/Sections/Education.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy, FileText, Download } from 'lucide-react';
import { certificates } from '../../utils/constants';
import SectionTitle from '../shared/SectionTitle';

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Combine education data with their certificates
  const educationWithCertificates = [
    {
      id: 1,
      degree: 'Doctor of Philosophy (Ph.D) in Sociology',
      institution: 'Kenyatta University',
      period: 'August 2011 - February 2019',
      location: 'Nairobi, Kenya',
      description: 'Thesis: Households and Group Networks in the Development of Fish Farming in Busia County',
      achievements: [
        'Successfully defended doctoral dissertation',
        'Published multiple papers from research findings',
        'Conducted extensive field research in Busia County'
      ],
      certificate: certificates.find(c => c.type === 'Doctorate') || certificates[0],
      iconColor: 'from-blue-500 to-cyan-500',
      badgeColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
    },
    {
      id: 2,
      degree: 'Master of Arts in Sociology',
      institution: 'University of Nairobi',
      period: '2008 - 2009',
      location: 'Nairobi, Kenya',
      description: 'Specialization: Community Development and Rural Sociology',
      achievements: [
        'Research on Tissue Culture Banana adoption in Kiambu',
        'Graduated with distinction',
        'Published research findings'
      ],
      certificate: certificates.find(c => c.type === 'Masters') || certificates[1],
      iconColor: 'from-purple-500 to-pink-500',
      badgeColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
    },
    {
      id: 3,
      degree: 'Bachelor of Arts in Social Sciences',
      institution: 'Catholic University of Eastern Africa',
      period: '2003 - 2007',
      location: 'Nairobi, Kenya',
      description: 'Majors: Sociology and Political Science',
      achievements: [
        'First Class Honors',
        'Class Representative',
        'Active in Model United Nations'
      ],
      certificate: certificates.find(c => c.type === 'Bachelors') || certificates[2],
      iconColor: 'from-green-500 to-emerald-500',
      badgeColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
    }
  ];

  const shortCourses = [
    {
      id: 1,
      title: 'French Language Proficiency',
      institution: 'Alliance Française de Nairobi',
      year: '2010',
      level: 'Fluent Proficiency',
      certificate: certificates.find(c => c.type === 'Language') || certificates[3],
      iconColor: 'from-orange-500 to-yellow-500'
    },
    {
      id: 2,
      title: 'Statistical Package for Social Scientists (SPSS)',
      institution: 'Intraglobal Training Institute',
      year: '2011',
      level: 'Advanced',
      certificate: certificates.find(c => c.type === 'Technical') || certificates[4],
      iconColor: 'from-red-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Computer Packages (MS Office)',
      institution: 'Wab Computer College',
      year: '2010',
      level: 'Expert',
      iconColor: 'from-indigo-500 to-purple-500'
    },
    {
      id: 4,
      title: 'Leadership Skills and Decision Making',
      institution: 'Kiambu High School',
      year: '2002',
      level: 'Certified',
      iconColor: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education & Certifications"
          subtitle="Academic credentials and professional qualifications"
        />

        {/* Formal Education with Certificates */}
        <div className="mb-12 sm:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
          >
            <GraduationCap className="text-primary-600 dark:text-primary-400 w-6 h-6 sm:w-7 sm:h-7" />
            Formal Education & Degrees
          </motion.h3>

          <div className="space-y-6 sm:space-y-8">
            {educationWithCertificates.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-morphism rounded-2xl overflow-hidden card-hover">
                  <div className="flex flex-col lg:grid lg:grid-cols-3 gap-0">
                    {/* Certificate Section - Left */}
                    <div className="lg:col-span-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
                      <div 
                        onClick={() => setSelectedCertificate(edu.certificate)}
                        className="cursor-pointer group w-full h-full"
                      >
                        {edu.certificate?.imageUrl ? (
                          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-gray-300 dark:border-gray-600 group-hover:border-primary-500 dark:group-hover:border-primary-400 transition-all duration-300 group-hover:scale-[1.02]">
                            <div className="relative w-full h-full">
                              <img 
                                src={edu.certificate.imageUrl} 
                                alt={edu.certificate.altText || `${edu.degree} Certificate`}
                                className="w-full h-full object-contain p-4"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-2xl" />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-center">
                                  <h4 className="text-xs sm:text-sm font-semibold truncate">
                                    {edu.certificate.title.split(' ').slice(0, 3).join(' ')}
                                  </h4>
                                  <p className="text-xs opacity-90">{edu.certificate.issuer}</p>
                                  <div className="mt-1 sm:mt-2 text-xs flex items-center justify-center gap-1">
                                    <Calendar size={10} />
                                    {edu.certificate.date}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-square bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 dark:border-gray-600 group-hover:border-primary-500 dark:group-hover:border-primary-400 transition-colors">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center mb-3 sm:mb-4">
                              <Award className="text-primary-600 dark:text-primary-400 w-8 h-8 sm:w-9 sm:h-9" />
                            </div>
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                              {edu.certificate?.title.split(' ').slice(0, 3).join(' ')}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                              {edu.certificate?.issuer}
                            </p>
                            <div className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${edu.badgeColor}`}>
                              {edu.certificate?.type}
                            </div>
                            <div className="mt-3 sm:mt-4 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <Calendar size={10} />
                              {edu.certificate?.date}
                            </div>
                            <button className="mt-3 sm:mt-4 text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-medium hover:underline flex items-center gap-1">
                              View Certificate
                              <Download size={12} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Education Details - Right */}
                    <div className="lg:col-span-2 p-4 sm:p-6 lg:p-8">
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-r ${edu.iconColor} flex items-center justify-center`}>
                            <GraduationCap className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                          </div>
                          <div>
                            <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${edu.badgeColor}`}>
                              {index === 0 ? 'Doctorate' : index === 1 ? 'Masters' : 'Bachelors'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                        {edu.degree}
                      </h4>
                      
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-base sm:text-lg mb-3 sm:mb-4">
                        {edu.institution}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                        {edu.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} className="mr-2 flex-shrink-0" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          <MapPin size={14} className="mr-2 flex-shrink-0" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      </div>

                      {edu.achievements && (
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6">
                          <h5 className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 flex items-center">
                            <Trophy size={16} className="mr-2 text-yellow-500" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-1 sm:space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Short Courses & Professional Development */}
        <div className="mb-12 sm:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
          >
            <Award className="text-purple-600 dark:text-purple-400 w-6 h-6 sm:w-7 sm:h-7" />
            Professional Development & Short Courses
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {shortCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass-morphism rounded-2xl p-4 sm:p-6 h-full card-hover">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${course.iconColor} flex items-center justify-center mb-3 sm:mb-4`}>
                    <BookOpen className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-2">
                    {course.title}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {course.institution}
                  </p>
                  
                  {/* Certificate Image Preview */}
                  {course.certificate?.imageUrl && (
                    <div className="mb-3 sm:mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                      <img 
                        src={course.certificate.imageUrl} 
                        alt={course.certificate.altText || `${course.title} Certificate`}
                        className="w-full h-24 sm:h-32 object-contain bg-white dark:bg-gray-800"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                    <span className="text-xs font-medium px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {course.level}
                    </span>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Calendar size={12} className="mr-1" />
                      {course.year}
                    </div>
                  </div>

                  {course.certificate && (
                    <button
                      onClick={() => setSelectedCertificate(course.certificate)}
                      className="text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-medium hover:underline flex items-center gap-1 mt-3 sm:mt-4"
                    >
                      <FileText size={12} />
                      View Certificate
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <GraduationCap className="text-green-600 dark:text-green-400 w-6 h-6 sm:w-7 sm:h-7" />
            Language Proficiency
          </h3>
          <div className="glass-morphism rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {[
                { language: 'English', level: 'Native', percentage: 100, flag: '🇬🇧' },
                { language: 'French', level: 'Fluent', percentage: 90, flag: '🇫🇷' },
                { language: 'Kiswahili', level: 'Native', percentage: 100, flag: '🇰🇪' },
              ].map((lang, index) => (
                <div key={lang.language} className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {lang.language}
                      </div>
                      <div className="text-primary-600 dark:text-primary-400 font-medium text-xs sm:text-sm">
                        {lang.level}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full bg-gradient-to-r ${lang.language === 'English' ? 'from-blue-500 to-cyan-500' : lang.language === 'French' ? 'from-purple-500 to-pink-500' : 'from-green-500 to-emerald-500'} rounded-full`}
                      />
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                      {lang.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            <div className="glass-morphism rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Degree Programs</div>
            </div>
            <div className="glass-morphism rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Certifications</div>
            </div>
            <div className="glass-morphism rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Short Courses</div>
            </div>
            <div className="glass-morphism rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Languages</div>
            </div>
          </div>
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
              onClick={() => setSelectedCertificate(null)}
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
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedCertificate.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-1 sm:mt-2">
                        {selectedCertificate.issuer}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCertificate(null)}
                      className="p-1 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 text-lg"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-2">
                          Certificate Details
                        </h4>
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400 text-sm">Type:</span>
                            <span className="font-medium text-sm sm:text-base">{selectedCertificate.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400 text-sm">Issued:</span>
                            <span className="font-medium text-sm sm:text-base">{selectedCertificate.date}</span>
                          </div>
                          {selectedCertificate.credentialId && (
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400 text-sm">Credential ID:</span>
                              <span className="font-mono font-medium text-sm sm:text-base">{selectedCertificate.credentialId}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
                      {selectedCertificate?.imageUrl ? (
                        <img 
                          src={selectedCertificate.imageUrl} 
                          alt={selectedCertificate.altText || `${selectedCertificate.title} Certificate`}
                          className="w-full h-full object-contain p-2 sm:p-4"
                        />
                      ) : (
                        <div className="text-center p-4 sm:p-6">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 flex items-center justify-center">
                            <Award className="text-primary-600 dark:text-primary-400 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                          </div>
                          <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {selectedCertificate.title}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {selectedCertificate.issuer}
                          </div>
                          <div className="mt-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            Issued: {selectedCertificate.date}
                          </div>
                          {selectedCertificate.credentialId && (
                            <div className="mt-2 text-xs font-mono text-gray-500 dark:text-gray-400">
                              ID: {selectedCertificate.credentialId}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button className="px-4 py-2 sm:px-6 sm:py-3 glass-morphism rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-sm sm:text-base flex items-center justify-center">
                      <Download className="inline mr-2" size={16} />
                      Download Certificate
                    </button>
                    <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all text-sm sm:text-base">
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

export default Education;