import React, { useEffect, useRef } from 'react'
import {animate, motion} from 'framer-motion'
import { slideTop, slideBack } from './data'
import Toggle from '../../components/toggle/toggle'
import Header from '../header/header'
import './transition.css'
import gsap from 'gsap'
import bezier from 'bezier-easing'

const barHeight = Math.ceil(window.innerHeight/50)

const Transition = ( { children , title } ) => {
  let renderCheck = 0;
  const ref = useRef(null)
  const titleRef = useRef(null)

  const ease = bezier(0.33, 1, 0.68, 1)

  // const getVariants = () => {
  //   if(title='Home'){
  //     if(renderCheck>0){
  //       return slideBack
  //     }else{
  //       return firstRender
  //     }
  //   }else{
  //     return slideBack
  //   }
  // }

  useEffect(()=>{
    gsap.to(titleRef.current,{
      opacity: 1,
      top: '50%',
      duration:.5,
      ease:ease,
      onComplete: function(){
        gsap.to(titleRef.current,{
          opacity: 0,
          top: '60%',
          duration:.5,
          delay: .2,
          ease:ease,
        })
      }
    })
  })
  
  return (
    <>
    <Header pageTitle={title}/>
    <Toggle pageTitle={title}/>
    <div className='page' ref={ref}>
      <div className="white-overlay">
        {children}
      </div>
      <div className="slideBack">
        {
          [...Array(50)].map((_,i)=>{
            return (
              <motion.div key={i} className="opacity-bar" style={{height:barHeight}}
              custom={i}
              variants={slideBack}
              animate='enter'
              exit='exit'
              initial='initial'
              >
              </motion.div>
            )
          })
        }
      </div> 
      <div className="slideTop">
        {
          [...Array(50)].map((_,i)=>{
            return (
              <motion.div key={i} className="opacity-bar" style={{height:barHeight}}
              custom={i}
              variants={slideTop}
              animate='enter'
              exit='exit'
              initial='initial'
              >
              </motion.div>
            )
          })
        }
      </div> 
    </div>
    <div className="title" ref={titleRef}>
      <h1>{title}</h1>
    </div>
    </>
  )
}

export default Transition
