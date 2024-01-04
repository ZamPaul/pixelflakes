import React, { forwardRef, useEffect, useState } from 'react'
import { useTransform, motion } from 'framer-motion'
import './project.css'

function Project({children ,height , width, key, title, location, setProject, view}){

  const changeProject = () => {
    setProject({ title: title, desc: location })
  }

  const scaling = {
    initial:{
      scale: 1,
    },
    up: {
      scale: 1,
      transition: {duration:.6, ease: [0.87, 0, 0.13, 1]}
    },
    down: {
      scale: 0.6,
      transition: {duration:.6, ease: [0.87, 0, 0.13, 1]}
    }
  }

  return (
    <>
    <motion.div className="project" key={key} style={{width:`${width-2}vw`, height:`${height+10}vh`}} onMouseEnter={changeProject}
    // variants={scaling}
    // animate={view?'down':'up'}
    // initial={'initial'}
    >
        <div className="project-wrap">
            {children}
        </div>
   </motion.div>
   </>
  )
}

export default Project
