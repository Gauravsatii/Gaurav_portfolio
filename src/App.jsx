import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar name="main()" value="navbar" />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Footer />
      </div>

      <Navbar name="return" value="footer" />
    </>
  )
}

export default App
