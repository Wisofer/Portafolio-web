import React from 'react';
import { FaJsSquare, FaReact, FaLaptopCode, FaUsers } from 'react-icons/fa';

const Acerca = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-universe bg-cover bg-stars">
      <div className="bg-white m-5 rounded-lg shadow-2xl p-8 max-w-4xl w-full transform transition duration-700 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
        <h2 className="text-4xl font-bold mb-6 text-center text-indigo-700 flex items-center justify-center transition duration-500 hover:text-indigo-900">
          <FaJsSquare className="mr-2 text-yellow-500" /> JavaScript y React <FaReact className="ml-2 text-blue-500" />
        </h2>
        <p className="text-gray-700 mb-6 flex items-center transition duration-500 hover:text-gray-900">
          <FaLaptopCode className="mr-2 text-green-500" /> JavaScript es un lenguaje de programación ampliamente utilizado en el desarrollo web y de aplicaciones. React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reactivas.
        </p>
        <p className="text-gray-700 mb-6 flex items-center transition duration-500 hover:text-gray-900">
          <FaLaptopCode className="mr-2 text-green-500" /> Con JavaScript, puedes agregar comportamientos dinámicos a las páginas web, manipular datos y comunicarte con servidores. React, por su parte, ofrece un enfoque basado en componentes para crear interfaces de usuario eficientes y reutilizables.
        </p>
        <p className="text-gray-700 mb-6 flex items-center transition duration-500 hover:text-gray-900">
          <FaLaptopCode className="mr-2 text-green-500" /> Juntos, JavaScript y React proporcionan una base sólida para desarrollar aplicaciones modernas y escalables. Pueden ser utilizados en una amplia variedad de proyectos, desde sitios web interactivos hasta aplicaciones móviles y de escritorio.
        </p>
        <p className="text-gray-700 flex items-center transition duration-500 hover:text-gray-900">
          <FaUsers className="mr-2 text-indigo-500" /> Además, la comunidad de JavaScript y React es muy activa, lo que significa que hay una gran cantidad de recursos disponibles, como documentación, tutoriales y librerías, para ayudarte a desarrollar tus proyectos de manera eficiente.
        </p>
      </div>
    </div>
  );
}

export default Acerca;