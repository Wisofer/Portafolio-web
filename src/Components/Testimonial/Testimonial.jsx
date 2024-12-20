import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Star, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Juan Pérez', role: 'CEO Tech Solutions', text: 'Un desarrollador excepcional. Entregó nuestro proyecto antes de tiempo y superó todas nuestras expectativas.', rating: 5 },
  { id: 2, name: 'Lucía Fernández', role: 'Directora de Innovación', text: 'Su habilidad para resolver problemas complejos y su atención al detalle son impresionantes. Altamente recomendado.', rating: 5 },
  { id: 3, name: 'Miguel López', role: 'Project Manager', text: 'Trabajar con este profesional fue una experiencia fantástica. Comunicación clara y resultados excepcionales.', rating: 5 },
];

function Testimonial() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', role: '', text: '', rating: 5 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo Testimonio:', newTestimonial);
    setIsModalOpen(false);
  };

  return (
    <section id="testimonios" className="py-12 sm:py-20 bg-gradient-to-r from-[#020420] to-[#03072b] px-4">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
      >
        Testimonios de Clientes
      </motion.h3>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="backdrop-blur-lg bg-white/5 p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="relative">
              <Quote className="w-8 sm:w-12 h-8 sm:h-12 text-blue-400/20 absolute -top-2 -left-2" />
              <div className="mb-4 sm:mb-6">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1">
                      <div className="w-full h-full rounded-full bg-[#020420] flex items-center justify-center">
                        <User className="w-8 sm:w-10 h-8 sm:h-10 text-blue-400" />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1">
                      <Star className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="white" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-300 text-center leading-relaxed">"{testimonial.text}"</p>
              <div className="text-center">
                <p className="font-semibold text-white text-lg sm:text-xl mb-1">{testimonial.name}</p>
                <p className="text-blue-400 text-xs sm:text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mt-8 sm:mt-12"
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
        >
          Compartir tu Experiencia
        </button>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-r from-[#020420] to-[#03072b] p-4 sm:p-8 rounded-2xl border border-white/10 shadow-2xl w-full max-w-md"
          >
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Compartir Testimonio</h4>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={newTestimonial.name}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none text-white text-sm sm:text-base"
                required
              />
              <input
                type="text"
                name="role"
                placeholder="Tu cargo"
                value={newTestimonial.role}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none text-white text-sm sm:text-base"
                required
              />
              <textarea
                name="text"
                placeholder="Tu experiencia"
                value={newTestimonial.text}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none text-white min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                required
              />
              <div className="flex gap-3 sm:gap-4">
                <button 
                  type="submit" 
                  className="flex-1 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Testimonial;
