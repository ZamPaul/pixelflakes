import React, { useEffect } from 'react'
import Nav from './nav'
import './header.css'
import gsap from 'gsap'
import Svg from '../svg/svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bezier from 'bezier-easing'
import {motion, useMotionValue} from 'framer-motion'

function Header({pageTitle}) {

  useEffect(()=>{
    let ease = bezier(0.65, 0, 0.35, 1)

    let anim1 = gsap.to('.svg-one',{
      opacity: 0,
      rotateX: '90deg',
      ease: ease
    })
    let anim2 = gsap.to('.svg-two',{
      opacity: 1,
      rotateX: '0deg',
      ease: ease
    })

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: '.header',
      start: 'top top',
      end: 'top top',
      animation: anim1,
      scrub: 3,
      // markers: true
    })
    ScrollTrigger.create({
      trigger: '.header',
      start: 'top top',
      end: 'top top',
      animation: anim2,
      scrub: 3,
      // markers: true
    })

    // only runs on aboutPage =>

    if(pageTitle==='About'){
      setTimeout(() => {
        gsap.to(".letter",{
          fill: '#fff'
        })
        gsap.to('.shape',{
          fill: '#fff',
        })
        gsap.to('.link-tag',{
          color: '#fff'
        })
      }, 900);
    }

  },[])

  let svgwi = '13vw'
  let svgwi2='3.5vw'
  if(window.innerWidth<576 && window.innerHeight<1000){
    svgwi = '40vw'
    svgwi2='8vw'
  }

  const generateLetters = () => {
    let alphabets = [];
    let startCode = 'A'.charCodeAt(0)
    let endCode = 'Z'.charCodeAt(0)
    for (let currentCode = startCode ; currentCode <= endCode ; currentCode++){
      alphabets.push(String.fromCharCode(currentCode))
    }
    return alphabets
  }

  return (
    <>
    <div className='header'>
        <div className="header-wrap">
            <div className="svg-wrap">
                <div className="svg-one">
                  <svg viewBox="0 0 188 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="wordmark" data-v-693761e8="" style={{opacity: 1, visibility: 'inherit', width:svgwi}}><path className='letter' d="M23.7719 16.7556H20.0234L20.2288 11.7536L20.0278 0.289062H23.8374L23.6321 11.465L23.7719 16.7556Z" fill="currentColor" data-v-693761e8=""></path><path className='letter' d="M46.2169 16.7548H41.7432L40.9263 15.0583L38.3967 11.1231L35.6269 15.2507L34.8929 16.7592H30.9609L36.2035 8.63086L30.9871 0.323242H35.4652L36.2778 2.01975L38.6719 5.73631L41.1098 1.87109L41.8437 0.323242H45.8718L40.8826 8.1499L46.2169 16.7548Z" fill="currentColor" data-v-693761e8=""></path><path className='letter' d="M53.5273 0.463867L53.7239 11.7753L53.5273 16.5938H63.6543L63.8902 14.049L63.6893 13.7823L59.7093 13.9528L56.8695 13.9178L56.7996 11.4736L56.8346 9.76839L59.4078 9.73341L62.2519 9.80337L62.4878 7.25862L62.2869 7.02251L59.6787 7.09247L56.8695 7.02251L56.935 3.14417H59.8447L63.7242 3.27534L63.9558 0.734958L63.7548 0.463867H53.5273Z" fill="currentColor" data-v-693761e8=""></path><path className='letter' d="M71.7422 0.463867L71.9432 11.7753L71.7422 16.5938H80.4668L80.7027 14.049L80.5017 13.7823H75.0843L75.0188 11.4736L75.2198 0.463867H71.7422Z" fill="currentColor" data-v-693761e8=""></path><path className='letter' d="M103.156 0.4375L103.357 11.749L103.156 16.5674H111.881L112.117 14.0226L111.916 13.7559H106.498L106.433 11.4473L106.634 0.4375H103.156Z" fill="currentColor" data-v-693761e8=""></path><path className='letter' d="M127.397 0.424234L127.362 0.310547H123.076L117.523 16.764H121.228L121.665 14.3767L122.063 13.148L124.719 13.0868L127.738 13.148L128.135 14.5253L128.572 16.764H132.408L127.397 0.424234ZM125.003 10.4109L122.818 10.3802L125.025 3.65109H125.261L127.165 10.3802L125.003 10.4109Z" fill="currentColor" data-v-693761e8=""></path><path className='letter' d="M149.383 17.0003L148.88 16.6899C146.661 13.6598 144.813 11.0058 143.38 8.81954L143.328 11.443L143.463 16.7205H139.68L139.924 11.7316L139.684 0.262695H143.498L143.402 7.42473L147.579 1.86738L148.553 0.262695H152.651L146.792 8.02375C148.675 10.6472 150.724 13.2444 152.909 15.7411L152.957 15.8023L152.861 16.3532L152.756 16.3795C151.657 16.6361 150.546 16.8375 149.427 16.9829L149.383 17.0003Z" fill="currentColor" data-v-693761e8=""></path><path className='letter' d="M170.138 16.7025H159.688L159.897 11.7135L159.692 0.249023H170.177L170.465 0.629423L170.208 3.3928L166.175 3.25288H163.436L163.375 6.80767L165.996 6.87325L168.674 6.80329L168.971 7.14871L168.718 9.91209L165.721 9.84213L163.314 9.8771L163.283 11.4249L163.344 13.703L166.031 13.7336L170.085 13.5631L170.374 13.9478L170.138 16.7025Z" fill="currentColor" data-v-693761e8=""></path><path className='letter' d="M181.517 17.0004C179.936 16.9594 178.379 16.6027 176.938 15.951L176.82 15.8985L177.353 12.5536L177.886 12.217L177.978 12.2957C178.615 12.8491 179.34 13.2924 180.123 13.6074C181.626 14.202 183.033 14.237 183.784 13.568C183.957 13.4243 184.096 13.2437 184.191 13.0395C184.285 12.8353 184.333 12.6125 184.33 12.3875C184.332 12.1622 184.278 11.9401 184.172 11.741C184.067 11.5419 183.914 11.3719 183.727 11.2463C183.08 10.7992 182.389 10.4183 181.665 10.1094C180.882 9.75953 180.121 9.35936 179.389 8.9114C178.734 8.54932 178.19 8.01422 177.817 7.36432C177.444 6.71442 177.257 5.97463 177.275 5.22545C177.264 4.29253 177.535 3.3781 178.052 2.60199C178.606 1.8053 179.359 1.16882 180.237 0.756829C181.27 0.279418 182.403 0.0560424 183.54 0.105328C184.902 0.148237 186.246 0.435544 187.507 0.95358L187.633 1.00168L187.057 4.13671L186.388 4.40343L186.314 4.35097C185.372 3.58654 184.213 3.13966 183.002 3.07421C182.459 3.04631 181.924 3.22251 181.504 3.5683C181.335 3.70485 181.198 3.87726 181.103 4.0731C181.009 4.26894 180.959 4.48331 180.958 4.70075C180.958 4.91755 181.012 5.13086 181.115 5.32162C181.218 5.51237 181.366 5.67463 181.547 5.79386C182.181 6.24072 182.859 6.62164 183.57 6.93069C184.357 7.28459 185.123 7.68313 185.864 8.12437C186.526 8.49057 187.076 9.03047 187.455 9.68607C187.834 10.3417 188.027 11.0881 188.013 11.8453C188.019 12.7706 187.748 13.6765 187.236 14.4469C186.689 15.2535 185.934 15.897 185.051 16.3096C183.94 16.8041 182.732 17.0403 181.517 17.0004Z" fill="currentColor" data-v-693761e8=""></path><path className='letter' d="M90.4959 16.7289H86.7475L86.9397 11.7531L86.7344 0.28418H96.5948L96.8832 0.668955L96.6298 3.42796L92.6279 3.29241H90.4872L90.426 6.11263L90.3867 10.3495L90.3561 11.4645L90.4959 16.7289Z" fill="currentColor" data-v-693761e8=""></path><path className='letter' d="M7.01636 8.20268C7.7678 7.62552 8.14789 6.7248 8.14789 5.52676C8.1774 5.17214 8.13453 4.81523 8.02187 4.47772C7.90921 4.14022 7.72912 3.82918 7.49256 3.56353C6.90634 3.09711 6.1695 2.86219 5.42173 2.9033L3.83584 2.99949L3.77031 8.79296L3.70041 11.5126L3.84458 16.93H0L0.214069 11.8099L0 0.0349869L6.55326 0C8.3008 0 9.68135 0.437241 10.6338 1.35108C11.1157 1.81579 11.4935 2.37771 11.7421 2.9996C11.9906 3.62149 12.1043 4.28915 12.0755 4.95833C12.127 6.22413 11.842 7.48095 11.2498 8.60057C10.821 9.3229 10.2376 9.94112 9.54155 10.4107L9.44106 10.4807L7.06005 8.51749" fill="currentColor" data-v-693761e8=""></path></svg>
                </div>
                <div className="svg-two">
                <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="brandmark" data-v-693761e8="" style={{opacity: 1, visibility: 'inherit', width:svgwi2}}><path className='shape' d="M35.2605 38.1535L35.254 25.3652L49.9978 25.3019V0H32.5202C31.7441 5.31938 29.5531 10.3532 25.9276 15.097C20.5886 22.082 12.5071 26.1107 1.68302 27.1921L0 27.3599V50H50V38.0924L35.2605 38.1535Z" fill="currentColor" data-v-693761e8=""></path><path className='shape' d="M14.2075 7.48419C16.017 5.21255 17.2139 2.71201 17.8352 0H0V14.5019C6.28297 13.8108 11.0246 11.4803 14.2075 7.48419Z" fill="currentColor" data-v-693761e8=""></path></svg>
                </div>
            </div>
            <Nav/>
        </div>
    </div>
    </>
  )
}

export default Header
