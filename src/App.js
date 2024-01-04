import React, { useEffect, useRef } from 'react'
import Home from './components/Home'
import Gallery from './components/Gallery';
import Header from './components/header/header';
import { useLocation } from 'react-router-dom';
import About from './components/About'
import Case from './components/Case'
import Contact from './components/Contact'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis'

function App() {

  const location = useLocation();

  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])
  
  return (
    <>
      {/* <Header /> */}
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route path='*' element={<div>Nhi pata</div>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/case-studies' element={<Case/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
