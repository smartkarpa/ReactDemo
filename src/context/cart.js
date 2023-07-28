import { createContext, useContext, useState } from "react";
const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState({});
  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }; // update state immutably
      if (!prevCart[product.id]) {
        newCart[product.id] = {
          id: product.id,
          quantity: 1
        };
      } else {
        const newProduct = { ...prevCart[product.id] };
        newProduct.quantity += 1;
        newCart[product.id] = newProduct;
      }
      return newCart;
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }; // UPDATING IMMUTABILY
      if (!prevCart[product.id]) return prevCart;
      else if (prevCart[product.id].quantity === 1) {
        delete newCart[product.id];
      } else {
        const newProduct = { ...prevCart[product.id] };
        newProduct.quantity -= 1;
        newCart[product.id] = newProduct;
      }
      return newCart;
    });
  };

  const name = { name: "React" };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
export default CartContextProvider;
