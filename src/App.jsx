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
import HeroBanner from './Components/HeroBanner/HeroBanner'

function Bienvenida() {
  const [expandedProject, setExpandedProject] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700 text-white font-montserrat">
      <Layouts />
      <main className="w-full">
        <section id="inicio" className="w-full">
          <HeroBanner />
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

      <footer className="bg-black bg-opacity-30 backdrop-blur-md py-4 sm:py-6 md:py-8 w-full">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base sm:text-lg mb-2 sm:mb-4">&copy; 2024 Mi Portafolio Pro. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              <Code className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              <Star className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Bienvenida