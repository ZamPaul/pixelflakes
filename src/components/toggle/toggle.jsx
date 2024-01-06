import React, { useEffect, useRef, useState } from 'react'
import './toggle.css'
import {motion, AnimatePresence} from 'framer-motion'
import FullPageMenu from '../fullPageMenu/fullPageMenu'
import { overlay, dataLine, lines } from './data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function Toggle( { pageTitle } ) {

  const toggle = useRef(null)
  const menu = useRef(null)

  const [isHover, setHover] = useState(false)

  const [isActive, setActive] = useState(false)


  // const getLineColor = () => {
  //   if(pageTitle=='About'){
  //     return '#121212'
  //   }else{
  //     return '#fff'
  //   }
  // }

  // const getOverlayColor = () => {
  //   if(pageTitle=='About'){
  //     return '#fff'
  //   }else{
  //     return '#121212'
  //   }
  // }

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)

  },[])


  const setTrue = ()=>{
    setHover(true)
  }

  const setFalse = ()=>{
    setHover(false)
  } 

  let setMenuActive = () => {
    setActive(!isActive)
  }

  const openMenu = {
    initial: 'initialMenu',
    open: 'openMenu',
    close: 'closeMenu'
  }

  const closeMenu = {
    initial: 'initial',
    open: 'open',
    close: 'close'
  }

  const getInitial = () => {
    if(isActive){
      return openMenu.initial
    }else{
      return closeMenu.initial
    }
  }

  const getVariants = () => {
    if(!isHover && !isActive){
      return closeMenu.close
    }else if(isHover && !isActive){
      return closeMenu.open
    }else if(!isHover && isActive){
      return openMenu.close
    }else{
      return openMenu.open
    }
  }

  return (
    <>
    <div className='toggle' ref={toggle} onClick={setMenuActive} onMouseEnter={setTrue} onMouseLeave={setFalse}>
      <div className="toggle-wrap">
        <motion.div className="toggle-overlay" style={{backgroundColor:"#121212"}} variants={overlay} initial={getInitial} animate={getVariants}></motion.div>
        <motion.div className="lines" variants={lines} animate={getVariants} initial={getInitial}>
          {
            dataLine.map( (elem,i) => {
              let style = {
                left: elem.left,
                top: elem.top,
                transform: elem.transform,
                backgroundColor: "#fff",
              }
              return (
                <motion.div className="line" style={style} key={i} variants={elem.variant} animate={getVariants} initial={getInitial}></motion.div>
              )
            })
          }
        </motion.div>
      </div>
    </div>
    <AnimatePresence>
        {isActive && <FullPageMenu />}
    </AnimatePresence>
    </>
  )
}

export default Toggle
