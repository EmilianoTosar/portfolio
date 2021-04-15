import React from 'react'
import './Slider.css'

const slidesInfo = [
  {
    src: "https://i.ibb.co/FXZqv7k/yelpcamp.png",
    alt: "YelpCamp",
    desc: "Clon de Yelp especializado en campings",
    href: "https://intense-lake-71907.herokuapp.com/"
  },
  {
    src: "https://i.ibb.co/Hq55N3m/yt.png",
    alt: "Youtube Search App",
    desc: "App de busqueda en Youtube",
    href: "https://brave-feynman-3b7f00.netlify.app/"
  },
  {
    src: "https://i.ibb.co/Ptwdr03/colores.png",
    alt: "Color Guessing Game",
    desc: "Juego de adivinanza de colores rgb",
    href: "https://determined-cori-70d5dc.netlify.app/"
  },
  {
    src: "https://i.ibb.co/3SnQw8s/porotitos.png",
    alt: "Patatap Clone",
    desc: "Clon de Patatap",
    href: "https://flamboyant-yonath-26da56.netlify.app/"
  }
]

const slides = slidesInfo.map(slide => {
  return (
    <div className="slide-container">
      <a  
        href={slide.href} 
        target="_blank" 
        rel="noreferrer"
      >
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
          <span>{slide.desc}</span>
        </div>
      </a>
    </div>
  )
})

export default slides
