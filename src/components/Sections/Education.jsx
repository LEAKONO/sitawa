import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy, FileText, Download, Shield, Lock, Eye, EyeOff, Printer, Maximize2, ZoomIn, ZoomOut, RotateCw, X } from 'lucide-react';
import { certificates } from '../../utils/constants';
import SectionTitle from '../shared/SectionTitle';

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showFullView, setShowFullView] = useState(false);
  const [viewScale, setViewScale] = useState(1);
  const [viewPosition, setViewPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showSecurityInfo, setShowSecurityInfo] = useState(false);
  const [activeWatermark, setActiveWatermark] = useState(true);
  const modalRef = useRef(null);
  const imageContainerRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Security: Prevent right-click, screenshot, and print
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.closest('.certificate-container') || e.target.tagName === 'IMG') {
        e.preventDefault();
        showSecurityAlert('Right-click is disabled for certificate protection');
        return false;
      }
    };

    const handleKeyDown = (e) => {
      // Prevent Print Screen (PrtScn)
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        showSecurityAlert('Screenshots are disabled for security');
        return false;
      }

      // Prevent Ctrl+P (Print)
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        showSecurityAlert('Printing is disabled for certificate protection');
        return false;
      }

      // Prevent Ctrl+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        showSecurityAlert('Saving is disabled for certificate protection');
        return false;
      }

      // Prevent Windows+Shift+S (Windows snipping tool)
      if (e.key === 's' && e.shiftKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        showSecurityAlert('Screenshots are disabled for security');
        return false;
      }
    };

    const handleBlur = () => {
      // Add security overlay when window loses focus
      if (selectedCertificate && showFullView) {
        showSecurityAlert('Certificate viewer security activated');
      }
    };

    const showSecurityAlert = (message) => {
      // Create security alert
      const alert = document.createElement('div');
      alert.className = 'fixed top-4 right-4 z-[100] bg-red-500/90 text-white px-4 py-3 rounded-lg shadow-lg animate-pulse border border-red-300';
      alert.innerHTML = `
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
          <span class="font-semibold">${message}</span>
        </div>
      `;
      document.body.appendChild(alert);
      
      setTimeout(() => {
        alert.remove();
      }, 3000);
    };

    // Add security styles
    const style = document.createElement('style');
    style.id = 'security-styles';
    style.textContent = `
      @media print {
        .certificate-container *,
        .certificate-modal *,
        .watermarked-image * {
          display: none !important;
        }
        body::after {
          content: "Certificate printing is disabled for security reasons.";
          display: block;
          text-align: center;
          padding: 2rem;
          font-size: 1.5rem;
          color: red;
        }
      }
      
      img[src*="certificate"] {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleBlur);
      document.getElementById('security-styles')?.remove();
    };
  }, [selectedCertificate, showFullView]);

  // Reset view when certificate changes
  useEffect(() => {
    if (selectedCertificate) {
      setViewScale(1);
      setViewPosition({ x: 0, y: 0 });
      setShowFullView(false);
    }
  }, [selectedCertificate]);

  // Handle mouse drag for image movement
  const handleMouseDown = useCallback((e) => {
    if (!showFullView) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - viewPosition.x,
      y: e.clientY - viewPosition.y
    };
  }, [showFullView, viewPosition]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !showFullView) return;
    e.preventDefault();
    setViewPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  }, [isDragging, showFullView]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e) => {
    if (!showFullView) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setViewScale(prev => Math.max(0.5, Math.min(3, prev * delta)));
  }, [showFullView]);

  const resetView = () => {
    setViewScale(1);
    setViewPosition({ x: 0, y: 0 });
  };

  const downloadWatermarkedImage = async (certificate) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw original image
        ctx.drawImage(img, 0, 0);
        
        // Add enhanced watermark text
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.font = 'bold 48px Arial, sans-serif';
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        
        // Multiple watermarks at different angles and positions
        const watermarkText = 'DR. MICHAEL SITAWA MUGAH - PROPRIETARY - DO NOT COPY';
        
        // Diagonal watermarks
        for (let i = -2; i <= 2; i++) {
          for (let j = -2; j <= 2; j++) {
            ctx.save();
            ctx.translate(img.width / 2 + i * 400, img.height / 2 + j * 200);
            ctx.rotate(-Math.PI / 4);
            ctx.fillText(watermarkText, 0, 0);
            ctx.restore();
          }
        }
        
        ctx.restore();
        
        // Add grid pattern
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 1;
        
        // Vertical lines
        for (let x = 0; x < img.width; x += 50) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, img.height);
          ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = 0; y < img.height; y += 50) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(img.width, y);
          ctx.stroke();
        }
        ctx.restore();
        
        // Add copyright text
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.font = 'bold 24px Arial, sans-serif';
        ctx.fillStyle = '#666666';
        ctx.textAlign = 'left';
        ctx.fillText(`© ${new Date().getFullYear()} Dr. Michael Sitawa Mugah - For Verification Only`, 20, img.height - 30);
        
        // Add verification seal
        ctx.beginPath();
        ctx.arc(100, 100, 40, 0, Math.PI * 2);
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        ctx.font = 'bold 32px Arial';
        ctx.fillStyle = '#3b82f6';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('✓', 100, 105);
        ctx.restore();
        
        // Trigger download
        const link = document.createElement('a');
        link.download = `certificate-watermarked-${certificate.type}-${new Date().getTime()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      };
      
      img.src = certificate.imageUrl;
    } catch (error) {
      console.error('Error downloading watermarked image:', error);
    }
  };

  const educationWithCertificates = [
  {
    id: 1,
    degree: 'Doctor of Philosophy (Ph.D) in Sociology',
    institution: 'Kenyatta University',
    period: 'August 2011 - February 2019',
    location: 'Nairobi, Kenya',
    description: 'Thesis: Households and Group Networks in the Development of Fish Farming in Busia County',
    achievements: [
      'Successfully defended PhD dissertation',
      'Published multiple peer-reviewed journal articles from research',
      'Presented research findings at international conferences',
      'Contributed to knowledge in rural development and aquaculture',
      'Received research grants for fieldwork'
    ],
    grade: 'Pass with Distinction',
    certificate: certificates.find(c => c.type === 'Doctorate') || certificates[0],
    iconColor: 'from-sky-500 to-navy-700',
    badgeColor: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300'
  },
  {
    id: 2,
    degree: 'Master of Arts in Sociology',
    institution: 'University of Nairobi',
    period: '2008 - 2009',
    location: 'Nairobi, Kenya',
    description: 'Specialization: Community Development and Rural Sociology',
    achievements: [
      'Distinction in Research Methodology',
      'Published Master\'s research findings',
      'Awarded scholarship for academic excellence',
      'Class Representative for MA cohort',
      'Active participant in departmental seminars'
    ],
    grade: 'Pass with Distinction',
    certificate: certificates.find(c => c.type === 'Masters') || certificates[1],
    iconColor: 'from-sky-600 to-blue-600',
    badgeColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
  },
  {
    id: 3,
    degree: 'Bachelor of Arts in Social Sciences',
    institution: 'Catholic University of Eastern Africa',
    period: '2003 - 2007',
    location: 'Nairobi, Kenya',
    description: 'Majors: Sociology and Political Science',
    achievements: [
      'Second Class Upper Division (Honors)',
      'Elected Class Representative 2003-2007',
      'Deputy Secretary General - Kenya Model United Nations CUEA Chapter',
      'Head Delegate at National Model UN Conferences (Cameroon & Morocco delegations)',
      'Deputy Projects Director - Righteous Invasion of Towns project',
      'Active member: Political Science Association & HIV/AIDS awareness club',
      'Mediator in academic seminars and debates'
    ],
    grade: 'Second Class Upper Division',
    certificate: certificates.find(c => c.type === 'Bachelors') || certificates[2],
    iconColor: 'from-emerald-500 to-teal-600',
    badgeColor: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
  },
  {
    id: 4,
    degree: 'Certificate in Rights and Protection of Children in Armed Conflict',
    institution: 'École de Maintien de la Paix « Alioune Blondin BESYE »',
    period: 'May 2023',
    location: 'Bamako, Mali',
    description: 'Specialized training on international child protection laws and protocols in conflict zones',
    achievements: [
      'Completed intensive two-week training program',
      'Gained expertise in international humanitarian law',
      'Developed practical skills for child protection in armed conflicts',
      'Enhanced understanding of AU and UN child protection frameworks',
      'Networking with international peacekeeping professionals'
    ],
    grade: 'Certificate of Completion',
    certificate: certificates.find(c => c.id === 4) || certificates[3],
    iconColor: 'from-purple-500 to-pink-500',
    badgeColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
  }
];

  const shortCourses = [
    {
      id: 1,
      title: 'French Language Proficiency',
      institution: 'Alliance Française de Nairobi',
      year: '2010',
      level: 'Fluent Proficiency',
      certificate: certificates.find(c => c.id === 5) || certificates[4], // French Language (ID: 5)
      iconColor: 'from-orange-500 to-yellow-500'
    },
    {
      id: 2,
      title: 'Statistical Package for Social Scientists (SPSS)',
      institution: 'Intraglobal Training Institute',
      year: '2011',
      level: 'Advanced',
      certificate: certificates.find(c => c.id === 6) || certificates[5], // SPSS (ID: 6)
      iconColor: 'from-red-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Computer Packages (MS Office)',
      institution: 'Wab Computer College',
      year: '2010',
      level: 'Expert',
      iconColor: 'from-indigo-500 to-blue-600'
    },
    {
      id: 4,
      title: 'Leadership Skills and Decision Making',
      institution: 'Kiambu High School',
      year: '2002',
      level: 'Certified',
      iconColor: 'from-teal-500 to-cyan-500'
    },
    {
    id: 5,
    title: 'Pedagogical Preparation of University Lecturers',
    institution: 'Catholic University of Eastern Africa (with Liverpool Hope University-UK)',
    year: '2010',
    level: 'Professional Development',
    grade: 'Certificate of Completion',
    achievements: [
      'Education for Sustainable Development Workshop',
      'Enhanced teaching methodologies for higher education'
    ],
    iconColor: 'from-green-500 to-emerald-600'
  },
  {
    id: 6,
    title: 'Academic Staff Training Workshop',
    institution: 'Catholic University of Eastern Africa',
    year: '2015',
    level: 'Teaching and Learning in Higher Education',
    grade: 'Certificate of Participation',
    achievements: [
      'Advanced pedagogical techniques',
      'Curriculum development strategies'
    ],
    iconColor: 'from-violet-500 to-purple-600'
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
            <GraduationCap className="text-sky-600 dark:text-sky-400 w-6 h-6 sm:w-7 sm:h-7" />
            Formal Education & Professional Certifications
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
                    {/* Certificate Section - Left with Enhanced Watermark */}
                    <div className="lg:col-span-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
                      <div 
                        onClick={() => setSelectedCertificate(edu.certificate)}
                        className="cursor-pointer group w-full h-full certificate-container"
                      >
                        {edu.certificate?.imageUrl ? (
                          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-gray-300 dark:border-gray-600 group-hover:border-sky-500 dark:group-hover:border-sky-400 transition-all duration-300 group-hover:scale-[1.02] relative watermarked-image">
                            <div className="relative w-full h-full">
                              <img 
                                src={edu.certificate.imageUrl} 
                                alt={edu.certificate.altText || `${edu.degree} Certificate`}
                                className="w-full h-full object-contain p-4 relative z-10 select-none pointer-events-none"
                                loading="lazy"
                                draggable="false"
                              />
                              {/* Enhanced Watermark Overlay */}
                              <div className="absolute inset-0 z-20 pointer-events-none">
                                {/* Primary diagonal text watermark */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                                  <div className="text-sm sm:text-base opacity-20 rotate-45 transform origin-center whitespace-nowrap font-bold text-gray-800 dark:text-gray-200 tracking-wider">
                                    DR. MICHAEL SITAWA MUGAH • {edu.institution} • {edu.certificate.date}
                                  </div>
                                </div>
                                
                                {/* Secondary diagonal watermark */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                  <div className="text-xs sm:text-sm opacity-15 -rotate-45 transform origin-center whitespace-nowrap font-bold text-gray-800 dark:text-gray-200 tracking-wider">
                                    PROPRIETARY • DO NOT COPY • VERIFICATION ONLY
                                  </div>
                                </div>
                                
                                {/* Pattern overlay */}
                                <div className="absolute inset-0 opacity-5">
                                  <div className="absolute inset-0" style={{
                                    background: `repeating-linear-gradient(
                                      45deg,
                                      transparent,
                                      transparent 15px,
                                      #0ea5e9 15px,
                                      #0ea5e9 30px
                                    ),
                                    repeating-linear-gradient(
                                      -45deg,
                                      transparent,
                                      transparent 15px,
                                      #1e40af 15px,
                                      #1e40af 30px
                                    )`
                                  }}></div>
                                </div>
                                
                                {/* Security badge */}
                                <div className="absolute top-3 right-3 opacity-30">
                                  <div className="w-8 h-8 rounded-full border-2 border-sky-500 flex items-center justify-center">
                                    <Lock className="w-4 h-4 text-sky-500" />
                                  </div>
                                </div>
                              </div>
                              
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-2xl z-30" />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                                <div className="text-center">
                                  <div className="flex items-center justify-center gap-1 mb-1">
                                    <Shield className="w-3 h-3" />
                                    <h4 className="text-xs sm:text-sm font-semibold truncate">
                                      Protected Certificate
                                    </h4>
                                  </div>
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
                          <div className="aspect-square bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 dark:border-gray-600 group-hover:border-sky-500 dark:group-hover:border-sky-400 transition-colors">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-sky-100 to-sky-50 dark:from-sky-900/30 dark:to-sky-800/30 flex items-center justify-center mb-3 sm:mb-4">
                              <Award className="text-sky-600 dark:text-sky-400 w-8 h-8 sm:w-9 sm:h-9" />
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
                            <button className="mt-3 sm:mt-4 text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-medium hover:underline flex items-center gap-1">
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
                              {index === 0 ? 'Doctorate' : 
                               index === 1 ? 'Masters' : 
                               index === 2 ? 'Bachelors' : 
                               'Professional Certification'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                        {edu.degree}
                      </h4>
                      
                      <p className="text-sky-600 dark:text-sky-400 font-medium text-base sm:text-lg mb-3 sm:mb-4">
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
                                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0" />
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
            <Award className="text-sky-600 dark:text-sky-400 w-6 h-6 sm:w-7 sm:h-7" />
            Skills & Technical Training
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
                  
                  {/* Certificate Image Preview with Enhanced Watermark */}
                  {course.certificate?.imageUrl && (
                    <div className="mb-3 sm:mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 relative certificate-container">
                      <img 
                        src={course.certificate.imageUrl} 
                        alt={course.certificate.altText || `${course.title} Certificate`}
                        className="w-full h-24 sm:h-32 object-contain bg-white dark:bg-gray-800 relative z-10 select-none pointer-events-none"
                        loading="lazy"
                        draggable="false"
                      />
                      {/* Enhanced watermark for small certificates */}
                      <div className="absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-[8px] sm:text-[10px] opacity-20 rotate-45 transform origin-center whitespace-nowrap font-bold text-gray-800 dark:text-gray-200 tracking-wider">
                            SITAWA M.M • PROTECTED
                          </div>
                        </div>
                        {/* Security pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                          background: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 5px,
                            #0ea5e9 5px,
                            #0ea5e9 10px
                          )`
                        }}></div>
                      </div>
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
                      className="text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-medium hover:underline flex items-center gap-1 mt-3 sm:mt-4"
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
            <GraduationCap className="text-emerald-600 dark:text-emerald-400 w-6 h-6 sm:w-7 sm:h-7" />
            Language Proficiency
          </h3>
          <div className="glass-morphism rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {[
                { language: 'English', level: 'Native', percentage: 100, flag: '🇬🇧' },
                { language: 'French', level: 'Fluent', percentage: 90, flag: '🇫🇷' },
                { language: 'Kiswahili', level: 'Native', percentage: 100, flag: '🇰🇪' },
                { language: 'Luhya', level: 'Fluent', percentage: 90, flag: '🇰🇪' },
                { language: 'Lingala', level: 'Intermediate', percentage: 60, flag: '🇨🇩' },
              ].map((lang, index) => (
                <div key={lang.language} className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {lang.language}
                      </div>
                      <div className="text-sky-600 dark:text-sky-400 font-medium text-xs sm:text-sm">
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
                        className={`h-full bg-gradient-to-r ${
                          lang.language === 'English' ? 'from-sky-500 to-navy-700' : 
                          lang.language === 'French' ? 'from-blue-500 to-indigo-600' : 
                          lang.language === 'Kiswahili' ? 'from-emerald-500 to-teal-600' :
                          lang.language === 'Luhya' ? 'from-orange-500 to-amber-600' :
                          'from-red-500 to-pink-600'
                        } rounded-full`}
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

        {/* Education Statistics - UPDATED NUMBERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            <div className="glass-morphism rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Degree & Cert Programs</div>
            </div>
            <div className="glass-morphism rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">6</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Certifications</div>
            </div>
            <div className="glass-morphism rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Short Courses</div>
            </div>
            <div className="glass-morphism rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Languages</div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Secure Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm overflow-hidden"
              onClick={() => setSelectedCertificate(null)}
              ref={modalRef}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden mx-2 sm:mx-4 border border-gray-700 shadow-2xl certificate-modal"
              >
                {/* Security Header */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-600 to-navy-800 flex items-center justify-center">
                        <Shield className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {selectedCertificate.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {selectedCertificate.issuer} • Secure Viewer
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowSecurityInfo(!showSecurityInfo)}
                        className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                        title="Security Info"
                      >
                        <Lock className="text-gray-400 hover:text-sky-400 w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setSelectedCertificate(null)}
                        className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                        title="Close"
                      >
                        <X className="text-gray-400 hover:text-red-400 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Security Info Panel */}
                  {showSecurityInfo && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                            <Lock className="w-4 h-4 text-red-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Right-click Disabled</div>
                            <div className="text-xs text-gray-400">Prevents image saving</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                            <Printer className="w-4 h-4 text-yellow-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Print Disabled</div>
                            <div className="text-xs text-gray-400">Prevents printing</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Shield className="w-4 h-4 text-green-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Watermarked</div>
                            <div className="text-xs text-gray-400">Multi-layer protection</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Certificate Display Area */}
                <div className="p-4 sm:p-6">
                  <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Certificate Details */}
                    <div className="lg:col-span-1 space-y-6">
                      <div className="glass-morphism rounded-xl p-4 sm:p-6">
                        <h4 className="font-semibold text-white text-sm sm:text-base mb-4">
                          Certificate Details
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400 text-sm">Type:</span>
                            <span className="font-medium text-white text-sm sm:text-base">{selectedCertificate.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400 text-sm">Issued:</span>
                            <span className="font-medium text-white text-sm sm:text-base">{selectedCertificate.date}</span>
                          </div>
                          {selectedCertificate.credentialId && (
                            <div className="flex justify-between">
                              <span className="text-gray-400 text-sm">Credential ID:</span>
                              <span className="font-mono font-medium text-sky-400 text-sm sm:text-base">{selectedCertificate.credentialId}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Security Controls */}
                      <div className="glass-morphism rounded-xl p-4 sm:p-6">
                        <h4 className="font-semibold text-white text-sm sm:text-base mb-4">
                          Viewer Controls
                        </h4>
                        <div className="space-y-3">
                          <button
                            onClick={() => setShowFullView(!showFullView)}
                            className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              {showFullView ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
                              <span className="text-white text-sm">{showFullView ? 'Hide Full View' : 'Show Full View'}</span>
                            </div>
                            <Maximize2 className="w-4 h-4 text-gray-400" />
                          </button>
                          
                          <button
                            onClick={() => setActiveWatermark(!activeWatermark)}
                            className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <Shield className={`w-4 h-4 ${activeWatermark ? 'text-sky-400' : 'text-gray-400'}`} />
                              <span className="text-white text-sm">{activeWatermark ? 'Hide Watermark' : 'Show Watermark'}</span>
                            </div>
                            <div className={`w-6 h-3 rounded-full ${activeWatermark ? 'bg-sky-500' : 'bg-gray-600'} relative`}>
                              <div className={`absolute top-0.5 w-2 h-2 rounded-full bg-white transition-transform ${activeWatermark ? 'right-0.5' : 'left-0.5'}`} />
                            </div>
                          </button>
                          
                          <button
                            onClick={() => downloadWatermarkedImage(selectedCertificate)}
                            className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-r from-sky-600 to-navy-800 hover:opacity-90 transition-opacity"
                          >
                            <Download className="w-4 h-4 text-white" />
                            <span className="text-white text-sm font-medium">Download Watermarked Copy</span>
                          </button>
                        </div>
                      </div>
                      
                      {/* Zoom Controls */}
                      {showFullView && (
                        <div className="glass-morphism rounded-xl p-4 sm:p-6">
                          <h4 className="font-semibold text-white text-sm sm:text-base mb-4">
                            Zoom & Navigation
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => setViewScale(Math.max(0.5, viewScale - 0.2))}
                              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                            >
                              <ZoomOut className="w-4 h-4 text-white" />
                              <span className="text-white text-sm">Zoom Out</span>
                            </button>
                            <button
                              onClick={resetView}
                              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                            >
                              <RotateCw className="w-4 h-4 text-white" />
                              <span className="text-white text-sm">Reset</span>
                            </button>
                            <button
                              onClick={() => setViewScale(Math.min(3, viewScale + 0.2))}
                              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                            >
                              <ZoomIn className="w-4 h-4 text-white" />
                              <span className="text-white text-sm">Zoom In</span>
                            </button>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>50%</span>
                              <span>Scale: {Math.round(viewScale * 100)}%</span>
                              <span>300%</span>
                            </div>
                            <input
                              type="range"
                              min="50"
                              max="300"
                              value={viewScale * 100}
                              onChange={(e) => setViewScale(e.target.value / 100)}
                              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-sky-500"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Certificate Image with Enhanced Security */}
                    <div className="lg:col-span-2">
                      <div 
                        ref={imageContainerRef}
                        className="relative w-full h-[60vh] bg-black rounded-xl overflow-hidden border border-gray-700"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onWheel={handleWheel}
                      >
                        {selectedCertificate?.imageUrl ? (
                          <div className="relative w-full h-full">
                            <img 
                              src={selectedCertificate.imageUrl} 
                              alt={selectedCertificate.altText || `${selectedCertificate.title} Certificate`}
                              className={`w-full h-full object-contain relative z-10 select-none ${showFullView ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
                              style={showFullView ? {
                                transform: `translate(${viewPosition.x}px, ${viewPosition.y}px) scale(${viewScale})`,
                                transition: isDragging ? 'none' : 'transform 0.2s ease'
                              } : {}}
                              draggable="false"
                            />
                            
                            {/* Enhanced Security Watermarks */}
                            {activeWatermark && (
                              <div className="absolute inset-0 z-20 pointer-events-none">
                                {/* Primary diagonal watermark */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="text-xl sm:text-2xl opacity-20 rotate-45 transform origin-center whitespace-nowrap font-bold text-white tracking-widest">
                                    DR. MICHAEL SITAWA MUGAH
                                  </div>
                                </div>
                                
                                {/* Secondary watermark */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="text-lg sm:text-xl opacity-15 -rotate-45 transform origin-center whitespace-nowrap font-bold text-white tracking-wider">
                                    VERIFICATION COPY • DO NOT DISTRIBUTE
                                  </div>
                                </div>
                                
                                {/* Grid pattern */}
                                <div className="absolute inset-0 opacity-10">
                                  <div className="absolute inset-0" style={{
                                    backgroundImage: `
                                      linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
                                    `,
                                    backgroundSize: '50px 50px'
                                  }}></div>
                                </div>
                                
                                {/* Corner security badges */}
                                <div className="absolute top-4 left-4">
                                  <div className="bg-red-500/20 backdrop-blur-sm rounded-lg p-2 border border-red-500/30">
                                    <div className="text-red-300 text-xs font-bold">SECURE</div>
                                  </div>
                                </div>
                                
                                <div className="absolute bottom-4 right-4">
                                  <div className="bg-sky-500/20 backdrop-blur-sm rounded-lg p-2 border border-sky-500/30">
                                    <div className="text-sky-300 text-xs font-bold">VERIFIED</div>
                                  </div>
                                </div>
                                
                                {/* Copyright overlay */}
                                <div className="absolute bottom-4 left-4 text-white/40 text-sm">
                                  © {new Date().getFullYear()} Dr. Michael Sitawa Mugah
                                </div>
                                
                                {/* Security warning */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <div className="text-white text-center">
                                      <div className="text-lg font-bold mb-2">PROTECTED DOCUMENT</div>
                                      <div className="text-sm opacity-80">Unauthorized copying or distribution is prohibited</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {/* Security overlay when dragging/zooming */}
                            {isDragging && (
                              <div className="absolute inset-0 bg-black/20 z-30 flex items-center justify-center">
                                <div className="text-white text-sm bg-black/50 px-4 py-2 rounded-lg">
                                  Dragging certificate...
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center p-6">
                              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-sky-500/20 to-navy-800/20 flex items-center justify-center">
                                <Award className="text-sky-400 w-10 h-10" />
                              </div>
                              <h4 className="text-xl font-bold text-white mb-2">
                                {selectedCertificate.title}
                              </h4>
                              <p className="text-gray-400">
                                {selectedCertificate.issuer}
                              </p>
                              <div className="mt-4 text-sm text-gray-500">
                                Issued: {selectedCertificate.date}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Navigation instructions */}
                        {showFullView && (
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
                            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                              <div className="text-white text-xs flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <span className="bg-gray-700 px-2 py-1 rounded">Scroll</span>
                                  <span>Zoom</span>
                                </span>
                                <span className="flex items-center gap-1">
                                  <span className="bg-gray-700 px-2 py-1 rounded">Drag</span>
                                  <span>Move</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Security footer */}
                      <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                              <Lock className="w-3 h-3 text-red-400" />
                            </div>
                            <span className="text-gray-300 text-sm">Protected against unauthorized use</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-sky-400" />
                            <span className="text-gray-300 text-sm">Multi-layer security active</span>
                          </div>
                        </div>
                      </div>
                    </div>
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