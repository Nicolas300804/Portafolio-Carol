import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, me llamo Carol Andrea Rodriguez Rubio <strong>y ofrezco mis servicios de </strong> 
        <strong>Arte, Restauración, Belleza y Tejido</strong> 
      </h1>
      <h2 className='tittle'>Creaciones artesanales y servicios personalizados con dedicación y calidad.
        <Link to="/contacto">Contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Mis servicios</h2>
        <p>Descubre lo que puedo ofrecerte</p>

        <ListadoTrabajos limite="2"/>
      </section>
    </div>
  )
}

export default Inicio