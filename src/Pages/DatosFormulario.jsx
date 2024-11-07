import React, { useEffect, useState } from "react";
import { supabase } from "../Components/Client";
import { TheContext } from "../Components/Context/Context";
import { useContext } from "react";

const DatosFormulario = () => {
  const {valor , deleteData} = useContext(TheContext);

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const datoSupabase = async () => {
      const { data } = await supabase.from("formulario").select("*");
      setDatos(data);
    };

    datoSupabase();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {datos === length } 
        {datos.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{item.nombre} {item.apellido}</h2>
            <p className="text-gray-600 mb-4">Teléfono: {item.telefono}</p>
            <p className="text-gray-600 mb-4">Descripción: {item.comentario}</p>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
                Editar
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=> deleteData(item.idUser)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatosFormulario;