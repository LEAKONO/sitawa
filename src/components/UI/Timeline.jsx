import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const TimelineItem = ({ 
  title, 
  subtitle, 
  period, 
  location, 
  description, 
  points = [],
  isLast = false,
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[19px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/30 to-transparent" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-10 h-10 flex items-center justify-center">
        <div className="w-4 h-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full ring-4 ring-white dark:ring-gray-900" />
      </div>
      
      {/* Content */}
      <div className="glass-morphism rounded-2xl p-6 card-hover">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col md:items-end mt-2 md:mt-0">
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <Calendar size={14} />
              <span className="text-sm">{period}</span>
            </div>
            {location && (
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mt-1">
                <MapPin size={14} />
                <span className="text-sm">{location}</span>
              </div>
            )}
          </div>
        </div>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>
        )}
        
        {points.length > 0 && (
          <ul className="space-y-2">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const Timeline = ({ items = [] }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem
          key={item.id || index}
          {...item}
          index={index}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;