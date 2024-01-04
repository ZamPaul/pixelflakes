import React, { useEffect } from 'react'
import './hero.css'
import Svg from '../svg/svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bezier from 'bezier-easing'

export default function Hero() {
  let spandata = ['Artistic Value','experience','expertise','creativity']
  let scrollEndValue = 'bottom bottom'
  let scrollEndValue2 = '150% bottom'
  if(window.innerWidth<=1024){
    scrollEndValue='190% bottom'
    scrollEndValue2='220% bottom'
  }

  let championSpans = document.getElementsByClassName('champion-span')

  let active = 0
  let svgwi = '3.5vw'
  let paraValue = 'Pixelflakes is an architectural'
  if(window.innerWidth<576 && window.innerHeight<1000){
    svgwi = '6.4vw'
    paraValue='Pixelflakes is an architectural marketing firm comprised of creatives, designers and thinkers.'
  }

  const champion = () => {

    championSpans[active].classList.remove('active')
    if(active===3){
      active=0
    }else{
      active+=1
    }
    championSpans[active].classList.add('active')
  }
  
  setInterval(() => {
    if(championSpans.length!==0){
      requestAnimationFrame(champion)
    }
    // requestAnimationFrame(champion)
  }, 2000);

  useEffect(()=>{
    
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      end: scrollEndValue,
      pin: '.hero-para',
      pinnedContainer: '.hero-para',
      scrub: 1,
      // markers: true
    })

    let anim = gsap.to('.hero-nested',{
      opacity: 0,
      scale: 0.7,
      rotateX: -120,
      ease: 'power4.Out'
    })
    
    ScrollTrigger.create({
      animation: anim,
      trigger: '.hero',
      start: 'top top',
      end: scrollEndValue2,
      scrub: 1,
      // markers: true
    })

    championSpans[0].classList.add('active')

  },[])

  return (
    <div className='hero'>
      <div className="hero-para">
        <div className="hero-nested">
          <p className='first-para'><span className='para-first-span'><Svg width={svgwi}/></span>{paraValue}</p>
          <p className='sec-para'>marketing firm<span className='para-sec-span'><Svg width={svgwi}/></span>comprised of creatives, designers and thinkers.</p>
        </div>
      </div>
      <div className="video-container">
        <div className="video">
          <video autoPlay loop muted>
            <source  src='./vim/home-page-vi.mp4'/>
          </video>
        </div>
        <div className="champion">
            <h1>We Champion →</h1>
            <h1>
              {
                spandata.map((elem,i)=>{
                  return (
                    <span key={i} className='champion-span'>{elem}</span>
                  )
                })
              }
            </h1>
        </div>
      </div>
    </div>
  )
}