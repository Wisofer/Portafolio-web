import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-10 text-white py-1 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="font-bold">Compañía William Borge</span>
          <span className="text-gray-500 mx-2">© 2023</span>
        </div>
        <div>
          <Link to={"/"} className="text-gray-500 hover:text-white mx-2">
            Inicio
          </Link>
          <Link to={"/acerca"} className="text-gray-500 hover:text-white mx-2">
            Acerca de
          </Link>
          <Link to={"/contacto"} className="text-gray-500 hover:text-white mx-2">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
