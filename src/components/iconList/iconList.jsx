import React from 'react'
import './iconList.css'
import {motion} from 'framer-motion'

function IconList({color, variants}) {

  let invert = 0
  if(color==="#fff"){
    invert = 1
  }

  return (
    <div className='icon-list'>
        {
            [...Array(4)].map((_,i) => {
                return (
                    <motion.div className="icon-wrap" key={i} style={{cursor:"pointer", pointerEvents:'all'}}
                    custom={i}
                    variants={variants}
                    animate='in'
                    exit='out'
                    initial='initial'
                    >
                        <img src={`/socialIcons/social${i+1}.png`} alt="" style={{width:'100%', height:'100%', objectFit: 'cover', pointerEvents:'none', filter:`invert(${invert})`}} />
                    </motion.div>
                )
            })
        }
    </div>
  )
}

export default IconList
