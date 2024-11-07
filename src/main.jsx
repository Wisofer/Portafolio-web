import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Components/Context/Context.jsx";
import App from "./App.jsx";
import Formulario from "./Pages/Formulario";
import DatosFormulario from "./Pages/DatosFormulario";
import Acerca from "./Pages/Acerca";
import Contacto from "./Pages/Contacto";
import Login from "./Pages/Login";
import CrearCuenta from "./Pages/CrearCuenta";
import Error404 from "./Pages/Error404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="formulario" element={<Formulario />} />
            <Route path="datos" element={<DatosFormulario />} />
            <Route path="acerca" element={<Acerca />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error404 />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/crearcuenta" element={<CrearCuenta />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </ContextProvider>
  </React.StrictMode>
);