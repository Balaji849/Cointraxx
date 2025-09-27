import React from 'react'
import './Footer.css';
import logo from '../../assets/new_logo.png';
import google from '../../assets/google-logo.png';
import apple from '../../assets/apple-logo.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <img src={logo} style={{height:"75px"}} alt="" />
        <div className='logo-foot'>
          <h1>Download our app and Track anywhere</h1>
          <div className='store-logo'>
               <img src={google}  alt="" />
               <img src={apple} style={{height:"47px"}} alt="" />
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Footer