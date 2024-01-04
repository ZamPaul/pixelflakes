import React from 'react'
import Transition from './transition/transition'
import './case/case.css'
import Item from './galleryItem/item'
import planeImage from './case/caseImages/planeCse.webp'
import street from './case/caseImages/low-angle-shot-tall-city-building-with-blue-sky-background-new-york (1).jpg'
import buil from './case/caseImages/modern-tokyo-street-background (1).jpg'
import lon from './case/caseImages/beautiful-london-streets-cityscape (1).jpg'
import VideoSection from './videoSection/videoSection'
import FooterMenu from './footerMenu/footerMenu'
import FooterBar from './footerBar/footerBar'
import gsap from 'gsap'
import { useEffect } from 'react'
import Header from './header/header'

function Case() {
  
  let item1 = {
    width:'46vw',
    height:'100vh',
  }
  let item2 = {
    width:'30vw',
    height:'60vh',
  }
  let item3 = {
    width:'25vw',
    height:'50vh',
  }
  let item4 = {
    width:'37vw',
    height:'88vh',
  }

  if(window.innerWidth<=1024 && window.innerHeight>=1000){
    item1.height='50vh'
    item2.height='25vh'
    item3.height='23vh'
    item4.height='40vh'
  }
  if(window.innerWidth<=576 && window.innerHeight<=1000){
    item1.height='44vh'
    item1.width='90vw'
    item2.width='90vw'
    item3.width='90vw'
    item2.height='44vh'
    item3.height='44vh'
    item4.width='90vw'
    item4.height='44vh'
  }

  return (
    <Transition title={'Case Studies'}>
      <main id="main">
        <div className="casePage">
          <div className="main-heading">
            <h1>
              <span className='span-tag'>Case Studies</span>
              <span>04</span>
            </h1>
          </div>
          <div className="cases">
            <div className="cases-wrap">
              <div className="cases-upper">
                <div className="item-wrap">
                  <Item width={item1.width} height={item1.height} valueOne='56 Leonard Street' valueTwo="Exploring architectural essence: Drawing inspiration from Herzog and de Meuron's Jenga Tower at 56 Leonard Street to craft unique marketing collateral - CGIs, brochures, and apps." image={lon} /> 
                </div>
                <div className="item-wrap">
                  <Item valueOne='International Airpot' valueTwo='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam iste voluptates ut eveniet ex provident cum magni voluptatum? Molestiae error officiis libero id blanditiis!' width={item2.width} height={item2.height} image={planeImage}/>
                </div>
              </div>
              <div className="cases-mid">
                <div className="item-wrap">
                  <Item image={buil} valueOne={'Faraday works - Mixed use'} valueTwo={'An exemplar heritage-led scheme featuring new homes, retail and employment spaces, all wrapped in beautiful public realm.'} width={item3.width} height={item3.height} />
                </div>
              </div>
              <div className="cases-lower">
                <div className="item-wrap">
                  <Item image={street} valueOne={'Fleet House - Office'} valueTwo={"HOK transforms London's 10 New Bridge Street into a sustainable oasis: Atenor's bold retrofit sets new standards for urban developments."} width={item4.width} height={item4.height}/>
                </div>
              </div>
            </div>
          </div>
          <VideoSection/>
          <FooterMenu/>
          <FooterBar/>
        </div>
      </main>
    </Transition>
  )
}

export default Case