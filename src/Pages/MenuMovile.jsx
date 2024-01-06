import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TheContext } from "../Components/Context/Context";

const MenuMovile = () => {
  const { signOut } = useContext(TheContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Menú desplegable en dispositivos móviles */}
      <nav className="sm:hidden">
        <div className="relative">
          <button
            type="button"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            {!isMenuOpen ? "Menu" : "Mas"}
          </button>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute bg-white mt-2 py-2 w-48 rounded-md shadow-lg`}
            style={{ maxHeight: "calc(100vh - 2rem)", overflowY: "auto" }}
          >
            <li>
              <Link
                to={"/"}
                onClick={handleLinkClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to={"/acerca"}
                onClick={handleLinkClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Acerca de
              </Link>
            </li>
            <li>
              <Link
                to={"/formulario"}
                onClick={handleLinkClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Formulario
              </Link>
            </li>
            <li>
              <Link
                to={"/datos"}
                onClick={handleLinkClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Datos del Formulario
              </Link>
            </li>
            <li>
              <Link
                to={"/contacto"}
                onClick={handleLinkClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Contacto
              </Link>
            </li>
            <li>
              <div
                onClick={signOut}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex"
              >
                Desconectar
              </div>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
};

export default MenuMovile;
