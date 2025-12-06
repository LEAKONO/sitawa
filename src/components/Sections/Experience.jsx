import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  Users,
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
    : filteredExperiences.slice(0, 8); // Increased from 6 to 8 for better display

  const categoryColors = {
    research: "from-sky-500 to-blue-600",
    academic: "from-emerald-500 to-teal-600",
    consulting: "from-amber-500 to-orange-600",
    administration: "from-indigo-500 to-purple-600",
    training: "from-teal-500 to-cyan-500",
    volunteer: "from-rose-500 to-pink-500",
  };

  const getCategoryColor = (type) => {
    const typeLower = type.toLowerCase();
    if (typeLower.includes("research")) return categoryColors.research;
    if (typeLower.includes("academic") || typeLower.includes("teaching")) return categoryColors.academic;
    if (typeLower.includes("consulting")) return categoryColors.consulting;
    if (typeLower.includes("administration") || typeLower.includes("admin")) return categoryColors.administration;
    if (typeLower.includes("training")) return categoryColors.training;
    if (typeLower.includes("volunteer") || typeLower.includes("intern")) return categoryColors.volunteer;
    return "from-sky-500 to-navy-700";
  };

  return (
    <section id="experience" className="section-padding overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Professional Experience"
          subtitle={`Comprehensive career spanning ${experiences.length} roles in research, academia, consulting, training, and administration`}
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center">
          {experienceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-full transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-sky-600 to-navy-800 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
              }`}
            >
              <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                {category.icon}
              </span>
              <span className="font-medium whitespace-nowrap">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          <div className="glass-morphism p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-1 sm:mb-2">
              {experiences.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Total Roles</div>
          </div>
          <div className="glass-morphism p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
              {experiences.filter((e) => e.category === "research").length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Research Roles</div>
          </div>
          <div className="glass-morphism p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 sm:mb-2">
              {experiences.filter((e) => e.category === "academic").length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Academic Roles</div>
          </div>
          <div className="glass-morphism p-4 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400 mb-1 sm:mb-2">
              {experiences.filter((e) => e.category === "consulting").length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Consulting Projects</div>
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {displayedExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="glass-morphism rounded-2xl overflow-hidden h-full card-hover flex flex-col"
              >
                {/* Experience Header */}
                <div className="p-4 sm:p-6 lg:p-8 pb-4 sm:pb-6">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span
                      className={`px-3 py-1.5 sm:px-4 sm:py-1.5 bg-gradient-to-r ${
                        getCategoryColor(exp.type)
                      } text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm`}
                    >
                      {exp.type}
                    </span>
                    
                    {/* Icon */}
                    <div className="p-2 rounded-lg bg-gradient-to-br from-sky-100 to-navy-100 dark:from-sky-900/20 dark:to-navy-900/20">
                      <Briefcase
                        className="text-sky-600 dark:text-sky-400 w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                  </div>

                  {/* Position and Company */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {exp.position}
                  </h3>
                  <p className="text-sky-600 dark:text-sky-400 font-medium text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                    {exp.company}
                  </p>

                  {/* Period and Location */}
                  <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {exp.description}
                  </p>
                </div>

                {/* Experience Content */}
                <div className="p-4 sm:p-6 lg:p-8 pt-0 flex-1 flex flex-col">
                  {/* Responsibilities */}
                  {exp.responsibilities && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center space-x-2">
                        <Users
                          size={16}
                          className="text-sky-600 dark:text-sky-400"
                        />
                        <span>Key Responsibilities</span>
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center space-x-2">
                        <Award
                          size={16}
                          className="text-amber-600 dark:text-amber-400"
                        />
                        <span>Achievements</span>
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {exp.achievements.slice(0, 2).map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills */}
                  {exp.skills && (
                    <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Skills Applied
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.skills.slice(0, 4).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-sky-100 to-sky-50 dark:from-sky-900/20 dark:to-sky-800/20 text-sky-700 dark:text-sky-300 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 4 && (
                          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                            +{exp.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredExperiences.length > 8 && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-sky-600 to-navy-800 text-white rounded-full hover:opacity-90 transition-opacity flex items-center space-x-2 mx-auto text-sm sm:text-base"
            >
              <Filter size={16} />
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