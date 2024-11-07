import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  { id: 1, title: 'El futuro del desarrollo web: Tendencias para 2024', date: '15 de mayo, 2024' },
  { id: 2, title: 'Cómo optimizar el rendimiento de aplicaciones React', date: '2 de abril, 2024' },
  { id: 3, title: 'Introducción a la Inteligencia Artificial en el desarrollo de software', date: '18 de marzo, 2024' },
];

function Blog() {
  return (
    <section id="blog" className="py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Blog Reciente</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white bg-opacity-10 rounded-xl overflow-hidden"
          >
            <div className="h-48 bg-blue-400"></div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
              <p className="text-gray-300 mb-4">{post.date}</p>
              <a href="#" className="text-blue-400 hover:underline">Leer más</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
