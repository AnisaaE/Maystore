import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AuthContext } from "./authContex";
import { authServiceBuilder } from "../services/usersService";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  const { isAuth, cartList, auth } = useContext(AuthContext); // Getting cart list from AuthContext
  const authService = authServiceBuilder();

  // Sync cart items with AuthContext when authenticated
  useEffect(() => {
    if (isAuth && cartList.length > 0) {
      setCartItems(cartList); // Set cart items from authenticated user's data
    // } else if (!isAuth) {
    //   setCartItems([]);
    }
  }, [isAuth, cartList, setCartItems]);

  const addToCart = async (product) => {
    console.log("продукт"+ product);
    console.log("предмети в количката"+cartItems)
    setCartItems((prevItems) => [...prevItems, product]);
    if (isAuth) {
      const response = await authService.updateCart([...cartItems, product]);
      if (!response.ok) {
        const errorData = await response.json();
        return errorData.message || "Adding product to cart on server failed";
      }
    }
  };

  const removeFromCart = async (uniqueKey) => {
    const updatedCart = cartItems.filter((item) => item.uniqueKey !== uniqueKey);
    setCartItems(updatedCart);
    if (isAuth) {
      const response = await authService.updateCart(updatedCart);
      if (!response.ok) {
        const errorData = await response.json();
        return errorData.message || "Removing product from cart on server failed";
      }
    }
  };

  const clearCart = async () => {
    setCartItems([]);
    if (isAuth) {
      const response = await authService.updateCart([]);
      if (!response.ok) {
        const errorData = await response.json();
        return errorData.message || "Clearing cart on server failed";
      }
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, setCartItems}}>
      {children}
    </CartContext.Provider>
  );
};
