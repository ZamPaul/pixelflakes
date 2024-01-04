import React, { useEffect } from 'react'
import './work.css'
import leftimg from '../../Images/pexels-daka-12567048.jpg'
import rightimg from '../../Images/pexels-fatih-güney-19260502.jpg'
import bottomimg from '../../Images/pexels-gonzalo-carlos-novillo-lapeyra-19286485 (1).jpg'
import Item from '../galleryItem/item'

function Work() {

  let imageCons = document.getElementsByClassName('image-con')
  console.log(imageCons)

  useEffect(()=>{

  },[])

  let item1 = {
    width:'45vw',
    height:'100vh',
  }
  let item2 = {
    width:'33vw',
    height:'73vh',
  }
  let item3 = {
    width:'27vw',
    height:'62vh',
  }

  if(window.innerWidth<=1024 && window.innerHeight>=1000){
    item1.height='42vh'
    item2.height='25vh'
    item3.height='23vh'
  }
  if(window.innerWidth<=576 && window.innerHeight<=1000){
    item1.height='44vh'
    item1.width='90vw'
    item2.width='90vw'
    item3.width='90vw'
    item2.height='44vh'
    item3.height='44vh'
  }


  return (
    <div className='work-wrapper'>
      <div className="upper">
        <div className="upper-left">
            <h2>- selected work</h2>
        </div>
        <div className="special">
            <h1 className='first-special-h2'>We specialise in</h1>
            <h1>architectural visualisation, animation and interactive.</h1>
        </div>
      </div>
      <div className="wrapOne">
        <div className="item-one">
            <Item width={item1.width} height={item1.height} image={rightimg} valueTwo='An exemplar heritage-led scheme, featuring new homes, retail and employment spaces, all wrapped in beautiful public realm.'
            valueOne='Office - Fleet House'/>
        </div>
        <div className="item-two">
            <Item width={item2.width} height={item2.height} image={leftimg} valueTwo="Exploring architectural essence: Drawing inspiration from Herzog and de Meuron's 'Jenga Tower' at 56 Leonard Street to craft unique marketing collateral - CGIs, brochures, and apps."
            valueOne='Residential - 56 Leonard Street'/>
        </div>
      </div>
      <div className="wrapTwo">
        <div className="item-three">
            <Item width={item3.width} height={item3.height} image={bottomimg}
             valueTwo='An exemplar heritage-led scheme,featuring new homes, retail and employment spaces, all wrapped in beautiful public realm.' valueOne='Mixed Used - Faraday Works'/>
        </div>
      </div>
    </div>
  )
}

export default Work
