import React, { useState } from 'react'
import './index.css'
import arrowImage from '../../Images/right-up.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

function ButtonType2({text, textColor, invert, leftValue, initial, src, width, height, position, link}) {
  let [isHover, setHover] = useState(false)

  const textWrap = {
    initial :{
        left: initial,
    },
    in: {
        left: leftValue,
        transition: {duration: 0.5, ease:[0.5, 1, 0.89, 1]}
    },
    out: {
        left: initial,
        transition: {duration:0.5, ease:[0.5, 1, 0.89, 1]}
    }
  }

  const arrow = {
    initial: {
        scale: 0,
    },
    in: {
        scale: 1,
        transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}
    },
    out:{
        scale: 0,
        transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}
    }
  }

  const image = {
    initial: {
        scale: 0,
    },
    in: {
        scale: 1,
        transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
    },
    out: {
        scale: 0,
        transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
    }
  }

  return (
    <>
    <motion.div className="vignette" style={{width:width, height:height,left:position.left, top:position.top}}
    variants={image}
    animate={isHover?"in":'out'}
    initial='initial'
    >
        <img src={src} alt=""/>
    </motion.div>
    <div className='buttonType2' onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} >
        <motion.div className="arrow-left"
        variants={arrow}
        initial='initial'
        animate={isHover?'in':'out'}
        >
            <img src={arrowImage} alt="" style={{filter:`invert(${invert})`}}/>
        </motion.div>
        <motion.div className="text-wrap" style={{left:'15px'}}
        variants={textWrap}
        initial='initial'
        animate={isHover?'in':'out'}
        >
            <Link className='menu-tag' to={link} style={{color:textColor}}>{text}</Link>
        </motion.div>
    </div>
    </>
  )
}

ButtonType2.defaultProps = {
    text:"Enter text",
    textColor: '#fff',
    invert: 1,
    leftValue: '20px',
    initial: '0px'
}

export default ButtonType2


