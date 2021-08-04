import React, { useState, useEffect } from 'react'
import './App.css'
import Cover from './components/cover/Cover'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Grid from './components/grid/Grid'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'
import { cardInfo, frontendExercises } from './constants'

const App = () => {
  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollHeight(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])

  return (
    <div>
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Grid cardInfo={cardInfo} frontendExercises={frontendExercises} />
      <Info />
      <Footer />
    </div>
  )
}

export default App