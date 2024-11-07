import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import crop from "../../../public/img/crop.jpeg"

function Layouts({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700 text-white font-montserrat">
      <header className="p-4 md:p-6 flex justify-between items-center backdrop-blur-md bg-black bg-opacity-30 fixed w-full z-10">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img src={crop} alt="Logo" className="w-12 h-12 mr-2 rounded-full" />
          </motion.div>
        </motion.h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['Inicio', 'Proyectos', 'Habilidades', 'Experiencia', 'Testimonios', 'Blog', 'Contacto'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-300 transition-colors text-lg font-semibold">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          {isMenuOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md z-20 md:hidden"
          >
            <ul className="flex flex-col items-center py-4">
              {['Inicio', 'Proyectos', 'Habilidades', 'Experiencia', 'Testimonios', 'Blog', 'Contacto'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="my-2"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-semibold hover:text-blue-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Layouts;
