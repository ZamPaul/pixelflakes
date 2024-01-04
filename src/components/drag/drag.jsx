import React, { useState } from 'react'
import './drag.css'
import { motion} from 'framer-motion'

function Drag({isActive}) {

  let data = [
    {
      position: {
        top: '10%',
        left:'20%'
      },
      dimensions:{
        width: '31vw',
        height: '26vw'
      }
    },
    {
      position: {
        top: '80%',
        left:'90%'
      },
      dimensions:{
        width: '31vw',
        height: '26vw'
      }
    },
    {
      position: {
        top: '0%',
        left:'0%'
      },
      dimensions:{
        width: '16vw',
        height: '22vw'
      }
    },
    {
      position: {
        top: '90%',
        left:'20%'
      },
      dimensions:{
        width: '31vw',
        height: '26vw'
      }
    },
    {
      position: {
        top: '50%',
        left:'10%'
      },
      dimensions:{
        width: '29vw',
        height: '21vw'
      }
    },
    {
      position: {
        top: '90%',
        left:'50%'
      },
      dimensions:{
        width: '31vw',
        height: '26vw'
      }
    },
    {
      position: {
        top: '50%',
        left:'30%'
      },
      dimensions:{
        width: '27vw',
        height: '17vw'
      }
    },
    {
      position: {
        top: '10%',
        left:'89%'
      },
      dimensions:{
        width: '19vw',
        height: '28vw'
      }
    },
    {
      position: {
        top: '20%',
        left:'68%'
      },
      dimensions:{
        width: '16vw',
        height: '23vw'
      }
    },
    {
      position: {
        top: '50%',
        left:'89%'
      },
      dimensions:{
        width: '20vw',
        height: '15vw'
      }
    },
    {
      position: {
        top: '68%',
        left:'70%'
      },
      dimensions:{
        width: '21vw',
        height: '27vw'
      }
    },
    {
      position: {
        top: '0%',
        left:'43%'
      },
      dimensions:{
        width: '21vw',
        height: '29vw'
      }
    },
    {
      position: {
        top: '50%',
        left:'50%'
      },
      dimensions:{
        width: '24vw',
        height: '33vw'
      }
    }
  ]

  let mobiledimensions = 0;
  if(window.innerWidth<=576 && window.innerHeight<=1000){
    mobiledimensions='20vw'
  }


  return (
    <div className='drag-wrapper'>
        <motion.div className="canvas-wrapper" drag dragConstraints={{
          top: -0.9*window.innerHeight,
          bottom: 0.9*window.innerHeight,
          left: -0.9*window.innerWidth,
          right: 0.9*window.innerWidth
        }} whileTap={{cursor:'grabbing'}} dragSnapToOrigin={true}>

        {
          data.map((elem,i)=>{
            if(window.innerWidth<=576 && window.innerHeight<=1000){
              elem.dimensions.width = `calc(${elem.dimensions.width} + 25vw)`
              elem.dimensions.height = `calc(${elem.dimensions.height} + 25vw)`
              elem.position.top = `calc(${elem.position.top} + 12%)`
            }
            return (
              <motion.div className="image" animate key={i} style={{ width:elem.dimensions.width, height:elem.dimensions.height, left: isActive ? elem.position.left : '50%', top: isActive ? elem.position.top : '50%' }}>
                <img src={`./Canvas/image${i+1}.webp`} alt="image" />
              </motion.div>
            )
          })
        }

        </motion.div>
    </div>
  )
}

export default Drag
