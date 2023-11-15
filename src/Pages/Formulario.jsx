import React, { useState } from "react";
import { useContext } from "react";
import { TheContext } from "../Components/Context/Context";

const Formulario = () => {
  const { InsertarDatos } = useContext(TheContext);

  const [formData, setFormData] = useState({
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
      nombre: "",
      apellido: "",
      telefono: "",
      comentario: "",
    });
  };

  return (
    <div className="mt-10">
      {!mostraContenido ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
              Nombres completo
            </label>
            <input
              type="text"
              name="nombre"
              id="name"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Apellidos Completo
            </label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 font-medium text-gray-700"
            >
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              id="phone"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block mb-2 font-medium text-gray-700"
            >
              Comentario
            </label>
            <textarea
              name="comentario"
              id="address"
              value={formData.comentario}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
          >
            Enviar
          </button>
        </form>
      ) : (
        <div>
          {/* Contenido adicional a mostrar */}
          <div className="mx-auto w-2/3 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4">
            <p className="font-bold">Alerta</p>
            <p>Mucha Gracias por confiar con nosotros</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulario;