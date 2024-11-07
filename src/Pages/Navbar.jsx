import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TheContext } from "../Components/Context/Context";
import MenuMovile from "./MenuMovile";
import Footer from "./Footer";
import { FaHome, FaInfoCircle, FaWpforms, FaDatabase, FaEnvelope, FaSignInAlt, FaSpinner } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const { signOut } = useContext(TheContext);
  const [loading, setLoading] = useState(false);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg font-roboto fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icono del menú (por ejemplo, hamburguesa) */}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <div
                    onClick={() => handleNavigation("/")}
                    className="text-white px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer"
                  >
                    <FaHome className="mr-1" /> Inicio
                  </div>
                  <div
                    onClick={() => handleNavigation("/acerca")}
                    className="text-white hover:bg-indigo-600 hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer"
                  >
                    <FaInfoCircle className="mr-1" /> Acerca de JavaScript
                  </div>
                  <div
                    onClick={() => handleNavigation("/formulario")}
                    className="text-white hover:bg-indigo-600 hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer"
                  >
                    <FaWpforms className="mr-1" /> Formulario
                  </div>
                  <div
                    onClick={() => handleNavigation("/datos")}
                    className="text-white hover:bg-indigo-600 hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer"
                  >
                    <FaDatabase className="mr-1" /> Datos del Formulario
                  </div>
                  <div
                    onClick={() => handleNavigation("/contacto")}
                    className="text-white hover:bg-indigo-600 hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer"
                  >
                    <FaEnvelope className="mr-1" /> Contacto
                  </div>
                  <div
                    onClick={() => {
                      signOut();
                      handleNavigation("/login");
                    }}
                    className="text-white hover:bg-indigo-600 hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer"
                  >
                    <FaSignInAlt className="mr-1" /> Entrar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MenuMovile />
      </nav>
      {loading ? (
        <div className="flex justify-center mt-40 items-center h-20">
          <FaSpinner className="animate-spin text-white text-3xl" />
        </div>
      ) : (
        <div className="transition-opacity duration-500 mt-20">
          <Outlet />
        </div>
      )}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;
