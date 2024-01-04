import React from 'react'
import './sketch.css'
import Button from '../button/button'
import Drag from '../drag/drag'
import { useState } from 'react'
import {motion, useSpring} from 'framer-motion'
import gsap from 'gsap'

function Sketch() {
  let [isActive, setActive] = useState(false)

  const manageClick = () => {
    setActive(true)
  }

  const manageMoveBack = () => {
    setActive(false)
  }

  let click = {
    initial:{
      pointerEvents:"all"
    },
    true:{
      pointerEvents:'none'
    }
  }

  let content = {
    initial: {
      pointerEvents: 'all',
      opacity: 1,
      rotateX: '0deg',
    },
    show:{
      pointerEvents: 'all',
      opacity: 1,
      rotateX: '0deg',
      transition: {duration:.7, ease: [0.76, 0, 0.24, 1]}
    },
    hide:{
      pointerEvents: 'none',
      opacity: 0,
      rotateX: '50deg',
      transition: {duration:.7, ease: [0.76, 0, 0.24, 1]}
    }
  }

  let moveBack = {
    initial:{
      opacity:0,
      pointerEvents: 'none',
      transition: {duration:.5, ease: [0.76, 0, 0.24, 1]}
    },
    show: {
      opacity: 1,
      pointerEvents: 'all',
      transition: {duration:.7, ease: [0.76, 0, 0.24, 1]}
    }
  }

  let springMouse = {
    x: useSpring(0,{stiffness:120, damping: 20, mass: 0.25}),
    y: useSpring(0,{stiffness:120, damping: 20, mass: 0.25})
  }

  let mouseMove = (e) =>{
    let {clientX, clientY} = e
    springMouse.x.set(clientX)
    springMouse.y.set(clientY)
  }

  let hidedragBtn = () => {
    console.log('leave')
    gsap.to('.dragButton',{
      opacity: 0,
      duration: .5,
      ease: 'power4.inOut'
    })
  }

  let showdragBtn = () => {
    console.log('enter')
    gsap.to('.dragButton',{
      opacity: 1,
      duration: .5,
      ease: 'power4.inOut'
    })
  }

  return (
    <div className='sketch-wrap' onMouseMove={mouseMove}>
      <div className="inner" >
        <motion.div className="sketch-left" variants={content} initial="initial" animate={isActive?'hide':'show'}>
          <h1>Sketch</h1>
          <h1>Studies</h1>
        </motion.div>
        <motion.div className="sketch-right" variants={content} initial="initial" animate={isActive?'hide':'show'}>
          <p style={{alignSelf:'flex-end'}}>Sketches are photographs, in the</p>
          <p >digital sense, of fleeting moments, preversed in order to capture the essence of your design.</p>
          <div className="button-wrap">
            <Button title='About Sketch Studios'/>
          </div>
        </motion.div>
      </div>
      <Drag isActive={isActive}/>
      <motion.div className="preventclickdiv" variants={click} animate={isActive?'true':'initial'} initial="initial"></motion.div>
      <motion.div className="clickdiv" onClick={manageClick} onMouseEnter={showdragBtn} onMouseLeave={hidedragBtn} variants={click} animate={isActive?'true':'initial'} initial="initial"></motion.div>
      <motion.div className="moveBackButton" onClick={manageMoveBack} variants={moveBack} initial="initial" animate={isActive?'show':'initial'}> 
        <div className="box"></div>
        <h2>Click to move back</h2>
      </motion.div>
      <motion.div className="dragButton" style={{left:springMouse.x, top: springMouse.y}}>
        <div className="box"></div>
        <h2>Click to Explore</h2>
      </motion.div>
    </div>
  )
}

export default Sketch

