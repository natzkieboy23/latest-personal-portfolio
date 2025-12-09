'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaCode,
  FaReact,
  FaDatabase,
  FaCloud,
  FaTools,
} from 'react-icons/fa';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaCode className="text-3xl" />,
      skills: [
        'JavaScript (ES6+)',
        'TypeScript',
        'SQL',
        'HTML5',
        'CSS3',
        'C#',
        '.NET',
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaReact className="text-3xl" />,
      skills: [
        'React.js',
        'React Native',
        'Expo',
        'Node.js',
        'Next.js',
        'Vite',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="text-3xl" />,
      skills: [
        'Firebase',
        'Supabase (PostgreSQL)',
        'MySQL',
        'MongoDB',
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaCloud className="text-3xl" />,
      skills: [
        'AWS (Rekognition)',
        'Dokploy',
        'Docker',
        'Google Cloud',
        'Vercel',
        'Git',
        'CI/CD',
      ],
    },
    {
      title: 'Tools & Methodologies',
      icon: <FaTools className="text-3xl" />,
      skills: [
        'AI Development Tools (Cursor, Claude, Gemini)',
        'Agile/Scrum',
        'RESTful APIs',
        'Responsive Design',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a dedicated <span className="font-semibold text-gray-900">Full Stack Developer</span> currently 
              leading a small technical team to build comprehensive mobile and web platforms. 
              I oversee the development of a client-facing mobile application and a separate 
              biometric payroll ecosystem, utilizing <span className="font-semibold text-gray-900">React</span>, {' '}
              <span className="font-semibold text-gray-900">React Native</span>, and {' '}
              <span className="font-semibold text-gray-900">Supabase</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My focus is on writing clean, maintainable code, mentoring developers, and 
              using cutting-edge tools like <span className="font-semibold text-gray-900">AWS</span> and {' '}
              <span className="font-semibold text-gray-900">AI development tools</span> to solve practical 
              problems efficiently. I believe in continuous learning and leveraging modern 
              technologies to deliver exceptional user experiences.
            </p>
            
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-500 mb-1">Age</p>
                <p className="text-lg font-semibold text-gray-900">30</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Nationality</p>
                <p className="text-lg font-semibold text-gray-900">Filipino</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="text-lg font-semibold text-gray-900">Davao City, Philippines</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Technical Proficiencies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">{category.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              Bachelor of Science in Information Technology
            </h4>
            <p className="text-lg text-gray-700 font-medium">
              University of Mindanao, Davao City
            </p>
            <p className="text-gray-600 mt-2">Graduated 2019</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

