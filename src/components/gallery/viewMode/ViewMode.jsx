import React, { useState } from 'react'
import './index.css'
import { text, button } from './data'
import {motion} from 'framer-motion'

function ViewMode({view, setView}) {

  let blocks = [
    {
        position: {
            left: 0,
            top: 0
        }
    },
    {
        position:{
            left: 0,
            top: 'calc(100% - 5px)'
        },
    },
    {
        position: {
            left: 'calc(100% - 5px)',
            top: 'calc(100% - 5px)'
        }
    },
    {
        position: {
            left: 'calc(100% - 5px)',
            top: 0
        }
    }
  ]
  const [isHover, setHover] = useState(false)

  const manageHover = () => {
    setHover(!isHover)
  }

  const changeView = () => {
    setView(!view)
  }

  return (
    <div className='view-button'>
      <div className="text">
        <motion.h2
        variants={text}
        animate={isHover?'in':'out'}
        initial='initial'
        >Change View
        </motion.h2>
      </div>
      <motion.div className="button" onMouseEnter={manageHover} onMouseLeave={manageHover} onClick={changeView}>
        <motion.div className="boundaries"  variants={button} animate={isHover?"in":'out'} initial='initial'></motion.div>
        <div className="blocks-wrap">
            {
                blocks.map( (elem,i) => {
                    return (
                        <div className="block"
                         key={i}
                         style={ {left: elem.position.left, top: elem.position.top} }
                        ></div>
                    )
                } )
            }
        </div>
      </motion.div>
    </div>
  )
}

export default ViewMode
