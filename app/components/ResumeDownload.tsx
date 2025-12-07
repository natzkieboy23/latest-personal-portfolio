'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaDownload, FaFileAlt, FaEnvelope } from 'react-icons/fa';

export default function ResumeDownload() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Resume.docx';
    link.download = 'Benjie-Nonato-Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <FaFileAlt className="text-4xl text-blue-600" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Download My Resume
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a comprehensive overview of my professional experience, technical skills, 
            and educational background.
          </p>

          {/* Download Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={handleDownloadResume}
            className="px-10 py-5 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center gap-3 mb-8"
          >
            <FaDownload className="text-xl" />
            Download Resume (DOCX)
          </motion.button>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-blue-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex flex-col items-center">
                <FaEnvelope className="text-3xl mb-2 text-blue-200" />
                <p className="text-sm text-blue-200 mb-1">Email</p>
                <a
                  href="mailto:benjiepersonal1095@gmail.com"
                  className="font-semibold hover:text-blue-200 transition-colors"
                >
                  benjiepersonal1095@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-2 text-blue-200">📞</div>
                <p className="text-sm text-blue-200 mb-1">Phone</p>
                <a
                  href="tel:+639566122219"
                  className="font-semibold hover:text-blue-200 transition-colors"
                >
                  +63-956-612-2219
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-2 text-blue-200">📍</div>
                <p className="text-sm text-blue-200 mb-1">Location</p>
                <p className="font-semibold">Davao City, Philippines</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

