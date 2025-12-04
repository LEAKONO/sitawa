import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { contactInfo, socialLinks } from '../../utils/constants';
import SectionTitle from '../shared/SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's discuss opportunities for collaboration"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Interested in research collaboration, consulting opportunities, 
              or academic partnerships? Reach out to discuss how we can work together.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.type}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    {info.type === 'email' && <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />}
                    {info.type === 'phone' && <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />}
                    {info.type === 'location' && <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {info.label}
                    </h4>
                    <a
                      href={info.href}
                      className="text-gray-600 dark:text-gray-400 text-sm sm:text-base hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-3 sm:mb-4">
                Connect on Social Media
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-morphism flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-lg transition-all"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-morphism rounded-2xl p-4 sm:p-6 lg:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <CheckCircle className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    Thank you for your message. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all text-sm sm:text-base"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all text-sm sm:text-base resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 sm:mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;