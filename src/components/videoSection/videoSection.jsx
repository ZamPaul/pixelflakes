import React from 'react'
import './index.css'
import ButtonType2 from '../buttonType2/buttonType2'
import Button from '../button/button'

function VideoSection() {
  return (
    <div className='section-wrapper'>
      <div className="upper">
        <video autoPlay loop muted>
          <source src="./vim/vi-2.mp4"/>
        </video>
        <div className="paragraph-wrap">
          <p style={{alignSelf:"flex-end"}}>If you’d like to discuss a potential</p>
          <p>project or just say hello, please get in touch. We’d love to jump on a call or swing by if you’re local. We also offer a range of different workshops, CPDs and supplier presentations - please ask us for more information if you’re interested!</p>
        </div>
      </div>
      <div className="lower">
        <div className="container">
          {/* <ButtonType2 text="Work with Us" lineColor="#fff" textColor="#fff"/> */}
          <Button title="Work with us"/>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
