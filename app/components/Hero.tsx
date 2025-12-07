'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Resume.docx';
    link.download = 'Benjie-Nonato-Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20">
              <Image
                src="/images/profile.jpg"
                alt="Benjie Nonato - Full Stack Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, 192px"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Benjie Nonato
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl text-blue-600 font-semibold mb-6"
          >
            Full Stack Developer & Team Leader
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed"
          >
            Leading teams to build comprehensive mobile and web platforms using{' '}
            <span className="font-semibold text-gray-900">React</span>,{' '}
            <span className="font-semibold text-gray-900">React Native</span>,{' '}
            <span className="font-semibold text-gray-900">Supabase</span>, and{' '}
            <span className="font-semibold text-gray-900">AWS</span>.
            Passionate about clean code, mentoring developers, and leveraging AI tools 
            to solve practical problems efficiently.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={handleScrollToAbout}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaDownload />
              Download Resume
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer"
              onClick={handleScrollToAbout}
            >
              <FaArrowDown className="text-3xl text-gray-400 hover:text-blue-600 transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

