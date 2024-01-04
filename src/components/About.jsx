import React, { useEffect } from 'react'
import Transition from './transition/transition'
import './about/about.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextBlock from './textBlock/TextBlock'
import img from './about/images/diverse-hands-touching-white-paper_53876-98411.jpg'
import img2 from './about/images/workaholics-businesspeople-brainstorming-financial-company-ideas_482257-10539.jpg'

function About() {

  return (
    <Transition title={'About'}>
      <main id="main">
        <div className="aboutPage">
          <div className="creative-wrap">
            <div className="creative-text">
              <h1>Creative OutStanding</h1>
              <h1>work is contagious</h1>
            </div>
          </div>
          <div className="about-photo-section">
           <div className="about-photo-inner">
              <TextBlock value={'about pixelflakes'} color='#fff' blockSize={'10px'}/>
              <div className="about-photo">
                <img src={img} alt="" />
              </div>
           </div>
          </div>
          <div className="about-job-section">
            <div className="about-job-inner">
              <div className="job-left-photo">
                <div className="image-wrap">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Transition>
  )
}

export default About