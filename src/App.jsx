import { useState } from 'react'
import './App.css'
import Footer from './header_footer/footer'
import Header from './header_footer/header'
import Hero from './Section_Component/Hero'

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
