import { useState } from 'react'
import './style/header_footer.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='header'>
      <div className="menu">
      
      {/* Left Side */}
      <div className="logo">
        <p>Sourov Dey ‘26</p>
      </div>

      {/* Right Side */}
      <div className="nav">
        <ul>
          <li>Work</li>
          <li>Resume</li>
          <button className="talk-btn">Let's Talk</button>
        </ul>
      </div>

      </div>
    </section>
    </>
  )
}

export default Header
