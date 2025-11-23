import { createContext, useEffect, useState } from "react"; 
// Import React hooks and createContext to manage global state

import ProductData from "../../assets/Data"; 
// Import product data array from local file

import { toast } from "react-toastify"; 
// Import toast library to show notifications

export const shopContext = createContext(); 
// Create a new context to share state across components

const shopContextProvider = ({ children }) => { 
  // Context Provider component, wraps around app to provide global state

  const [products, setProducts] = useState(ProductData); 
  // State to store all products, initialized with ProductData

  const [cart, setCart] = useState([]); 
  // State to store products added to the cart

  const [quantity, setQuantity] = useState(0); 
  // State to store total quantity of items in cart

  const [total, setTotal] = useState(0); 
  // State to store total price of items in cart

  useEffect(() => {
    const totals = cart.reduce((acc, item) => {
      const priceNum = parseFloat(item.price); 
      // Convert price to number
      if (isNaN(priceNum)) return acc; 
      // Skip invalid numbers
      return acc + priceNum * item.amount; 
      // Multiply price by quantity and add to accumulator
    }, 0);

    setTotal(totals); 
    // Update total state whenever cart changes
  }, [cart]);

  useEffect(() => {
    const amount = cart.reduce((acc, item) => acc + item.amount, 0); 
    // Sum all quantities of items in cart
    setQuantity(amount); 
    // Update quantity state
  }, [cart]);

  const addToCart = (product, id) => { 
    // Function to add product to cart
    const newItem = { ...product, amount: 1 }; 
    // Create a new product object with initial amount 1
    const cartItem = cart.find((item) => item.id === id); 
    // Check if product already exists in cart

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
        // Increase quantity if product exists
      );
      setCart(newCart); 
      // Update cart state
    } else {
      setCart([...cart, newItem]); 
      // Add new product to cart
      toast.success("Product added to cart"); 
      // Show success notification
    }
  };

  const clearCart = () => {
    setCart([]); 
    // Empty the cart
    toast.success("Cart Empty"); 
    // Notify user
  };

  const removeFromCart = (id) => { 
    // Remove specific product from cart
    const newCart = cart.filter((item) => item.id !== id); 
    // Filter out product with matching id
    setCart(newCart); 
    // Update cart state
    toast.success("Product removed successfully"); 
    // Notify user
  };

  const increasQuantity = (id) => { 
    // Increase quantity of a specific product
    const cartItem = cart.find((item) => item.id === id); 
    // Find the item in cart
    addToCart(cartItem, id); 
    // Reuse addToCart to increase quantity
  };

  const decreasQuantity = (id) => { 
    // Decrease quantity of a specific product
    const cartItem = cart.find((item) => item.id === id); 
    // Find the item in cart
    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = cart.map((item) =>
          item.id === id ? { ...item, amount: cartItem.amount - 1 } : item
          // Reduce amount by 1
        );
        setCart(newCart); 
        // Update cart state
      } else {
        removeFromCart(id); 
        // If quantity is 1, remove item from cart
      }
    }
  };

  return (
    <shopContext.Provider
      value={{
        products, // share all products
        cart, // share cart items
        addToCart, // share function to add products
        total, // share total price
        quantity, // share total quantity
        clearCart, // share function to clear cart
        removeFromCart, // share function to remove specific product
        increasQuantity, // share function to increase quantity
        decreasQuantity, // share function to decrease quantity
      }}
    >
      {children} 
      {/* Render all children components inside provider */}
    </shopContext.Provider>
  );
};
export default shopContextProvider; 
