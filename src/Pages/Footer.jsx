import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 fixed bottom-0 left-0 w-full shadow-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-bold text-lg">Compañía William Borge</span>
          <span className="text-gray-400 mx-2">© 2023</span>
        </div>
        <div className="flex space-x-4">
          <Link to={"/"} className="text-gray-400 hover:text-white transition duration-300 flex items-center">
            <FaHome className="mr-1" /> Inicio
          </Link>
          <Link to={"/acerca"} className="text-gray-400 hover:text-white transition duration-300 flex items-center">
            <FaInfoCircle className="mr-1" /> Acerca de
          </Link>
          <Link to={"/contacto"} className="text-gray-400 hover:text-white transition duration-300 flex items-center">
            <FaEnvelope className="mr-1" /> Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
