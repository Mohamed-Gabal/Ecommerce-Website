import React from 'react'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='link'>
          <ul>
            <li>home</li>
            <li>clothes9</li>
          </ul>
        </div>

        <div className='logo'>
          <h2>ciara collections</h2>
        </div>

        <div className='nav_icon_wrapper'>
          <PiShoppingCartSimpleBold className='nav_icon'/>
          <p className='nav_qty'>0</p>
        </div>
    </div>
  )
}
export default Navbar;