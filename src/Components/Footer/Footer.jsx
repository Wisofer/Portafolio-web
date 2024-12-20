import { motion } from 'framer-motion'
import { Code, Star, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#020420] to-[#03072b] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center py-8">
        <p className="text-base text-gray-300">&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/Wisofer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <Code className="w-6 h-6" />
          </a>
          <a href="mailto:wisofer17@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/william-borge-450798201/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <Star className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;