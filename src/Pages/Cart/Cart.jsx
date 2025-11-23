import React, { useContext } from "react";
import { shopContext } from "../../Component/ShopContext/ShopContext";
import { FiTrash2 } from "react-icons/fi";
import "./Cart.css";
import CartDetails from "../../Pages/CarttDetails/CartDetails";

const Cart = () => {
  const { cart, total, clearCart, quantity } = useContext(shopContext);
  return (
    <div>
      <div className="cart_container">
        <div className="cart_left">
          <div className="cart_header">
            <h1>Shopping Cart</h1>
            <h1>Items: {quantity}</h1>
            <FiTrash2 onClick={clearCart} className="delete_cart"/>
          </div>
          <div className="cart_header">
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          <div className="cart_detail">
            {cart.length > 0 ? (
              cart.map((item) => <CartDetails item={item} key={item.id} />)
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
        <div className="cart_right">
          <h2>Cart Summary</h2>
          <div className="summary_item">
            <span>Item:</span>
            <span>{quantity}</span>
          </div>
          <div className="summary_item">
            <span>Subtotal:</span>
            <span>{total}</span>
          </div>
          <div className="summary_item">
            <span>Shipping Free</span>
            <span>Free</span>
          </div>
          <div className="summary_item total_cost">
            <span>Total Cost:</span>
            <span>{total}</span>
          </div>
          <button className="checkout">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
