import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  { 
    id: 1, 
    title: 'Dominando React Hooks: Una Guía Completa',
    description: 'Sumérgete en el poder de React Hooks y aprende cómo aprovecharlos para construir aplicaciones web complejas y dinámicas.',
    date: '5 de diciembre, 2024',
    link: 'http://cowib.es/blog/react-hooks-guia-completa-desarrollo-web-moderno-javascript-frontend-2024'
  },
  { 
    id: 2, 
    title: 'Construyendo un Backend Escalable con Node.js',
    description: 'Aprende cómo construir un backend escalable y eficiente utilizando Node.js y frameworks populares como Express.',
    date: '5 de diciembre, 2024',
    link: 'http://cowib.es/blog/node-js-backend-desarrollo-aplicaciones-web-escalables-servidor-express-2024'
  },
  { 
    id: 3, 
    title: 'Top 10 Consejos para Codificar Eficientemente en Python',
    description: 'Mejora tus habilidades de codificación con estos 10 consejos para escribir código Python eficiente y limpio.',
    date: '5 de diciembre, 2024',
    link: 'http://cowib.es/blog/python-programacion-backend-data-science-machine-learning-inteligencia-artificial-2024'
  },
];

function Blog() {
  const handleClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#020420] to-[#03072b]">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text px-4"
      >
        Blog Reciente
      </motion.h3>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, borderColor: 'rgba(59, 130, 246, 0.5)' }}
            className="backdrop-blur-lg bg-white/5 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300 group"
            onClick={() => handleClick(post.link)}
            style={{ cursor: post.link ? 'pointer' : 'default' }}
          >
            <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 group-hover:scale-110 transition-transform duration-500"></div>
              <BookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-400/30 group-hover:text-blue-400/50 transition-all duration-300" />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Calendar className="w-4 h-4 text-blue-400" />
                <p className="text-gray-400 text-xs sm:text-sm">{post.date}</p>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">{post.title}</h4>
              <p className="text-gray-400 mb-4 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">{post.description}</p>
              <div className="flex items-center space-x-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                <span className="text-xs sm:text-sm font-medium">Leer más</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
