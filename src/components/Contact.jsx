import React from 'react'
import Transition from './transition/transition'
import gsap from 'gsap'
import { useEffect } from 'react'
import Header from './header/header'

function Contact() {

  return (
    <Transition title={'Contact'}>
     <main id="main">
        <div className="pages-wrap">
          {/* <h1>Contact</h1> */}
        </div>
      </main>
    </Transition>
  )
}

export default Contact