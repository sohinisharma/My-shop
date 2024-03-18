import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>    
      <footer>
      <h3>This is my footer</h3>
      <div className='footer-container'>
      <div className='list'>
      <li>Website Terms</li>
      <li>Consumer Care</li>
      </div>  
      <div className='list'>
      <li>Careers</li>
      <li>Privacy Policy</li>
      </div>  
      <div className='list'>
      <li>Contact Us</li>
      <li>About</li>
      </div>
      </div>      
      </footer>
    </div>
  )
}

export default Footer
