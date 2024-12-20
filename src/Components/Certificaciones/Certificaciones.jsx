import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, X, ExternalLink } from 'lucide-react';

const certifications = [
  { id: 2, name: 'Hackatón Nicaragua', year: 2024, image: '/img/2.png' },
  { id: 3, name: 'Rally Latinoamericano', year: 2024, image: '/img/3.jpg' },
  { id: 4, name: 'HTML eCommerce into React.js', year: 2023, image: '/img/4.jpg' },
  { id: 5, name: 'Glosario de Marketing Digital', year: 2023, image: '/img/5.png' },
  { id: 6, name: 'Curso de Excel Avanzado', year: 2022, image: '/img/6.jpg' },
  { id: 7, name: 'Reparación y Mantenimiento de Computadoras', year: 2022, image: '/img/7.jpg' },
  { id: 8, name: 'Sistemas Operativos', year: 2022, image: '/img/8.jpg' },
  { id: 1, name: 'Responsive Web Design - FreeCodeCamp', year: 2019, image: '/img/1.png' },
  { id: 9, name: 'Primer Lugar en Concurso de Aplicaciones Móviles Departamental', year: 2018, image: '/img/9.jpg' },
  { id: 10, name: 'Competencias Digitales', year: 2018, image: '/img/10.jpg' },
];

function Certificaciones() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="certificaciones" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#020420] to-[#03072b]">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text px-4"
      >
        Certificaciones
      </motion.h3>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, borderColor: 'rgb(59, 130, 246)' }}
            className="backdrop-blur-lg bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
            onClick={() => openModal(cert)}
          >
            <div className="relative">
              <img 
                src={cert.image} 
                alt={`${cert.name} Certificate`} 
                className="w-full h-36 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {cert.name}
                </h4>
              </div>
              <p className="text-gray-400 flex items-center gap-2">
                <span className="px-2 sm:px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs sm:text-sm">
                  {cert.year}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-r from-[#020420] to-[#03072b] p-4 sm:p-6 rounded-xl sm:rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-2xl border border-white/10 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-white pr-4">{selectedCert.name}</h4>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="relative group">
              <img 
                src={selectedCert.image} 
                alt={`${selectedCert.name} Certificate`} 
                className="w-full rounded-lg sm:rounded-xl shadow-lg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-blue-400 font-semibold text-sm sm:text-base">{selectedCert.year}</p>
              <button 
                onClick={closeModal} 
                className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <span>Ver Certificado</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Certificaciones;
