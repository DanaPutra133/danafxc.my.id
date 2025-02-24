import React from 'react'
import Navbar from "./components/Navbar"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Artwork from './components/Artwork'
import Utama from './components/Utama'

const App = () => {
  return (
    <div>
      <Navbar />
      <Utama/>
      <About />
      <Projects />
      <Artwork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App