import { useState } from 'react'
import './style/header_footer.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <div >
            <p style={{textAlign: "center", padding: "20px 0", fontSize: "14px", color: "#555"}} className='footer-text'>© 2026 Sourov Dey. All rights reserved.</p>
        </div>
      </section>
      
    </>
  )
}

export default Footer
