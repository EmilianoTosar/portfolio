import React from 'react'
import './Card.css'

const Card = ({src, alt, title, description, repo, href}) => {
  return (
    <div className="card" style={{backgroundImage:`url(${src})`}} alt={alt}>
      <div className="card-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className='card-btns'>
          <a href={repo} target='_blank' rel="noreferrer">Repo<span className="repo"></span></a>
          <a href={href} target='_blank' rel="noreferrer">Web<span className="web"></span></a>
        </div>
      </div>
    </div>
  )
}

export default Card
