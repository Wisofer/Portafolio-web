import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronDown, ChevronUp, Building } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    year: 'Junio 2024 - Presente',
    position: 'Fundador & Desarrollador Full Stack',
    company: 'Cowib (Startup), Nicaragua',
    responsibilities: [
      'Creacion y mantenimiento de aplicaciones web y moviles para clientes nacionales e internacionales.',
      'Desarrollo de Telcmax, sistema integral de ventas para gestionar abonos, facturacion, impresion y comparticion via WhatsApp.',
      'Desarrollo de Awbox, plataforma para cotizar, rastrear y gestionar pedidos en tiendas como Amazon, Shein, eBay y AliExpress.',
      'Diseno de sitios web y segmentacion de campanas digitales para potenciar la presencia en linea de los clientes.',
    ],
  },
  {
    id: 2,
    year: 'Enero 2025 - Septiembre 2025',
    position: 'Desarrollador Full Stack',
    company: 'CosechaPartners, Nicaragua',
    responsibilities: [
      'Optimizacion de recursos tecnologicos para entregar soluciones eficientes y escalables sin comprometer calidad.',
      'Diseno e implementacion de interfaces intuitivas para mejorar la experiencia del usuario en web y movil.',
      'Desarrollo de dashboards interactivos para visualizacion de datos en tiempo real y toma de decisiones.',
      'Creacion y mantenimiento de aplicaciones web y moviles con enfoque en rendimiento y compatibilidad multiplataforma.',
    ],
  },
  {
    id: 3,
    year: 'Marzo 2024 - Enero 2025',
    position: 'Desarrollador Full Stack',
    company: 'UNFLEP, Nicaragua',
    responsibilities: [
      'Desarrollo y mantenimiento de aplicaciones web para mejorar la gestion de la informacion en la universidad.',
      'Implementacion de soluciones tecnologicas innovadoras para optimizar el flujo de trabajo interno.',
      'Coordinacion con equipos multidisciplinarios para integrar nuevas funcionalidades en los sistemas existentes.',
    ],
  },
  {
    id: 4,
    year: 'Julio 2023 - Diciembre 2023',
    position: 'Programador Full Stack',
    company: 'UNAN-Leon, Nicaragua',
    responsibilities: [
      'Diseno y desarrollo de aplicaciones web para proyectos academicos y administrativos.',
      'Colaboracion con equipos de investigacion para automatizar procesos y mejorar la eficiencia en la gestion de datos.',
      'Implementacion de sistemas de autenticacion segura y manejo de usuarios.',
    ],
  },
  {
    id: 5,
    year: 'Febrero 2022 - Febrero 2023',
    position: 'Desarrollador Full Stack',
    company: 'Accenture, Nicaragua (Trabajo Hibrido)',
    responsibilities: [
      'Lidere un equipo de 6 desarrolladores frontend y 4 desarrolladores backend en proyectos de alto impacto.',
      'Disene arquitecturas escalables para aplicaciones web complejas, asegurando rendimiento optimo en alto trafico.',
      'Implemente practicas agiles para mejorar la eficiencia del equipo y reducir tiempos de entrega.',
      'Supervise integraciones con APIs y servicios de terceros para mejorar funcionalidad y conectividad.',
    ],
  },
  {
    id: 6,
    year: 'Mayo 2021 - Noviembre 2021',
    position: 'Programador Web (Remoto)',
    company: 'Tech Innovators, Estados Unidos',
    responsibilities: [
      'Cree y mantuve interfaces web enfocadas en experiencia de usuario, claridad visual y usabilidad.',
      'Implemente optimizaciones de rendimiento con carga diferida y mejoras de tiempos de respuesta.',
      'Anadi transiciones, animaciones y feedback visual para una experiencia mas dinamica y profesional.',
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
