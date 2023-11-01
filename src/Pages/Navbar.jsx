import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { supabase } from "../Components/Client";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TheContext } from "../Components/Context/Context";
import MenuMovile from "./MenuMovile";
import Footer from "./Footer";

const Navbar = () => {
  const navigate = useNavigate();
  const { signOut } = useContext(TheContext);

  useEffect(() => {
    const auth = supabase.auth.onAuthStateChange((event, seccion) => {
      if (!seccion) {
        navigate("/login");
      } else {
        navigate("/");
      }
      
    });
  }, [navigate]);
  return (
    <div>
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Icono del menú en dispositivos móviles */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icono del menú (por ejemplo, hamburguesa) */}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              {/* Logo o título de la aplicación */}
              <div className="flex-shrink-0 flex items-center">
                {/* Aquí puedes colocar tu logo */}
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* Enlaces de navegación */}
                  <Link
                    to={"/"}
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Inicio
                  </Link>
                  <Link
                    to={"/acerca"}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Acerca de JavaScript
                  </Link>
                  <Link
                    to={"/formulario"}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Formulario
                  </Link>
                  <Link
                    to={"/datos"}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Datos del Formulario
                  </Link>
                  <Link
                    to={"/contacto"}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contacto
                  </Link>
                  <button
                    onClick={signOut}
                    className="bg-blue-700 text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Desconectar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menú desplegable en dispositivos móviles */}
        <MenuMovile />
      </nav>
      <div className="mt-5">
        <Outlet />
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Navbar;
