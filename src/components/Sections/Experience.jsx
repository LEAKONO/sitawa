import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, Users, FileText } from 'lucide-react';
import { experiences } from '../../utils/constants';
import SectionTitle from '../shared/SectionTitle';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Professional Experience"
          subtitle="Over 15 years of research, consulting, and academic leadership"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-purple-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${index % 2 === 0 ? 'lg:pr-8 lg:ml-auto lg:w-1/2' : 'lg:pl-8 lg:mr-auto lg:w-1/2'}`}
            >
              {/* Timeline dot */}
              <div className={`hidden lg:flex absolute top-0 ${index % 2 === 0 ? '-right-3' : '-left-3'} w-6 h-6 items-center justify-center`}>
                <div className="w-4 h-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full ring-4 ring-white dark:ring-gray-900" />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-morphism rounded-2xl p-8 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="text-primary-600 dark:text-primary-400" size={20} />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {exp.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Users className="text-primary-600 dark:text-primary-400 mt-1" size={18} />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {exp.achievements && (
                    <div className="flex items-start space-x-2">
                      <Award className="text-primary-600 dark:text-primary-400 mt-1" size={18} />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Notable Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {exp.projects && (
                    <div className="flex items-start space-x-2">
                      <FileText className="text-primary-600 dark:text-primary-400 mt-1" size={18} />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Key Projects:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;