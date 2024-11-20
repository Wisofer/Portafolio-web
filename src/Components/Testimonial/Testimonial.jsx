import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Juan Pérez', text: 'Un desarrollador excepcional. Entregó nuestro proyecto antes de tiempo y superó todas nuestras expectativas.' },
  { id: 2, name: 'Lucía Fernández', text: 'Su habilidad para resolver problemas complejos y su atención al detalle son impresionantes. Altamente recomendado.' },
  { id: 3, name: 'Miguel López', text: 'Trabajar con este profesional fue una experiencia fantástica. Comunicación clara y resultados excepcionales.' },
];

function Testimonial() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', text: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para guardar el nuevo testimonio
    console.log('Nuevo Testimonio:', newTestimonial);
    setIsModalOpen(false);
  };

  return (
    <section id="testimonios" className="py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Testimonios de Clientes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg"
          >
            <User className="w-12 h-12 mb-4 text-blue-400 mx-auto" />
            <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
            <div className="flex items-center justify-center">
              <div>
                <p className="font-semibold text-center">{testimonial.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Agregar Reseña
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h4 className="text-2xl mb-4">Agregar Reseña</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={newTestimonial.name}
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded"
                required
              />
              <textarea
                name="text"
                placeholder="Texto"
                value={newTestimonial.text}
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded"
                required
              />
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Enviar
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonial;
