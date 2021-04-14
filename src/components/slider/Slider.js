import React from 'react'
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Slides from './Slides'
import './Slider.css'

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Mis Proyectos</h2>
      </div>
      <Carousel 
        plugins={[
          'arrows',
          'infinite',
          'centered',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3
            }
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
        offset={30}
        
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 2,
            itemWidth: 250
          }
        }}
      />
    </div>
  )
}

export default Slider
