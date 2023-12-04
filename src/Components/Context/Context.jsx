import { createContext, useEffect } from "react";
import { supabase } from "../Client";

export const TheContext = createContext();

export const ContextProvider = (props) => {
  async function signOut() {
    const result = await supabase.auth.signOut();
  }

  const InsertarDatos = async (nombre, apellido, telefono, comentario ) => {
    const { error, data } = await supabase
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
