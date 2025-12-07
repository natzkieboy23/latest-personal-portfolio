'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials: Testimonial[] = [
    {
      quote:
        'Benjie is an exceptional developer who consistently delivers high-quality work. His leadership skills and technical expertise have been invaluable to our team. He has a unique ability to break down complex problems and guide the team toward elegant solutions.',
      author: 'John Smith',
      role: 'CTO',
      company: 'Tech Solutions Inc.',
    },
    {
      quote:
        'Working with Benjie has been a great experience. His knowledge of React Native and modern web technologies is impressive, and he always goes the extra mile to ensure project success. His mentorship has significantly improved our team\'s capabilities.',
      author: 'Maria Garcia',
      role: 'Project Manager',
      company: 'Digital Innovations',
    },
    {
      quote:
        'Benjie\'s attention to detail and commitment to clean code makes him stand out. He has successfully led our team through multiple challenging projects, always maintaining high standards and meeting deadlines. His integration of AI tools has revolutionized our workflow.',
      author: 'David Chen',
      role: 'Senior Developer',
      company: 'CloudTech Systems',
    },
    {
      quote:
        'His expertise in full-stack development, particularly with React and Node.js, has been instrumental in building our platform. Benjie is not just a great developer but also an excellent team leader who knows how to bring out the best in people.',
      author: 'Sarah Johnson',
      role: 'Product Owner',
      company: 'StartUp Ventures',
    },
    {
      quote:
        'Benjie transformed our development process by introducing modern practices and tools. His ability to architect scalable solutions while mentoring junior developers is remarkable. He\'s the kind of developer every team needs.',
      author: 'Robert Lee',
      role: 'Engineering Manager',
      company: 'Enterprise Solutions',
    },
    {
      quote:
        'His proficiency with AWS, Supabase, and modern development tools has helped us build a robust and scalable application. Benjie is proactive, solution-oriented, and always stays updated with the latest technologies.',
      author: 'Emily Davis',
      role: 'Tech Lead',
      company: 'Mobile First Co.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-3xl text-blue-500 opacity-50" />
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-200">
                <p className="font-bold text-gray-900 text-lg">
                  {testimonial.author}
                </p>
                <p className="text-blue-600 font-semibold">
                  {testimonial.role}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note for updating testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            * These are placeholder testimonials. Update with actual recommendations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

