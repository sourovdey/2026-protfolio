import { useState } from 'react'
import './App.css'
import Footer from './header_footer/footer.jsx'
import Header from './header_footer/header.jsx'
import Hero from './Section_Component/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
