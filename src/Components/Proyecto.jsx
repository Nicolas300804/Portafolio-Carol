import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/Trabajos";
import { Link } from "react-router-dom";

const Proyecto = () => {
  const [proyecto, setProyecto] = useState({});

  const params = useParams();

  useEffect(() => {
    const proyecto = trabajos.filter((trabajo) => trabajo.id === params.id);
    setProyecto(proyecto[0]);
  }, []);
  
  return (
    <div className="page-work">
      <div className="mask">
        <img src={"/images/" + proyecto.id + ".png"} alt="" />
      </div>
      <h1 className="heading">{proyecto.nombre}</h1>
{/*       <p>{proyecto.tecnologias}</p> */}
      <p>{proyecto.descripcion}</p>
      <h2>
      <Link to={"/contacto/"}>Contactanos</Link> 
      </h2>
      {/* <a href={"https://"+proyecto.url} target="_blank">Ir al Proyecto</a> */}
    </div>
  );
};

export default Proyecto;
