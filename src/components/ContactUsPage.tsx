'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    phone: ''
  });

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Validation functions
  const validateName = (name: string) => {
    if (name.length > 20) {
      return 'Name must be 20 characters or less';
    }
    return '';
  };

  const validatePhone = (phone: string) => {
    const phoneDigits = phone.replace(/\D/g, ''); // Remove non-digits
    if (phoneDigits.length !== 10) {
      return 'Phone number must be exactly 10 digits';
    }
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Apply validation based on field type
    let error = '';
    if (name === 'name') {
      error = validateName(value);
    } else if (name === 'phone') {
      error = validatePhone(value);
    }

    setValidationErrors(prev => ({
      ...prev,
      [name]: error
    }));

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    
    setValidationErrors({
      name: nameError,
      phone: phoneError
    });

    // Don't submit if there are validation errors
    if (nameError || phoneError) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
      setValidationErrors({
        name: '',
        phone: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone Number',
      details: ['+91 9315933509'],
      link: 'tel:+919315933509'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Address',
      details: ['rajasthanautodistributors@gmail.com'],
      link: 'mailto:rajasthanautodistributors@gmail.com'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Office Address',
      details: [
        '1073/5, Bara Bazar,',
        'opp G.N. Auto Market, Main Gate,',
        'Kashmere Gate, Delhi-6'
      ],
      link: 'https://maps.google.com'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 11:00 AM - 7:30 PM',
        'Sunday: Closed'
      ],
      link: null
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-[#262626] transition-colors duration-300">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-silver-100 to-white dark:from-[#2A2929] dark:to-[#262626] py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute top-10 left-[-100px] blur-[80px] rounded-full bg-red-500 dark:bg-red-600 w-[300px] h-[300px] opacity-20 dark:opacity-10"></div>
        <div className="absolute bottom-10 right-[-100px] blur-[80px] rounded-full bg-crimson-200 dark:bg-pink-500 w-[400px] h-[400px] opacity-20 dark:opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 font-roboto">
              Get in <span className="text-crimson-200">Touch</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dimgray dark:text-red-300 mb-8">
              Contact Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-3xl mx-auto leading-relaxed">
              Have questions about our automotive parts? Need assistance with your order? Our expert team is here to help you with all your automotive needs.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-20 bg-silver-100 dark:bg-[#2A2929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Contact <span className="text-crimson-200">Information</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
              Reach out to us through any of these channels. We&apos;re here to assist you with all your automotive needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-[#262626] rounded-[25px] p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-300 dark:border-red-500"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 rounded-full flex items-center justify-center mb-4 text-white">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-white text-sm">
                        {info.link && idx === 0 ? (
                          <a 
                            href={info.link} 
                            className="hover:text-crimson-200 transition-colors duration-200"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#262626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Send us a <span className="text-crimson-200">Message</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#262626] rounded-[25px] p-8 shadow-xl border border-gray-300 dark:border-red-500"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    Full Name 
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleInputChange}
                    maxLength={20}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-crimson-200 focus:border-transparent dark:bg-[#2A2929] dark:text-white transition-all duration-200 ${
                      validationErrors.name 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {validationErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">
                    {formData.name.length}/20 characters
                  </p>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                    maxLength={10}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-crimson-200 focus:border-transparent dark:bg-[#2A2929] dark:text-white transition-all duration-200 ${
                      validationErrors.phone 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Enter 10-digit phone number"
                  />
                  {validationErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message || ''}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-crimson-200 focus:border-transparent dark:bg-[#2A2929] dark:text-white transition-all duration-200 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 px-4 py-3 rounded-lg">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || !!validationErrors.name || !!validationErrors.phone}
                  className="bg-gradient-to-r from-crimson-200 to-crimson-300 hover:from-crimson-300 hover:to-crimson-400 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-crimson-200 focus:ring-offset-2 dark:focus:ring-offset-[#262626] text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      
      
      
    </div>
  );
};

export default ContactUsPage; 