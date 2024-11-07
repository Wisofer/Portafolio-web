import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Aplicación Web Empresarial', description: 'Desarrollo de una aplicación web completa para gestión de recursos empresariales.', technologies: ['React', 'Node.js', 'PostgreSQL'] },
  { id: 2, title: 'E-commerce Mobile', description: 'Creación de una aplicación móvil de comercio electrónico con funcionalidades avanzadas.', technologies: ['React Native', 'Redux', 'Firebase'] },
  { id: 3, title: 'Plataforma de Análisis de Datos', description: 'Diseño e implementación de una plataforma de análisis de datos en tiempo real.', technologies: ['Python', 'TensorFlow', 'AWS'] },
]

function Proyectos() {
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <section id="proyectos" className="py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Proyectos Destacados</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            className="bg-white bg-opacity-10 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {expandedProject === project.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 bg-blue-900 bg-opacity-50"
              >
                <h5 className="text-xl font-semibold mb-2">Detalles del Proyecto</h5>
                <p className="mb-4">
                  Este proyecto demuestra mis habilidades en diseño de interfaces, arquitectura de software y
                  optimización de rendimiento. Implementé características avanzadas como autenticación segura,
                  integración con APIs externas y análisis de datos en tiempo real.
                </p>
                <a
                  href="#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Ver Proyecto
                </a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Proyectos
