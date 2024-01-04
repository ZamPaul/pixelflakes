import React from 'react'
import './footerNav.css'
import { Link } from 'react-router-dom'

function FooterNav() {
  let data = [
    {
      text: 'Gallery',
      src: '/gallery'
    },
    {
      text: 'Case Studies',
      src: '/case-studies'
    },
    {
      text: 'About',
      src:'/about'
    },
    {
      text: 'Contact',
      src: '/contact'
    }
]
  return (
    <div className='foot-nav'>
      {
        data.map((elem,i)=>{
          return (
            <div className="nav-item" key={i}>
              <Link to={elem.src} className='foot-tag'>{elem.text}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default FooterNav
