import React from 'react'
import Card from '../card/Card'
import './Grid.css'

const Grid = ({ cardInfo, frontendExercises }) => {
  return (
    <div className="grid-container">
      <div className="grid-title">
        <h2>Mis Proyectos</h2>
        <p>(Casi) todos mobile-first!</p>
      </div>
      <div className='grid-body'>
        {cardInfo.map(({ href, alt, src, description, title, repo }, index) => {
          return (
            <Card
              key={index}
              href={href}
              alt={alt}
              src={src}
              description={description}
              title={title}
              repo={repo}
            />
            )
          })
        }
      </div>
      <div className="grid-title">
        <h2>Ejercicios de Frontend Mentor</h2>
        <p>Algunos ejercicios de UX/UI</p>
      </div>
      <div className='grid-body'>
        {frontendExercises.map(({ href, alt, src, description, title, repo }, index) => {
          return (
            <Card
              key={index}
              href={href}
              alt={alt}
              src={src}
              description={description}
              title={title}
              repo={repo}
            />
            )
          })
        }
      </div>
    </div>
  )
}

export default Grid
