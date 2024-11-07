import { createContext, useEffect, useState } from "react";
import { supabase } from "../Client";

export const TheContext = createContext();

export const ContextProvider = (props) => {
  async function signOut() {
    const result = await supabase.auth.signOut();
  }

  const [db, setDb] = useState([]);

  const InsertarDatos = async (nombre, apellido, telefono, comentario) => {
    const { error, data } = await supabase.from("formulario").insert({
      idUser,
      nombre,
      apellido,
      telefono,
      comentario,
    });
  };

  const createData = (data) => {
    setDb([...db, data]);
  };

  const deleteData = async (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este elemento?"
    );

    if (confirmDelete) {
      const { error } = await supabase.from("formulario").delete().eq("id", id);
      const newData = db.filter((el) => el.idUser !== id);
      setDb(newData);
    }
  };

  return (
    <TheContext.Provider
      value={{ db, setDb, signOut, InsertarDatos, deleteData, createData }}
    >
      {props.children}
    </TheContext.Provider>
  );
};
