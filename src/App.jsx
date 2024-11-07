import Layouts from './Components/Layouts/Layouts'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Code, Database, Globe, Layers, Mail, Smartphone, Star, Calendar, Book, Award } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import Proyectos from './Components/Proyectos/Proyectos'
import Habilidades from './Components/Habilidades/Habilidades'
import Experiencia from './Components/Experiencia/Experiencia'
import Testimonial from './Components/Testimonial/Testimonial'
import WorkExperiencia from './Components/WorkExperiencia/WorkExperiencia'
import Certificaciones from './Components/Certificaciones/Certificaciones'
import Blog from './Components/Blog/Blog'
import Contacto from './Components/Contacto/Contacto'


function Bienvenida() {
  const [expandedProject, setExpandedProject] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700 text-white font-montserrat">
      <Layouts />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Desarrollador Full Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            Creando experiencias digitales innovadoras y soluciones tecnológicas de vanguardia.
          </motion.p>
          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
          >
            Ver Proyectos
          </motion.a>
        </section>

        <Proyectos />
        <Habilidades />
        <Experiencia />
        <Testimonial />
        <WorkExperiencia />
        <Certificaciones />
        <Blog />
        <Contacto />
      </main>

      <footer className="bg-black bg-opacity-30 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">&copy; 2024 Mi Portafolio Pro. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Code className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Star className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Bienvenida