import React, { useEffect, useState } from "react";
import { supabase } from "../Components/Client";
import { TheContext } from "../Components/Context/Context";
import { useContext } from "react";

const DatosFormulario = () => {
  const valor = useContext(TheContext);

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const datoSupabase = async () => {
      const { data } = await supabase.from("formulario").select("*");
      setDatos(data);
    };

    datoSupabase();
  }, []);

  return (
    <div className="container mx-auto mb-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Apellido</th>
              <th className="py-2 px-4 border-b">Teléfono</th>
              <th className="py-2 px-4 border-b">Descripción</th>
              <th className="py-2 px-4 border-b">Operaciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{item.nombre}</td>
                <td className="py-2 px-4 border-b">{item.apellido}</td>
                <td className="py-2 px-4 border-b">{item.telefono}</td>
                <td className="py-2 px-4 border-b">{item.comentario}</td>
                <td>
                  <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
                      Editar
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DatosFormulario;