// Cart.jsx
import React, { useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {
        console.error('Parse error:', e);
      }
    }
    setLoaded(true);
  }, []);

  useLayoutEffect(() => {
    if (loaded) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, loaded]);

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  if (!loaded) {
    return <div style={{ color: '#aaa', textAlign: 'center', padding: '100px', fontSize: '18px' }}>Loading your cart...</div>;
  }

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          backgroundColor: '#121212',
          color: '#fff',
          minHeight: '100vh',
          padding: '100px 20px',
          textAlign: 'center'
        }}
      >
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
          Your Cart is Empty
        </h1>
        <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '32px' }}>
          Time to grab some tech!
        </p>
        <Link to="/dash">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={shopBtnStyle}
          >
            Continue Shopping
          </motion.button>
        </Link>
      </motion.div>
    );
  }

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '32px' }}
        >
          Your Cart ({cartCount} {cartCount === 1 ? 'Item' : 'Items'})
        </motion.h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cart.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.01, boxShadow: '0 8px 25px rgba(0,0,0,0.3)' }}
              style={{
                backgroundColor: '#1e1e1e',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                border: '1px solid #333',
                transition: 'all 0.3s ease'
              }}
            >
              {/* PRODUCT ICON */}
              <div style={{
                backgroundColor: '#2a2a2a',
                width: '70px',
                height: '70px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                color: '#888'
              }}>
                {getIcon(item.category)}
              </div>

              {/* NAME & PRICE */}
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: '600' }}>
                  {item.name}
                </h3>
                <p style={{ color: '#f9a825', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
                  ${item.price}.00
                </p>
              </div>

              {/* QUANTITY */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateQty(item.id, -1)}
                  style={qtyBtnStyle}
                >
                  −
                </motion.button>
                <span style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  minWidth: '36px',
                  textAlign: 'center',
                  color: '#f9a825'
                }}>
                  {item.qty}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateQty(item.id, 1)}
                  style={qtyBtnStyle}
                >
                  +
                </motion.button>
              </div>

              {/* SUBTOTAL */}
              <div style={{ textAlign: 'right', minWidth: '100px' }}>
                <p style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
                  ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>

              {/* REMOVE */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ff4444' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => removeItem(item.id)}
                style={removeBtnStyle}
              >
                Remove
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* TOTAL SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: '50px',
            backgroundColor: '#1e1e1e',
            borderRadius: '16px',
            padding: '30px',
            maxWidth: '400px',
            marginLeft: 'auto',
            border: '1px solid #333'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontSize: '20px' }}>Subtotal</span>
            <span style={{ fontSize: '22px', fontWeight: 'bold' }}>${total.toFixed(2)}</span>
          </div> 
          <p style={{ color: '#aaa', fontSize: '14px', margin: '0 0 24px' }}>
            Taxes and shipping calculated at checkout
          </p>
          <Link to="/checksucces">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={checkoutBtnStyle}
          >
            Proceed to Checkout
          </motion.button>
        </Link>

        </motion.div>

        {/* CONTINUE SHOPPING */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/dash" style={{ color: '#f9a825', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

// ICONS
const getIcon = (cat) => {
  const icons = { phones: 'Phone', laptops: 'Laptop', egadgets: 'Watch', accessories: 'Plug' };
  return icons[cat] || 'Box';
};

// STYLES — CLEAN & MODERN
const shopBtnStyle = {
  backgroundColor: '#000',
  color: '#f9a825',
  border: 'none',
  padding: '16px 36px',
  borderRadius: '30px',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
};

const qtyBtnStyle = {
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  fontSize: '20px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const removeBtnStyle = {
  backgroundColor: 'transparent',
  color: '#ff4444',
  border: '1px solid #ff4444',
  padding: '10px 18px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s'
};

const checkoutBtnStyle = {
  backgroundColor: '#f9a825',
  color: '#000',
  border: 'none',
  padding: '16px 32px',
  borderRadius: '30px',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
  width: '100%',
  boxShadow: '0 4px 15px rgba(249, 168, 37, 0.4)'
};

export default Cart;