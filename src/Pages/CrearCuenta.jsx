import { useState } from "react";
import { supabase } from "../Components/Client";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa';

const Registrar = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      nombre,
    });

    setLoading(false);

    if (error) setError(error.message);
    else console.log("Check email for login link!");

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <form
        className="bg-white p-12 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 max-w-lg w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Registrarse</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 flex items-center">
            <FaUser className="mr-2 text-indigo-500" /> Nombre
          </label>
          <input
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 flex items-center">
            <FaEnvelope className="mr-2 text-indigo-500" /> Email
          </label>
          <input
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 flex items-center">
            <FaLock className="mr-2 text-indigo-500" /> Password
          </label>
          <input
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-indigo-500 text-white py-2 px-4 rounded-md w-full hover:bg-indigo-600 transition duration-300 flex items-center justify-center"
          disabled={loading}
          type="submit"
        >
          {loading ? <FaSpinner className="animate-spin mr-2" /> : "Registrarse"}
        </button>
        <Link to="/login">
          <button className="mt-4 bg-violet-950 text-white py-2 px-4 rounded-md w-full hover:bg-violet-800 transition duration-300">
            Regresar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Registrar;
