import React from 'react'
import { useEffect } from 'react'
import Hero from './Hero/hero'
import Work from './work/work'
import Sketch from './sketch/sketch'
import MarqueeSection from './marqueeSection/Section'
import VideoSection from './videoSection/videoSection'
import FooterMenu from './footerMenu/footerMenu'
import FooterBar from './footerBar/footerBar'
import { Link } from 'react-router-dom'
import Transition from './transition/transition'
import gsap from 'gsap'
import Header from './header/header'

function Home() {

  return (
    <Transition title={'Home'}>
      <main id='main'>
        <div className='Home-page'>
          <Hero/>
          <Work/>
          <Sketch/>
          <MarqueeSection/>
          <VideoSection/>
          <FooterMenu/>
          <FooterBar/>
        </div>
      </main>
    </Transition>
  )
}

export default Home