import React from "react";
import { GrStarOutline } from "react-icons/gr";
import './Brand.css';


const Brand = () => {
  return (
    <div className="brand_container">
      <div className="strip_top">
        <ul>
          <li><GrStarOutline />Hot Fashion</li>
          <li> <GrStarOutline />Unique Designs</li>
          <li> <GrStarOutline />Hot Fashion</li>
          <li> <GrStarOutline />Unique Designs</li>
          <li> <GrStarOutline />Hot Fashion</li>
        </ul>
      </div>
      <div className="strip_bottom">
        <ul>
          <li> <GrStarOutline />Hot Fashion</li>
          <li> <GrStarOutline />Unique Designs</li>
          <li> <GrStarOutline />Hot Fashion</li>
          <li> <GrStarOutline />Unique Designs</li>
          <li> <GrStarOutline />Hot Fashion</li>
        </ul>
      </div>
    </div>
  );
};
export default Brand;
