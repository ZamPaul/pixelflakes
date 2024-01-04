import React from 'react'
import FooterNav from './footerNav'
import './footerMenu.css'
import Button from '../button/button'
import IconList from '../iconList/iconList'

function FooterMenu() {
  return (
    <div className='footer-section'>
        <div className="footer-section-inner">
            <div className="left">
                <FooterNav/>
                <div className="icons-wrap">
                    {
                        [...Array(4)].map((_,i) => {
                            return (
                                <div className="social-icon" key={i} style={{cursor:"pointer"}}>
                                    <img src={`/socialIcons/social${i+1}.png`} alt="" style={{width:'100%', height:'100%', objectFit: 'cover', pointerEvents:'none'}} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <div className="sign-text">
                    <p>Sign up for our newsletter to receive updates and content.</p>
                </div>
                <div className="sign-up">
                    <Button textColor={'#121212'} title={'Sign Up'} lineColor={'#121212'} initial={'#fff'} up={'#fff'} down={'#121212'} invert={0.07} borderColor={'#12121286'} fontFamily={'a2'} fontWeight={'900'} letterSpacing={'0.4px'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterMenu
