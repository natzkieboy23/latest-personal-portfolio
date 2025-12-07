'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences: ExperienceItem[] = [
    {
      company: 'Comptrolla Technologies Inc.',
      role: 'Full Stack Developer',
      duration: 'October 2023 – Present',
      location: 'Davao City',
      current: true,
      responsibilities: [
        'Leading a technical team of 3 (1 Backend, 2 Frontend Developers), managing code reviews, architectural decisions, and sprint planning',
        'Developing a cross-platform mobile application using React Native, ensuring a smooth user experience for end-users',
        'Built a responsive management dashboard using React.js, Vite, and TypeScript',
        'Integrated Firebase SDK for secure authentication and real-time database syncing across both mobile and web',
        'Creating a scalable Payroll application using React.js and TypeScript',
        'Engineering a Facial Recognition Attendance App using React Native (Expo)',
        'Architecting a serverless backend with Supabase (Auth/Edge Functions) and implementing AWS Rekognition for identity verification',
        'Managed RESTful API deployment in Dokploy Containers and improved development speed by integrating AI tools into the team\'s debugging workflow',
      ],
      technologies: [
        'React.js',
        'React Native',
        'Expo',
        'TypeScript',
        'Firebase',
        'Supabase',
        'AWS Rekognition',
        'Dokploy',
        'Docker',
        'Vite',
      ],
    },
    {
      company: 'Saint Paul Consulting Group',
      role: 'Full Stack Developer',
      duration: 'June 2019 – October 2023',
      location: 'Davao City',
      responsibilities: [
        'Engineered and deployed robust, scalable web applications for a diverse range of clients, contributing to a 20% increase in client satisfaction',
        'Developed and integrated third-party systems including a Warehouse Management System, Point-of-Sale (POS), and a Voucher System, connecting them with QuickBooks Enterprise Desktop 2012 using C# WinForms PL and MySQL',
        'Developed both client-side and server-side architecture, implementing responsive user interfaces and efficient backend logic',
        'Designed and managed databases, ensuring data integrity and optimal performance',
        'Collaborated closely with project managers and clients to gather requirements, provide technical insights, and deliver solutions that met business needs',
        'Wrote clean, well-documented code and conducted peer code reviews to maintain high-quality standards',
      ],
      technologies: [
        'C#',
        '.NET',
        'WinForms',
        'MySQL',
        'JavaScript',
        'HTML5',
        'CSS3',
        'QuickBooks Integration',
        'REST APIs',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    exp.current 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg' 
                      : 'bg-white border-4 border-blue-300'
                  }`}>
                    <FaBriefcase className={`text-2xl ${exp.current ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-xl text-blue-600 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <FaCalendar className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex">
                          <span className="text-blue-600 mr-3 mt-1">•</span>
                          <span className="text-gray-700 leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

