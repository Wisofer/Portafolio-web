import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../Components/Client";
import { FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa';
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage("");

    try {
      const resultado = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      // Realizar acciones adicionales después de iniciar sesión exitosamente

    } catch (error) {
      console.log("El error fue:", error);
      setErrorMessage("Contraseña incorrecta");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
          <h2 className="text-3xl text-indigo-700 font-bold text-center mb-6">
            ¡Iniciar sesión!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2 flex items-center"
              >
                <FaEnvelope className="mr-2 text-indigo-500" /> Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                placeholder="Ingrese su correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2 flex items-center"
              >
                <FaLock className="mr-2 text-indigo-500" /> Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                placeholder="Ingrese su contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
              )}
            </div>
            <div className="flex items-center justify-between mb-4">
              <Link
                to={"/crearcuenta"}
                className="text-indigo-500 hover:underline"
              >
                Crear una cuenta
              </Link>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white rounded-md px-4 py-2 w-full font-bold hover:bg-indigo-600 transition duration-300 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? <FaSpinner className="animate-spin mr-2" /> : "Iniciar sesión"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;