import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { supabase } from "../Components/Client";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage(""); // Reiniciar el mensaje de error al iniciar el inicio de sesión

    try {
      const resultado = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      // Realizar acciones adicionales después de iniciar sesión exitosamente

    } catch (error) {
      console.log("El error fue:", error);
      setErrorMessage("Contraseña incorrecta"); // Establecer el mensaje de error en caso de contraseña incorrecta
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-gray-500 p-8 shadow-md">
          <h2 className="text-2xl text-white font-bold text-center mb-6">
            ¡Iniciar sesión!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2 text-white"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ingrese su correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2 text-white"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                className="text-blue-500 hover:underline text-white"
              >
                Crear una cuenta
              </Link>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2 w-full font-bold hover:bg-blue-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Cargando..." : "Iniciar sesión"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;