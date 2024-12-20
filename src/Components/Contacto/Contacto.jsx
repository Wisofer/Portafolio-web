import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Github, User, MessageSquare } from 'lucide-react';

function Contacto() {
  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#020420] to-[#03072b]">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text px-4"
      >
        Contáctame
      </motion.h3>
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] backdrop-blur-lg bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300"
        >
          <form className="space-y-4 sm:space-y-6">
            <div className="group">
              <div className="flex items-center space-x-2 mb-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <label htmlFor="name" className="text-base sm:text-lg text-gray-300">Nombre</label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-white text-sm sm:text-base"
                required
              />
            </div>

            <div className="group">
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <label htmlFor="email" className="text-base sm:text-lg text-gray-300">Email</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-white text-sm sm:text-base"
                required
              />
            </div>

            <div className="group">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <label htmlFor="message" className="text-base sm:text-lg text-gray-300">Mensaje</label>
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-white text-sm sm:text-base"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-base sm:text-lg transition-all duration-300 hover:opacity-90 shadow-lg shadow-blue-500/25"
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] backdrop-blur-lg bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300"
        >
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-base sm:text-lg text-gray-300">+505 81539569</span>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-base sm:text-lg text-gray-300 break-all">wisofer17@gmail.com</span>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-base sm:text-lg text-gray-300">Managua, Esteli</span>
            </motion.div>

            <motion.a
              href="https://www.linkedin.com/in/william-borge-450798201/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-base sm:text-lg text-gray-300">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/Wisofer"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-base sm:text-lg text-gray-300">GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contacto;
