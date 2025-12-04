// components/Experience.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  Users,
  FileText,
  Filter,
} from "lucide-react";
import { experiences, experienceCategories } from "../../utils/constants";
import SectionTitle from "../shared/SectionTitle";

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredExperiences = experiences.filter(
    (exp) => activeCategory === "all" || exp.category === activeCategory
  );

  const displayedExperiences = showAll
    ? filteredExperiences
    : filteredExperiences.slice(0, 6);

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Professional Experience"
          subtitle="Comprehensive career spanning research, academia, consulting, and administration"
        />

        {/* Filter Categories */}
        {/* Filter Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {experienceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-5 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
              }`}
            >
              <span className="w-5 h-5 flex items-center justify-center">
                {category.icon}
              </span>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-morphism p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {experiences.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Roles</div>
          </div>
          <div className="glass-morphism p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {experiences.filter((e) => e.category === "research").length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Research Roles
            </div>
          </div>
          <div className="glass-morphism p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {experiences.filter((e) => e.category === "academic").length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Academic Roles
            </div>
          </div>
          <div className="glass-morphism p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {experiences.filter((e) => e.category === "consulting").length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Consulting Projects
            </div>
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="glass-morphism rounded-2xl p-8 card-hover h-full"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.category === "research"
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        : exp.category === "academic"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                        : exp.category === "consulting"
                        ? "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {exp.type}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
                      <Briefcase
                        className="text-primary-600 dark:text-primary-400"
                        size={24}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {exp.description}
                </p>

                {exp.responsibilities && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center space-x-2">
                      <Users
                        size={18}
                        className="text-primary-600 dark:text-primary-400"
                      />
                      <span>Key Responsibilities</span>
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.achievements && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center space-x-2">
                      <Award
                        size={18}
                        className="text-purple-600 dark:text-purple-400"
                      />
                      <span>Achievements</span>
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.skills && (
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.slice(0, 4).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                          +{exp.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredExperiences.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity flex items-center space-x-2 mx-auto"
            >
              <Filter size={18} />
              <span>
                {showAll
                  ? "Show Less"
                  : `Show All ${filteredExperiences.length} Experiences`}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
