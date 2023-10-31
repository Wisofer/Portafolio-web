import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home.jsx";
import Formulario from "./Pages/Formulario.jsx";
import DatosFormulario from "./Pages/DatosFormulario.jsx";
import Error404 from "./Pages/Error404.jsx";
import Contacto from "./Pages/Contacto.jsx";
import Acerca from "./Pages/Acerca.jsx";
import Login from "./Pages/Login.jsx";
import { supabase } from "./Components/Client.jsx";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "./Components/Context/Context.jsx";
import CrearCuenta from "./Pages/CrearCuenta.jsx";
import Navbar from "./Pages/Navbar.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "", element: <Home /> },
      { path: "formulario", element: <Formulario /> },
      { path: "datos", element: <DatosFormulario /> },
      { path: "acerca", element: <Acerca /> },
      { path: "contacto", element: <Contacto /> },
      { path: "*", element: <Error404 /> },
    ],
  },

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/crearcuenta",
    element: <CrearCuenta />,
  },
  { path: "*", element: <Error404 /> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
