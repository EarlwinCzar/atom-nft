import React from 'react'
import '../styles/footer.css'
import footerlogo1 from '../assets/footerlogo1.png'
import footerlogo2 from '../assets/footerlogo2.png'
import footerlogo3 from '../assets/footerlogo3.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-section'>
        <div className='footer-section-container'>
          <p>Join Our Community</p>
          <div className='footer-logos'>
            <img src={footerlogo1}/>
            <img src={footerlogo2}/>
            <img src={footerlogo3}/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
