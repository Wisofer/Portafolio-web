import { useState } from "react";
import { supabase } from "../Components/Client";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="mt-20">
      <form
        className="bg-white p-6 rounded-lg shadow-md m-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-medium mb-4">Registrarse</h2>

        {error && <p className="text-red-500">{error}</p>}

        <div className="mb-2">
          <input
            required
            className="border p-2 w-full"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <input
            required
            className="border p-2 w-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <input
            required
            className="border p-2 w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg disabled:opacity-50"
          disabled={loading}
          type="submit"
        >
          {loading ? "Cargando..." : "Registrarse"}
        </button>
        <Link to="/login">
        <button className=" mx-1 bg-violet-950 text-white py-2 px-4 rounded-lg disabled:opacity-50">
          Regresar
        </button>
        </Link>

      </form>
    </div>
  );
};

export default Registrar;
