import React, { useContext } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { shopContext } from "../ShopContext/ShopContext";

const Navbar = () => {
  const {quantity} = useContext(shopContext);
  return (
    <div className="navbar">
      <div className="link">
        <ul>
          <li>home</li>
          <li>clothes9</li>
        </ul>
      </div>

      <div className="logo">
        <h2>ciara collections</h2>
      </div>

      <Link to='/cart'>
        <div className="nav_icon_wrapper">
          <PiShoppingCartSimpleBold className="nav_icon" />
          <p className="nav_qty">{quantity}</p>
        </div>
      </Link>
    </div>
  );
};
export default Navbar;
