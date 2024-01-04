import React, { useEffect, useRef, useState } from 'react'
import './item.css'
import { motion } from 'framer-motion'

function Item({width, height, image, valueOne, valueTwo}) {
  const item = useRef(null)

  const [isHover, setHover] = useState(false)

  let managetrue = () => {
    if(window.innerWidth>=1024 && item.current){
      setHover(true)
    }
  }

  let managefalse = () => {
    if(window.innerWidth>=1024 && item.current){
      setHover(false)
    }
  }

  let variantsfront = {
    show: {
      opacity: 1,
      rotateX: '0deg',
      transition: {duration: .7, delay: 0.1 , ease: [0.76, 0, 0.24, 1]}
    },
    hide: {
      opacity: 0,
      rotateX: '90deg',
      transition: {duration: .7, ease: [0.76, 0, 0.24, 1]}
    }
  }

  let variantsback = {
    show:(i)=> ({
      opacity: 1,
      rotateX: '0deg',
      transition: {duration: .7, delay: 0.1 , ease: [0.76, 0, 0.24, 1]}
    }),
    hide: {
      opacity: 0,
      rotateX: '90deg',
      transition: {duration: .7, ease: [0.76, 0, 0.24, 1]}
    }
  }

  // useEffect(()=>{
  //   if(window.innerWidth>=1024 && item.current){
  //     item.current.addEventListener('mouseenter', managetrue)
  //     item.current.addEventListener('mouseleave',managefalse)
  //   }
    
  //   return () => {
  //     item.current.removeEventListener('mouseenter', managetrue)
  //     item.current.removeEventListener('mouseleave', managefalse)
  //   }
  // })

  return (
    <div className='item' style={{width:width}} ref={item} onMouseEnter={managetrue} onMouseLeave={managefalse}> 
      <div className="image-wrap" style={{width:width, height:height}}>
        <img src={image} alt="image" security='hell'/>
      </div>
      <div className="content-wrap">
        <motion.div className="front-content" variants={variantsfront} initial="show" animate={isHover ? 'hide' : 'show'}>
            <h2>
              {
                valueOne.split(' ').map((span,i)=>{
                  return (
                    <span key={i}>{span}</span>
                  )
                })
              }
            </h2>
        </motion.div>
        <motion.div className="back-content" variants={variantsback} initial='hide' animate={isHover ? 'show' : 'hide'}>
            <p>
              {
                valueTwo.split('').map((span,i)=>{
                  return (
                    <span key={i}>{span}</span>
                  )
                })
              }
            </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Item
