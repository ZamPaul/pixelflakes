import React, { useEffect } from 'react'
import Transition from './transition/transition'
import './about/about.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextBlock from './textBlock/TextBlock'
import img from './about/images/diverse-hands-touching-white-paper_53876-98411.jpg'
import img2 from './about/images/workaholics-businesspeople-brainstorming-financial-company-ideas_482257-10539.jpg'
import Button from './button/button'
import Team from './about/team/team'
import VideoSection from './videoSection/videoSection'
import FooterMenu from './footerMenu/footerMenu'
import FooterBar from './footerBar/footerBar'

function About() {

  let value = 'studio comprised of artists. Our carefully selected team specialises in visualising the unbuilt. The approach we take evokes thought and conveys emotion. It is this approach that has cemented on-going working relationships with many of our clients. Whilst we all descend from different backgrounds and nationalities we share a common passion and language for quality artistic visualisation.'

  let size = () => {
    if(window.innerWidth<=1024 && window.innerHeight>=1000){
      return '5px'
    }else{
      return '7px'
    }
  }

  let left = () => {
    if(window.innerWidth<=1024 && window.innerHeight>=1000){
      return '70px'
    }else if(window.innerWidth<=576 && window.innerHeight<=1000){
      return '110px'
    }else{
      return'180px'
    }
  }

  return (
    <Transition title={'About'}>
      <main id="main">
        <div className="aboutPage">
          <div className="about-photo-section">
          <div className="about-photo-inner">
              <TextBlock value={'about pixelflakes'} color='#fff' blockSize={size()}/>
              <div className="about-photo">
                <div className="creative-text">
                  <h1>Creative OutStanding</h1>
                  <h1>work is contagious.</h1>
                </div>
                <div className="image-wrap">
                  <img src={img} alt="" />
                </div>
              </div>
          </div>
          </div>
          <div className="about-job-section">
            <div className="about-job-inner">
              <div className="job-photo">
                <div className="image-wrap">
                  <img src={img2} alt="" />
                </div>
                <div className="ig-link">
                  <img src={'./socialIcons/social3.png'} style={ {filter:'invert(1)'} } alt="" />
                  <h2>pixelflakesldn</h2>
                </div>
              </div>
              <div className="job-content">
                <div className="job-paras">
                  <p style={{position:'relative',left:left()}}>Pixelflakes is a London based</p>
                  <p>{value}</p>
                </div>
                <div className="job-button">
                  <Button title={'Job Openings'}/>
                </div>
              </div>
            </div>
          </div>
          {/* <Team/> */}
          <div style={{width:'100%', backgroundColor:'#fff', paddingTop:'10vh'}}>
            <VideoSection/>
            <FooterMenu/>
            <FooterBar/>
          </div>
        </div>
      </main>
    </Transition>
  )
}

export default About