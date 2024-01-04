import React, { useEffect, useRef, useState } from 'react'
import Transition from './transition/transition'
import './gallery/gallery.css'
import ProjectsGallery from './gallery/projectsGallery/projectsGallery'
import Progress from './gallery/progress/progress'
import { useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import Header from './header/header'

function Gallery() {

  const scroll = useRef(null)

  return (
    <Transition title={'Gallery'}>
      <main id="main">
        <div className="galleryPage">
          <ProjectsGallery/>
          <div className="scroll" ref={scroll}></div>
        </div>
      </main>
    </Transition>
  )
}

export default Gallery