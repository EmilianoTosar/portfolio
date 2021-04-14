import React from 'react'
import './Cover.css'
import coverVideo from '../../media/coverVideo.mp4'

const Cover = () => {
  return (
    <div>
      <div className="cover-container">
        <video src={coverVideo} className="video" autoPlay loop muted />
        <h1>Emiliano Tosar</h1>
        <h2>Full Stack Developer Jr</h2>
        <p>HTML | CSS | JavaScript | NodeJS | React | MongoDB</p>
      </div>
    </div>
  )
}

export default Cover
