import React, { useRef } from 'react'
import './progress.css'
import {motion, useScroll, useTransform} from 'framer-motion'


function Progress({project, width}) {

  const {title, desc} = project
  let scroll = useRef(null)
  
  let {scrollYProgress} = useScroll({
    target: scroll,
    offset: ['start start','end end']
  })

  let progress = useTransform(scrollYProgress, [0,1], [0,180])
  
  return (
    <>
    <div className="tracker" ref={scroll}></div>
    <div className='progress'>
      <div className="content">
        <h2>{title}</h2>
        <h2>{desc}</h2>
      </div>
      <motion.div className="progress-line">
        <motion.div className="line" style={{width:progress}}></motion.div>
      </motion.div>
    </div>
    </>
  )
}

export default Progress
