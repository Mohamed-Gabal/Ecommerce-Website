import React, { useContext } from "react";
import { shopContext } from "../ShopContext/ShopContext";
import "./ProductList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, addToCart } = useContext(shopContext);
  return (
    <div className="product_list">
      <h2>OUR UNIQUE COLLECTIONS</h2>
      <div className="product_display">
        {products.map((product) => {
          const { id, image, title, price } = product;
          return (
            <div className="product_card" key={id}>
              <Link to={`/product/${product.id}`}>
                <img src={image} alt={title} className="product_image" />
              </Link>
              <div className="product_info">
                <h4>{title}</h4>
                <p>${price}</p>
              </div>
              <button onClick={() => addToCart(product, id)} className="cta">
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
