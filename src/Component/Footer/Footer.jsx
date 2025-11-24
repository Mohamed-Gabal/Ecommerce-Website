import React from 'react'
import "./Footer.css";
import { FaFacebook } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer_content'>
          <div className='footer_name'>
            <h2>CIARA COLLECTIONS</h2>
          </div>
          <div className='footer_socials'>
            <FaFacebook className="footer_icons"/>
            <FiInstagram className="footer_icons"/>
            <BsTwitterX className="footer_icons"/>
          </div>
        </div>
        <div className='copy'>
          <p>Copyright © CIARA COLLECTIONS. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
export default Footer;
