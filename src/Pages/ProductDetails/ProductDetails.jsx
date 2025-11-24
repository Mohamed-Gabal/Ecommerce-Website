import React, { useContext } from "react";
import { shopContext } from "../../Component/ShopContext/ShopContext";
import ProductData from "../../assets/Data";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { addToCart } = useContext(shopContext);

  const { id } = useParams();
  const prod = ProductData.find((product) => {
    return product.id === parseInt(id);
  });
  return (
    <div>
      <div className="product_details">
        <div className="product_details_left">
          <img src={prod.image} alt="" />
        </div>
        <div className="product_details_right">
          <h3>{prod.title}</h3>
          <p className="p_price">${prod.price}</p>
          <p className="p_desc">{prod.description}</p>
          <button onClick={() => addToCart(prod.id)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
