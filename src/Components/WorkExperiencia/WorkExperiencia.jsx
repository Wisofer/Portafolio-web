import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronDown, ChevronUp, Building } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    year: 'Marzo 2024 - Presente',
    position: 'Desarrollador Full Stack',
    company: 'UNFLEP, Nicaragua',
    responsibilities: [
      'Desarrollo y mantenimiento de aplicaciones web para mejorar la gestión de la información en la universidad.',
      'Implementación de soluciones tecnológicas innovadoras para optimizar el flujo de trabajo interno.',
      'Coordinación con equipos multidisciplinarios para integrar nuevas funcionalidades en los sistemas existentes.',
    ],
  },
  {
    id: 2,
    year: 'Julio 2023 - Diciembre 2023',
    position: 'Programador Full Stack',
    company: 'UNAN-León, Nicaragua',
    responsibilities: [
      'Diseño y desarrollo de aplicaciones web para proyectos académicos y administrativos.',
      'Colaboración con equipos de investigación para automatizar procesos y mejorar la eficiencia en la gestión de datos.',
      'Implementación de sistemas de autenticación segura y manejo de usuarios.',
    ],
  },
  {
    id: 3,
    year: 'Febrero 2022 - Febrero 2023',
    position: 'Desarrollador Full Stack',
    company: 'Accenture, Nicaragua (Trabajo Híbrido)',
    responsibilities: [
      'Lideré un equipo de 6 desarrolladores frontend y 4 desarrolladores backend en proyectos de alto impacto.',
      'Diseñé arquitecturas escalables para aplicaciones web complejas, asegurando un rendimiento óptimo y la capacidad de manejar altos volúmenes de tráfico.',
      'Implementé prácticas ágiles para mejorar la eficiencia del equipo y reducir el tiempo de entrega de proyectos en un 20%.',
      'Supervisé la integración de API y servicios de terceros para mejorar la funcionalidad y conectividad de las aplicaciones.',
    ],
  },
  {
    id: 4,
    year: 'Mayo 2021 - Noviembre 2021',
    position: 'Programador Web (Remoto)',
    company: 'Tech Innovators, Estados Unidos',
    responsibilities: [
      'Desarrollo de interfaces: Creé y mantuve aplicaciones web centradas en la mejora de la experiencia de usuario, asegurando que las vistas fueran visualmente atractivas y funcionales.',
      'Optimización de rendimiento: Implementé loaders personalizados y técnicas de carga diferida para mejorar el tiempo de carga de las páginas, garantizando una navegación fluida.',
      'Interactividad y feedback visual: Añadí efectos de transición, animaciones y feedback visual para mejorar la interactividad y hacer la experiencia de usuario más dinámica y atractiva.',
    ],
  },
];

function WorkExperiencia() {
  const [visibleResponsibilities, setVisibleResponsibilities] = useState({});

  const toggleResponsibilities = (id) => {
    setVisibleResponsibilities((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section id="experiencia" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#020420] to-[#03072b]">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text px-4"
      >
        Experiencia Laboral
      </motion.h3>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {workExperience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4 sm:mb-6 lg:mb-8"
          >
            <div className="backdrop-blur-lg bg-white/5 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-blue-500/20">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                    {job.position}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-300 mt-1">
                    <Building className="w-4 h-4" />
                    <span className="text-sm sm:text-base">{job.company}</span>
                  </div>
                  <p className="text-blue-400/80 text-xs sm:text-sm mt-1">{job.year}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleResponsibilities(job.id)}
                  className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
                >
                  {visibleResponsibilities[job.id] ? 
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" /> : 
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  }
                </motion.button>
              </div>
              {visibleResponsibilities[job.id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-3"
                >
                  {job.responsibilities.map((responsibility, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-start gap-2 sm:gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                      <p className="text-sm sm:text-base">{responsibility}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperiencia;
