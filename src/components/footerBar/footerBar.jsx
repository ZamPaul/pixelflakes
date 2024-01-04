import React from 'react'
import './footerBar.css'

function FooterBar() {
  let value = 'Copyright 2023 Pixelflakes LTD. All rights reserved.'
  if(window.innerWidth<=576 && window.innerHeight<1000){
    value='Copyright 2023 Pixelflakes'
  }
  return (
    <div className='footer-bar'>
      <div className="footer-bar-wrap">
        <h2>{value}</h2>
        <h2>Privacy Notice</h2>
      </div>
    </div>
  )
}

export default FooterBar
