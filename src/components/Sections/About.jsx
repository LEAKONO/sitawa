import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, BookOpen, Target, Award, Languages } from 'lucide-react';
import { aboutData, skills } from '../../utils/constants';
import SectionTitle from '../shared/SectionTitle';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="Expertise in Security Sector Reform & Peace Operations"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="glass-morphism rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Profile
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {aboutData.bio}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center card-hover"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {aboutData.competencies.map((competency, index) => (
                  <motion.div
                    key={competency}
                    variants={itemVariants}
                    className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-xl p-4 card-hover"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      {index % 3 === 0 && <Target size={16} className="text-primary-600 dark:text-primary-400" />}
                      {index % 3 === 1 && <Users size={16} className="text-primary-600 dark:text-primary-400" />}
                      {index % 3 === 2 && <Globe size={16} className="text-primary-600 dark:text-primary-400" />}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {competency}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Language Proficiency
              </h3>
              <div className="space-y-4">
                {aboutData.languages.map((language, index) => (
                  <div key={language.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {language.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-semibold">
                        {language.level}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-morphism rounded-xl p-6 text-center card-hover"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <div className="font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {skill.level}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;