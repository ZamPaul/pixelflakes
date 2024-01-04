import React from 'react'
import './index.css'
import {data} from '../data'
import Project from '../project/project'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Progress from '../progress/progress'
import ViewMode from '../viewMode/ViewMode'
import {motion} from 'framer-motion'

function ProjectsGallery({}) {

  let horiScroll = useRef(null)

  let [project, setProject] = useState( {title:'Scroll to Explore' , desc:'22 items'} )

  const removeProjects = () => {
    setProject( {title:'Scroll to Explore' , desc:'22 items'} )
  }

  const [view, setView] = useState(false)
  
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


  useEffect(()=>{

    if(horiScroll.current){
        let xMove = horiScroll.current.getBoundingClientRect().width - window.innerWidth*0.96

        let scroll = gsap.to(horiScroll.current,{
            x: -xMove
        }) 

        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
            trigger:'.scroll',
            start: 'top top',
            end: 'bottom bottom',
            animation: scroll,
            pin: '.pin-container',
            pinnedContainer: '.pin-container',
            invalidateOnRefresh: true,
            scrub: 1,
        })
    }

  },[])

  return (
    <>
    <div className="pin-container">
        <motion.div className="projects" variants={scaling} animate={view?'down':'up'} initial='initial'>
            <div className="horizontal-scroll" ref={horiScroll} onMouseLeave={removeProjects}>
            {
                data.map( (elem,i) => {

                let project = elem.check==="img" ? <img src={`/projects/project${i+1}.webp`} alt="" /> :
                <video loop autoPlay muted><source src={`/projects/project${i+1}.mp4`}/></video>;

                return  <Project 
                            key={i} 
                            width={elem.width}
                            height={elem.height}
                            title={elem.valueOne}
                            location={elem.valueTwo}
                            setProject={setProject}
                            view={view}
                        >
                            {project}
                        </Project>
                })
            }
            </div>
        </motion.div>
    </div>
    <Progress project={project}/>
    <ViewMode view={view} setView={setView}/>
    </>
  )
}

export default ProjectsGallery
