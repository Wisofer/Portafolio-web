import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, X } from 'lucide-react';

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
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className="py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Certificaciones</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-10 p-6 rounded-xl text-center cursor-pointer"
            onClick={() => openModal(cert)}
          >
            <img src={cert.image} alt={`${cert.name} Certificate`} className="w-full h-48 object-cover mb-4 rounded-md" />
            <Award className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h4 className="text-lg font-semibold">{cert.name}</h4>
            <p className="text-gray-300">{cert.year}</p>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg transform transition-all duration-300 ease-in-out">
            <button onClick={closeModal} className="text-black float-right mb-2 hover:text-red-500 transition-colors duration-200">
              <X className="w-6 h-6" />
            </button>
            <img src={selectedCert.image} alt={`${selectedCert.name} Certificate`} className="w-full h-auto mb-4 rounded-md" />
            <h4 className="text-xl font-bold text-center mb-2">{selectedCert.name}</h4>
            <p className="text-center text-gray-500 mb-4">{selectedCert.year}</p>
            <div className="flex justify-center">
              <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificaciones;
