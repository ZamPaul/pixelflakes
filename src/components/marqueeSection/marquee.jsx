import React, { useEffect, useRef } from 'react'
import './marquee.css'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


function Marquee({x, gap}) {

  const ref = useRef(null)

  const data = [
    {
        src: 'https://wp.pixelflakes.com/wp-content/uploads/2023/05/logo-watg.svg'
    },
    {
        src: 'https://wp.pixelflakes.com/wp-content/uploads/2023/05/logo-work-ac.svg'
    },
    {
        src: 'https://wp.pixelflakes.com/wp-content/uploads/2023/05/logo-hok.svg'
    },
    {
        src: 'https://wp.pixelflakes.com/wp-content/uploads/2023/05/logo-onyk.svg'
    },
    {
        src: 'https://wp.pixelflakes.com/wp-content/uploads/2023/05/logo-tishman-speyer.svg'
    },
    {
        src: 'https://wp.pixelflakes.com/wp-content/uploads/2023/05/logo-prp.svg'
    }
  ]

  const boxes = data.map( (elem,i) => {
    return (
        <div className="box" key={i}>
            <img src={elem.src} alt="image"/>
        </div>
    )
  })

  const marquee = (
    <div className="marquee" ref={ref}> 
        {boxes}
    </div>
  ) 

  let start = '-250% top'
  let end = '350% bottom'

  useEffect(()=>{
    let xMaxValue = ref.current.getBoundingClientRect().width + window.innerWidth*(gap/100);
    let direction = x;
    let xValue = 0;
    

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger:".marquee-section",
      start: start,
      end: end,
      invalidateOnRefresh: true,
      onUpdate: function(e){
        direction = e.direction
      },
      // markers: true
    })
    
    const anim = () => {
        xValue += 1.8*direction
        if(xValue >= xMaxValue){
            xValue=0;
        }
        if(xValue <= (-1*xMaxValue)){
            xValue=0;
        }
        if(ref.current){
          gsap.set('.marquee',{x:xValue})
        }
        requestAnimationFrame(anim)
    }

    requestAnimationFrame(anim)


  },[])

  return (
    <div className='marquee-wrap'>
      <div className="marquee-inner">
        {marquee}
        {marquee}
        {marquee}
      </div>
    </div>
  )
}

Marquee.defaultProps = {
  x: -1,
  gap: 3
}

export default Marquee
