import React from 'react'
import './text.css'

const TextBlock = ({value, color, blockSize}) => {

  return (
    <div className='text-block'>
      <div className="block" 
      style={{backgroundColor:color, width:blockSize, height:blockSize}}
      >
      </div>
      <h2 style={{color:color}}>{value}</h2>
    </div>
  )
}

export default TextBlock
