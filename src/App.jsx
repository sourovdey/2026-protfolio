import { useState } from 'react'
import './App.css'
import Footer from './header_footer/Footer.jsx'
import Header from './header_footer/Header.jsx'
import Hero from './Section_Component/Hero.jsx'
import About from './Section_Component/About/About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
