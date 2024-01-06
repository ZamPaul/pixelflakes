import React, { useEffect, useRef, useState } from 'react'
import './button.css'
import arrow from '../../Images/right-up.png'
import gsap from 'gsap'
import {motion, useMotionValue } from 'framer-motion'

function Button({title, invert, lineColor, textColor, initial, down, up, borderColor, fontWeight, fontSize, fontFamily, letterSpacing}) {
  let textref = useRef(null)
  let btnref = useRef(null)

  const [isHover, setHover] = useState(false)

  const managetrue = () => {
    if(btnref.current){
      setHover(true)
    }
  }
  const managefalse = () => {
    if(btnref.current){
      setHover(false)
    }
  }

  
  let variantsarrow = {
    initial: {
        scale: 1,
        backgroundColor: initial
    },
    down:{
        scale: 0.4,
        backgroundColor: down,
        transition: {duration: 0.4, ease: [0.65, 0, 0.35, 1]}
    },
    up:{
        scale: 1,
        backgroundColor: up,
        transition: {duration: 0.4, ease: [0.65, 0, 0.35, 1]}
    }
  }
  let line = {
    initial: {
        width: '100%',
    },
    shrink: {
      width: '0%',
      transition: {duration:.4, ease:[0.65, 0, 0.35, 1]}
    },
    grow:{
      width: '100%',
      transition: {duration:.4, ease:[0.65, 0, 0.35, 1]}
    }
  }
  let text = {
    initial: {
      x:"0px"
    },
    left: {
      x:'-15px',
      transition: {duration:.4, ease:[0.65, 0, 0.35, 1]}
    },
    right:{
      x:'0px',
      transition: {duration:.4, ease:[0.65, 0, 0.35, 1]}
    }
  }

  return (
    <div className='button-wrap' ref={btnref} onMouseEnter={managetrue} onMouseLeave={managefalse}> 

      <motion.div className="arrow-wrap"
       variants={variantsarrow}
       animate={isHover ? 'down' : 'up'}
       initial='initial'
       style={{ border:`0.1px solid ${borderColor}`}}>
        <img src={arrow} alt="image" style={{filter:`invert(${invert})`}}/>
      </motion.div>

      <motion.div className="text-wrap"
       variants={text} initial='initial' 
       animate={isHover?'left':'right'}>
        <p style={{ letterSpacing:letterSpacing, color:textColor, fontFamily:fontFamily }}
          ref={textref}>
            {title}
        </p>
        <motion.div className="underline"
         style={{backgroundColor:lineColor}} 
         variants={line} animate={isHover?'shrink':'grow'} 
         initial='initial'></motion.div>
      </motion.div>
      
    </div>
  )
}

Button.defaultProps = {
    title:"Enter text here",
    textColor: '#fff',
    initial: '#121212',
    fontWeight: '100',
    letterSpacing: '0.7px',
    fontFamily: 'a1',
    down: '#f1efe7',
    up:"#121212",
    borderColor: '#f1efe763',
    invert:1,
    lineColor: '#fff'
}

export default Button
