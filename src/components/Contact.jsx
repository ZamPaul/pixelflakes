import React from 'react'
import Transition from './transition/transition'
import gsap from 'gsap'
import { useEffect } from 'react'
import Header from './header/header'
import VideoSection from './videoSection/videoSection'
import FooterMenu from './footerMenu/footerMenu'
import FooterBar from './footerBar/footerBar'

function Contact() {

  return (
    <Transition title={'Contact'}>
      <main id="main">
        <div className="contactPage">
          <VideoSection/>
          <FooterMenu/>
          <FooterBar/>
        </div>
      </main>
    </Transition>
  )
}

export default Contact