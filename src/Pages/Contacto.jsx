import React from "react";
import { FaFacebookF, FaTwitter, FaRedditAlien, FaPinterestP, FaInstagram, FaGithub } from 'react-icons/fa';

const Contacto = () => {
  return (
    <div className="min-h-screen p-6 bg-zinc-800 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">
            Mis redes sociales
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.facebook.com/wisofer.wisofer.3" className="transform transition duration-500 hover:scale-110">
              <button className="bg-blue-500 p-4 font-semibold text-white inline-flex items-center space-x-2 rounded-full shadow-lg hover:bg-blue-600">
                <FaFacebookF className="w-6 h-6" />
              </button>
            </a>

            <a href="https://twitter.com/wisofer" className="transform transition duration-500 hover:scale-110">
              <button className="bg-blue-400 p-4 font-semibold text-white inline-flex items-center space-x-2 rounded-full shadow-lg hover:bg-blue-500">
                <FaTwitter className="w-6 h-6" />
              </button>
            </a>

            <a href="https://www.reddit.com/user/Cool_Professor105/" className="transform transition duration-500 hover:scale-110">
              <button className="bg-red-500 p-4 font-semibold text-white inline-flex items-center space-x-2 rounded-full shadow-lg hover:bg-red-600">
                <FaRedditAlien className="w-6 h-6" />
              </button>
            </a>

            <a href="https://www.pinterest.es/wisofer017/" className="transform transition duration-500 hover:scale-110">
              <button className="bg-pink-600 p-4 font-semibold text-white inline-flex items-center space-x-2 rounded-full shadow-lg hover:bg-pink-700">
                <FaPinterestP className="w-6 h-6" />
              </button>
            </a>

            <a href="https://www.instagram.com/wisofer17/" className="transform transition duration-500 hover:scale-110">
              <button className="bg-blue-600 p-4 font-semibold text-white inline-flex items-center space-x-2 rounded-full shadow-lg hover:bg-blue-700">
                <FaInstagram className="w-6 h-6" />
              </button>
            </a>

            <a href="https://github.com/Wisofer" className="transform transition duration-500 hover:scale-110">
              <button className="bg-gray-700 p-4 font-semibold text-white inline-flex items-center space-x-2 rounded-full shadow-lg hover:bg-gray-800">
                <FaGithub className="w-6 h-6" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
