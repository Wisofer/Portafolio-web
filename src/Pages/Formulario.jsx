import React, { useState } from "react";
import { useContext } from "react";
import { TheContext } from "../Components/Context/Context";
import { FaUser, FaPhone, FaCommentDots, FaPaperPlane } from 'react-icons/fa';

const Formulario = () => {
  const { InsertarDatos } = useContext(TheContext);

  const [formData, setFormData] = useState({
    idUser: null,
    nombre: "",
    apellido: "",
    telefono: "",
    comentario: "",
  });
  
  const [mostraContenido, setMostrarContenido] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      InsertarDatos(
        formData.idUser,
        formData.nombre,
        formData.apellido,
        formData.telefono,
        formData.comentario
      );

      setMostrarContenido(true);
    } catch (error) {
      console.log("El error fue:", error);
    }

    // Reiniciar el formulario
    setFormData({
      idUser:null,
      nombre: "",
      apellido: "",
      telefono: "",
      comentario: "",
    });
  };

  return (
    <div className="mt-10">
      {!mostraContenido ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4 bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
          <div className="mb-4">
            <input
              type="hidden"
              value={formData.idUser}
              name="id"
              onChange={handleChange}
            />
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700 flex items-center"
            >
              <FaUser className="mr-2 text-indigo-500" /> Nombres completo
            </label>
            <input
              type="text"
              name="nombre"
              id="name"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="apellido"
              className="block mb-2 font-medium text-gray-700 flex items-center"
            >
              <FaUser className="mr-2 text-indigo-500" /> Apellidos Completo
            </label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 font-medium text-gray-700 flex items-center"
            >
              <FaPhone className="mr-2 text-indigo-500" /> Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              id="phone"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comentario"
              className="block mb-2 font-medium text-gray-700 flex items-center"
            >
              <FaCommentDots className="mr-2 text-indigo-500" /> Comentario
            </label>
            <textarea
              name="comentario"
              id="comentario"
              value={formData.comentario}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full flex items-center justify-center transition duration-300"
          >
            <FaPaperPlane className="mr-2" /> Enviar
          </button>
        </form>
      ) : (
        <div className="mx-auto w-2/3 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 transform transition duration-500 hover:scale-105">
          <p className="font-bold">Alerta</p>
          <p>Muchas gracias por confiar en nosotros</p>
        </div>
      )}
    </div>
  );
};

export default Formulario;
