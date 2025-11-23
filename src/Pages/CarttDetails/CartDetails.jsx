import React, { useContext } from 'react'
import { shopContext } from '../../Component/ShopContext/ShopContext';
import { FiTrash2 } from 'react-icons/fi';
import { IoMdRemove, IoMdAdd } from "react-icons/io"; 
import "./CartDetails.css";

const CartDetails = ({item}) => {
  const {removeFromCart, increasQuantity, decreasQuantity} = useContext(shopContext);

  const {id, image, price, amount, title} = item
  return (
    <div>
      <div className='cart_items'>
        <div className='cart_product_details'>
          <img src={image} alt={title}/>
          <div className='product_info'>
            <h3>{title}</h3>
            <FiTrash2 onClick={() => removeFromCart(id)} className='del'/>
          </div>
        </div>
        <div className='quantity'>
          <button onClick={() => decreasQuantity(id)}><IoMdRemove /></button>
          <span>{amount}</span>
          <button onClick={() => increasQuantity(id)}><IoMdAdd /></button>
        </div>
        <div className='price'>${price}</div>
        <div className='total'>{price * amount}</div>
      </div>
    </div>
  )
}
export default CartDetails;
