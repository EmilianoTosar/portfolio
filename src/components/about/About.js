import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Acerca de mi</h3>
        <p>
          Descubrí hace unos años el mundo de la programación y me enamoré. A partir de ese momento, he dedicado practicamente el total de mi tiempo libre a aprender de manera autodidacta los fundamentos del desarrollo web. Si bien no poseo experiencia como programador, tengo vasta experiencia en trabajo en equipo, me manejo con comodidad bajo presión y estoy acostumbrado a la toma de decisiones en diversos contextos laborales. He trabajado durante muchos años en gastronomía, pero estoy deseoso de dar un cambio radical en mi vida para dedicarme profesionalmente a esta nueva pasión. Ojalá puedan darme la oportunidad de demostrar lo que puedo brindarle a cualquier equipo de trabajo!
        </p>
      </div>
      <div className="about-img">
        <img src="https://i.ibb.co/Sy0cCCP/Whats-App-Image-2021-04-14-at-18-35-05.jpg" alt="Mi foto"/>
      </div>
    </div>
  )
}

export default About

