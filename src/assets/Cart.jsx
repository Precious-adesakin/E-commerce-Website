// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../assets/Cartcontent';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart = () => {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div style={{ padding: '100px 40px', textAlign: 'center', backgroundColor: '#121212', color: '#fff' }}>
        <h2>Your cart is empty</h2>
        <Link to="/dash">
          <button style={ctaBtnStyle}>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '36px', marginBottom: '30px' }}
        >
          Your Cart ({cart.length} items)
        </motion.h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', marginBottom: '40px' }}>
          {cart.map((item, i) => (
            <motion.div
              key={item.cartId}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                ...productCardStyle,
                flex: '1 1 300px',
                maxWidth: '360px',
                display: 'flex',
                alignItems: 'center',
                padding: '15px'
              }}
            >
              <div style={{
                backgroundColor: '#2a2a2a',
                width: '80px',
                height: '80px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                marginRight: '15px'
              }}>
                {getIcon(item.category)}
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 5px', fontSize: '16px' }}>{item.name}</h3>
                <p style={{ margin: '0 0 8px', color: '#f9a825', fontWeight: 'bold' }}>${item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.cartId)}
                style={{
                  backgroundColor: 'transparent',
                  color: '#ff4444',
                  border: '1px solid #ff4444',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              >
                Remove
              </button>
            </motion.div>
          ))}
        </div>

        <div style={{
          backgroundColor: '#1e1e1e',
          padding: '25px',
          borderRadius: '16px',
          maxWidth: '400px',
          marginLeft: 'auto'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', marginBottom: '15px' }}>
            <span>Subtotal</span>
            <strong>${total}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#aaa', marginBottom: '20px' }}>
            <span>Tax & Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <button
            onClick={() => {
              alert('Checkout complete! (Test mode)');
              clearCart();
              navigate('/checkout-success');
            }}
            style={{
              ...ctaBtnStyle,
              width: '100%',
              backgroundColor: '#f9a825',
              color: '#000'
            }}
          >
            Proceed to Checkout
          </button>
          <button
            onClick={clearCart}
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              color: '#ff4444',
              border: '1px solid #ff4444',
              padding: '12px',
              borderRadius: '30px',
              marginTop: '10px',
              cursor: 'pointer'
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const getIcon = (category) => {
  const icons = { phones: 'Phone', laptops: 'Laptop', egadgets: 'Watch', accessories: 'Plug' };
  return icons[category] || 'Box';
};

const productCardStyle = {
  backgroundColor: '#1e1e1e',
  borderRadius: '16px',
  border: '1px solid #333',
  transition: 'all 0.3s'
};

const ctaBtnStyle = {
  backgroundColor: '#000',
  color: '#f9a825',
  border: 'none',
  padding: '14px 32px',
  borderRadius: '30px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default Cart;