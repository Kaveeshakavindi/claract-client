import React from 'react'
import './Footer.css'
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <button className='line-button1'>Newsletter</button>
            <div className='footer-email'>
                <div className='footer-email-title'>
                Stay in the loop with Claract! Subscribe to our newsletter for the latest updates on skincare innovations, promotions, and exclusive offers.
                </div>
                <div className='email-input'>
                <input
                placeholder='Email Address'
                className='input'
                ></input>
                <button className='email-submit'>Subscribe <FaArrowRight /></button>
                </div>
            </div>
        </div>
        <div className='horizontal-line'></div>
        <div className='footer-final'>
            <div className='rights'>
                @2024. All Rights Reserved
            </div>
            <div className='logo'>
                claract.
            </div>
            <div className='socials'>
                fb tw in
            </div>
        </div>
    </footer>
  )
}

export default Footer