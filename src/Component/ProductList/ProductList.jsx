import React, { useContext } from 'react'
import { shopContext } from '../ShopContext/ShopContext';
import './ProductList.css';

const ProductList = () => {
  const {products, addToCart} = useContext(shopContext);
  console.log(products);
  return (
    <div className='product_list'>
      <h2>OUR UNIQUE COLLECTIONS</h2>
      <div className='product_display'>
        {products.map((product) => {
          const {id, image, title, price} = product;
          return (
            <div className='product_card' key={id}>
              <img src={image} alt={title} className='product_image'/>
              <div className='product_info'>
              <h4>{title}</h4>
              <p>${price}</p>
              </div>
              <button onClick={() => addToCart(product,id)} className='cta'>Add To Cart</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ProductList;