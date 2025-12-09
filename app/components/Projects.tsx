'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Outsourcee Mobile App',
      description: 'Comprehensive mobile platform connecting businesses with skilled freelancers and outsourcing services',
      longDescription:
        'Developed a full-featured mobile application for Outsourcee, streamlining the outsourcing process. The app facilitates seamless connections between businesses and service providers, featuring real-time messaging, project management, secure payments, and user ratings.',
      technologies: ['React Native', 'Expo', 'Firebase SDK', 'Google Maps API', 'Paymongo Payment Gateway'],
      category: 'Mobile',
      featured: true,
      liveUrl: 'https://outsourcee.app/',
    },
    {
      id: 2,
      title: 'Facial Recognition Attendance System',
      description: 'AI-powered mobile attendance app using facial recognition for identity verification',
      longDescription:
        'Built a comprehensive facial recognition attendance system using React Native and AWS Rekognition. The app provides real-time identity verification and attendance tracking.',
      technologies: ['React Native', 'Expo', 'AWS Rekognition', 'Supabase', 'TypeScript'],
      category: 'Mobile',
      featured: true,
    },
    {
      id: 3,
      title: 'Payroll Management Platform',
      description: 'Scalable web-based payroll system for HR management and employee compensation',
      longDescription:
        'Developed a full-featured payroll application with automated calculations, tax management, and reporting capabilities. Integrated with biometric attendance systems.',
      technologies: ['React.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
      category: 'Web',
      featured: true,
      liveUrl: 'https://marcbilt-payroll-web-app.vercel.app/',
    },
    {
      id: 4,
      title: 'Point of Sale for Pharmacy',
      description: 'Modern desktop POS system built with React and Rust, specifically designed for pharmacy operations',
      longDescription:
        'Developed a high-performance desktop POS application for pharmacy management using Tauri framework. Features include prescription management, inventory control, sales tracking, and compliance reporting. The app combines the power of Rust backend with modern React frontend for optimal performance.',
      technologies: ['React.js', 'Vite', 'Rust', 'Tauri', 'TypeScript'],
      category: 'Desktop',
      featured: true,
    },
  ];

  const categories = ['All', 'Mobile', 'Web', 'Desktop'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in mobile and web development, featuring modern
            technologies and best practices.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${
                project.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-48 bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                <FaCode className="text-6xl text-white/30" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                    >
                      <FaGithub className="text-lg" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      Live Demo
                    </a>
                  )}
                  {!project.githubUrl && !project.liveUrl && (
                    <span className="text-gray-400 text-sm italic">
                      Proprietary Project
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            * Some projects are under NDA and cannot be publicly displayed. Links
            available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

