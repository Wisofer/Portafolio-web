import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Rocket, Database, Globe } from 'lucide-react'

const projects = [
  { 
    id: 1, 
    title: 'AgroSalud', 
    description: 'Plataforma integral para brindar servicios veterinarios y herramientas de gestión enfocadas en el bienestar y la productividad de los animales de granja.',
    technologies: ['React.js', 'Tailwind CSS', 'Supabase'],
    icon: Globe,
    link: 'https://agrosalud.es/'
  },
  {
    id: 2,
    title: 'COWIB',
    description: 'Plataforma empresarial especializada en desarrollo full stack y soluciones tecnológicas avanzadas. Ofrecemos servicios de desarrollo web, aplicaciones empresariales y consultoría técnica.',
    technologies: ['React', 'Tailwind CSS', 'AWS', 'Debian', '.NET'],
    icon: Code,
    link: 'http://cowib.es/'
  },
  { 
    id: 3, 
    title: 'E-commerce Mobile', 
    description: 'Creación de una aplicación móvil de comercio electrónico con funcionalidades avanzadas.',
    technologies: ['React Native', 'Redux', 'Firebase'],
    icon: Rocket
  }
]

function Proyectos() {
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <section id="proyectos" className="py-10 sm:py-20 bg-gradient-to-r from-[#020420] to-[#03072b]">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text px-4"
      >
        Proyectos Destacados
      </motion.h3>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            className="backdrop-blur-lg bg-white/5 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300"
            style={{
              height: expandedProject === project.id ? 'auto' : '300px',
              minHeight: '280px'
            }}
          >
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <project.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                  {project.title}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-1 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium shadow-lg shadow-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {expandedProject === project.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 sm:p-6 lg:p-8 border-t border-white/10 bg-gradient-to-b from-blue-900/50 to-[#020420]/50"
              >
                <h5 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-300">Detalles del Proyecto</h5>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  Este proyecto demuestra mis habilidades en diseño de interfaces, arquitectura de software y
                  optimización de rendimiento. Implementé características avanzadas como autenticación segura,
                  integración con APIs externas y análisis de datos en tiempo real.
                </p>
                <motion.a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white text-sm sm:text-base font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300"
                >
                  Ver Proyecto
                </motion.a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Proyectos
