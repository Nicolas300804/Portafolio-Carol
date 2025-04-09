import React from 'react'

const Contacto = () => {
  return (
    <div className='page'> 
      <h1 className='heading'>Contacto</h1>
      
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-section">
            <h3>Ubicación</h3>
            <p>Bogotá, Colombia</p>
          </div>
          
         {/*  <div className="contact-section">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a>
            </div>
          </div> */}
          
          <div className="contact-section">
            <div className="contact-method">
              <i className="fa fa-whatsapp"></i>
              <p>WhatsApp: <a href="https://wa.me/573162280790" target="_blank" rel="noopener noreferrer">316 228 0790</a></p>
            </div>
            <div className="contact-method">
              <i className="fa fa-envelope"></i>
              <p>Email: <a href="mailto:mundobelleza.sos@gmail.com">mundobelleza.sos@gmail.com</a></p>
            </div>
          </div>
        </div>
        
        <div className="contact-right">
          <h3>Formulario de contacto</h3>
          <form className='contact-form' action='mailto:mundobelleza.sos@gmail.com'>
            <input type="text" placeholder='Nombre'/>
            <input type="text" placeholder='Email'/>
            <textarea placeholder='Mensaje'></textarea>
            <button type="submit" className="submit-btn">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto