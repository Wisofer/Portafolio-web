import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, name: 'María García', company: 'TechCorp', text: 'Un desarrollador excepcional. Entregó nuestro proyecto antes de tiempo y superó todas nuestras expectativas.' },
  { id: 2, name: 'Carlos Rodríguez', company: 'InnovaSoft', text: 'Su habilidad para resolver problemas complejos y su atención al detalle son impresionantes. Altamente recomendado.' },
  { id: 3, name: 'Ana Martínez', company: 'DataPro', text: 'Trabajar con este profesional fue una experiencia fantástica. Comunicación clara y resultados excepcionales.' },
];

function Testimonial() {
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
            className="bg-white bg-opacity-10 p-6 rounded-xl"
          >
            <p className="text-lg mb-4">"{testimonial.text}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-300">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
