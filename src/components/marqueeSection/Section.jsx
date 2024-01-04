import React from 'react'
import './section.css'
import Marquee from './marquee'

function MarqueeSection() {
  let marginLeft = '5vw'
  let valueOne = 'collaborators and friends over'
  let marqueeGap = 3
  
  if(window.innerWidth<=1024 && window.innerHeight>1000){
    marqueeGap = 5
  }

  if(window.innerWidth<=576 && window.innerHeight<1000){
    marginLeft = '0vw'
    valueOne = 'collaborators and friends over the last decade.'
    marqueeGap = 10
  } 

  return (
    <div className='marquee-section'>
      <div className="section-content">
        <div className="section-left" style={{justifySelf:"flex-start"}}>
            <div className="box"></div>
            <h2>partners and clients</h2>
        </div>
        <div className="section-right">
            <p style={{marginLeft:marginLeft}}>Our valued</p>
            <p>{valueOne}</p>
            <p>the last decade.</p>
        </div>
      </div>
      <Marquee x={-1} gap={marqueeGap}/>
    </div>
  )
}

export default MarqueeSection
