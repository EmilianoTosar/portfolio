import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Emiliano Tosar</h1>
        <p>De Buenos Aires, Argentina</p>
      </div>
      <div className="footer-contact">
        <h3>Contacto</h3>
      </div>
      <div className="footer-sns">
        <div className="design-by">
          Diseñado por Emiliano Tosar
        </div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/emiliano-tosar-331482200/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/EmilianoTosar" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
