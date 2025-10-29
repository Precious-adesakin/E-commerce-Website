import React, { createContext, useContext, useState, useEffect } from 'react';
import Cart from './Cart';

const Cartcontent = createContext();

export const useCart = () => useContext(Cartcontent);

export const CartcontentProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);
// 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => [...prev, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Cartcontent.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </Cartcontent.Provider>
  );
};