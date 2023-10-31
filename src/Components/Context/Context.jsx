import { createContext, useEffect } from "react";
import { supabase } from "../Client";

export const TheContext = createContext();

export const ContextProvider = (props) => {
  async function signOut() {
    const result = await supabase.auth.signOut();
    console.log(result);
  }

  const InsertarDatos = async (nombre, apellido, telefono, comentario ) => {
    const { error } = await supabase
      .from("formulario")
      .insert({ 
        nombre,
        apellido,
        telefono,
        comentario
       });
  };

  return (
    <TheContext.Provider value={{ signOut, InsertarDatos }}>
      {props.children}
    </TheContext.Provider>
  );
};
