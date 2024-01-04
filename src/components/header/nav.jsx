import React, { useEffect } from 'react'
import './nav.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrowserRouter as Router, Link, Routes, NavLink } from 'react-router-dom'

function Nav() {
    const data = [
        {text:"Gallery", src:"/gallery"},
        {text:"Case Studies", src:"/case-studies"},
        {text:"About", src:"/about"},
        {text:"Contact", src:"/contact"}
    ]
    
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        const anim = gsap.to('.nav',{
            opacity: 0,
            rotateX: '90deg',
            ease: 'power1.inOut'
        })

        ScrollTrigger.create({
            animation: anim,
            trigger: '.header',
            start: 'top top',
            end: 'top top',
            scrub: 2.5,
            // markers: true,
            // invalidateOnRefresh: true,
        })
    },[])

    return (
        <nav className='nav'>
            {
                data.map((elem,i)=>{
                    return (
                        <div className="nav-link" key={i}>
                            <NavLink className='link-tag' to={elem.src}>{elem.text}</NavLink>
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default Nav
