import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Benjie Nonato</h3>
            <p className="text-gray-400">
              Full Stack Developer specializing in React, React Native, and cloud technologies.
              Leading teams to build innovative mobile and web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-400 hover:text-white transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-500" />
                <a
                  href="mailto:benjiepersonal1095@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  benjiepersonal1095@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-500" />
                <a
                  href="tel:+639566122219"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +63-956-612-2219
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-3 text-blue-500" />
                <a
                  href="https://www.linkedin.com/in/benjiedev95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} Benjie Nonato. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

