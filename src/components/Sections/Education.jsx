// components/Sections/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';

const Education = () => {
  const educationData = [
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
      ]
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
      ]
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
      ]
    }
  ];

  const shortCourses = [
    {
      id: 1,
      title: 'French Language Proficiency',
      institution: 'Alliance Française de Nairobi',
      year: '2010',
      level: 'Fluent Proficiency'
    },
    {
      id: 2,
      title: 'Statistical Package for Social Scientists (SPSS)',
      institution: 'Intraglobal Training Institute',
      year: '2011',
      level: 'Advanced'
    },
    {
      id: 3,
      title: 'Computer Packages (MS Office)',
      institution: 'Wab Computer College',
      year: '2010',
      level: 'Expert'
    },
    {
      id: 4,
      title: 'Leadership Skills and Decision Making',
      institution: 'Kiambu High School',
      year: '2002',
      level: 'Certified'
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <SectionTitle
          title="Education & Qualifications"
          subtitle="Academic foundation and continuous professional development"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formal Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
            >
              <GraduationCap className="text-primary-600 dark:text-primary-400" size={28} />
              Formal Education
            </motion.h3>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="glass-morphism rounded-2xl p-6 card-hover">
                    {/* Degree Icon & Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold">
                        {index === 0 ? 'Doctorate' : index === 1 ? 'Masters' : 'Bachelors'}
                      </span>
                    </div>

                    {/* Degree Details */}
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {edu.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin size={14} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    {edu.achievements && (
                      <div>
                        <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                          <Trophy size={16} className="mr-2 text-yellow-500" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Short Courses & Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
            >
              <Award className="text-purple-600 dark:text-purple-400" size={28} />
              Professional Development
            </motion.h3>

            <div className="space-y-6">
              {shortCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass-morphism rounded-2xl p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="text-purple-600 dark:text-purple-400" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                          {course.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {course.institution}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium px-2 py-1 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/20 text-purple-700 dark:text-purple-300 rounded-full">
                            {course.level}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {course.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-green-600 dark:text-green-400" size={28} />
                Language Proficiency
              </h3>
              <div className="glass-morphism rounded-2xl p-6">
                <div className="space-y-4">
                  {[
                    { language: 'English', level: 'Native', percentage: 100 },
                    { language: 'French', level: 'Fluent', percentage: 90 },
                    { language: 'Kiswahili', level: 'Native', percentage: 100 },
                  ].map((lang, index) => (
                    <div key={lang.language} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {lang.language}
                        </span>
                        <span className="text-primary-600 dark:text-primary-400 font-semibold">
                          {lang.level}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-morphism rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">Degree Programs</div>
            </div>
            <div className="glass-morphism rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Study</div>
            </div>
            <div className="glass-morphism rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400">Short Courses</div>
            </div>
            <div className="glass-morphism rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">Languages</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;