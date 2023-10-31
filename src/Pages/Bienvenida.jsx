import React from 'react';

const Bienvenida = () => {
  const name = 'William Borge';
  const age = 21;
  const skills = ['JavaScript', 'Angular', 'React', 'Node.js'];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">¡Bienvenido a mi sitio!</h1>
        <p className="text-gray-700">
          ¡Hola! Soy {name}, un programador frontend apasionado con {age} años de edad. Me encanta trabajar con tecnologías como {skills.join(', ')} y crear experiencias web increíbles.
        </p>
      </div>
    </div>
  );
};

export default Bienvenida;