import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Inicio from "../Components/Inicio";
import Portafolio from "../Components/Portafolio";
import Servicios from "../Components/Servicios";
import Curriculum from "../Components/Curriculum";
import Contacto from "../Components/Contacto";
import { HeaderNav } from "../Components/Layout/HeaderNav";
import Footer from "../Components/Layout/Footer";
import Proyecto from "../Components/Proyecto";

const MisRutas = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Header y Navegacion */}
        <HeaderNav />
        {/* Contenido Central */}
        <section className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />}></Route>
            <Route path="/inicio" element={<Inicio />}></Route>
            <Route path="/portafolio" element={<Portafolio />}></Route>
            <Route path="/servicios" element={<Servicios />}></Route>
            <Route path="/curriculum" element={<Curriculum />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/proyecto/:id" element={<Proyecto />}></Route>
            <Route path="/*" element={
              <div className="page">
                
                <h1 className="heading">Error 404</h1>
              </div>
              }/>
          </Routes>
        </section>

        {/* Pie de Pagina */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default MisRutas;
