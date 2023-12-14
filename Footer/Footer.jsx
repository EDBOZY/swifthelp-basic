import React from 'react'
import './Footer.css'
import one from "./1.png"

function Footer() {
  return (
    <div className='footer'>
        
        <div className='text'>
        <div className='img'>
          <img className="download" alt="Download" src={one} />
        </div>
            <span>Home</span>
            <span>Volunteer</span>
            <span>Donate</span>
        </div>
    </div>
  )
}

export default Footer
