import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <section className="py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Experiencia Laboral</h3>
      <div className="max-w-3xl mx-auto">
        {workExperience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 flex"
          >
            <div className="mr-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-0.5 h-full bg-blue-500 ml-2"></div>
            </div>
            <div>
              <h4 className="text-xl font-semibold">{job.position}</h4>
              <p className="text-blue-300">{job.company}</p>
              <p className="text-gray-400">{job.year}</p>
              <button
                onClick={() => toggleResponsibilities(job.id)}
                className="text-blue-500 mt-2"
              >
                {visibleResponsibilities[job.id] ? 'Ocultar Detalles' : 'Mostrar Detalles'}
              </button>
              {visibleResponsibilities[job.id] && (
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperiencia;
