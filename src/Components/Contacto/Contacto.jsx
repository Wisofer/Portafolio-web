import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Github, User, MessageSquare } from 'lucide-react';

function Contacto() {
  return (
    <section id="contacto" className="py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Contáctame</h3>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <form className="space-y-6">
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6 text-blue-500" />
              <label htmlFor="name" className="block text-lg mb-2">Nombre</label>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <div className="flex items-center space-x-2">
              <Mail className="w-6 h-6 text-blue-500" />
              <label htmlFor="email" className="block text-lg mb-2">Email</label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              <label htmlFor="message" className="block text-lg mb-2">Mensaje</label>
            </div>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors"
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-6 md:pl-8">
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-blue-500" />
            <span className="text-lg">+505 81539569</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-500" />
            <span className="text-lg">wisofer17@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-blue-500" />
            <span className="text-lg">Managua, Esteli</span>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin className="w-6 h-6 text-blue-500" />
            <a href="https://www.linkedin.com/in/william-borge-450798201/" className="text-lg hover:underline flex items-center">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Github className="w-6 h-6 text-blue-500" />
            <a href="https://github.com/Wisofer" className="text-lg hover:underline flex items-center">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
