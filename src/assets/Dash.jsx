import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useCart } from '../assets/Cartcontent';

const Dash = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { addToCart } = useCart();
  // === MOCK DATA ===
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'phones', name: 'Phones' },
    { id: 'laptops', name: 'Laptops' },
    { id: 'egadgets', name: 'eGadgets' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    // Phones
    { id: 1, name: 'iPhone 15 Pro', price: 999, category: 'phones', rating: 4.9, inStock: true },
    { id: 2, name: 'Samsung S24 Ultra', price: 1199, category: 'phones', rating: 4.8, inStock: true },
    { id: 3, name: 'Google Pixel 8', price: 699, category: 'phones', rating: 4.7, inStock: false },

    // Laptops
    { id: 4, name: 'MacBook Pro 16"', price: 2399, category: 'laptops', rating: 5.0, inStock: true },
    { id: 5, name: 'Dell XPS 15', price: 1499, category: 'laptops', rating: 4.8, inStock: true },
    { id: 6, name: 'HP Spectre x360', price: 1299, category: 'laptops', rating: 4.6, inStock: true },

    // eGadgets
    { id: 7, name: 'AirPods Pro 2', price: 249, category: 'egadgets', rating: 4.9, inStock: true },
    { id: 8, name: 'Apple Watch Ultra', price: 799, category: 'egadgets', rating: 4.8, inStock: true },
    { id: 9, name: 'DJI Mini 4 Pro', price: 759, category: 'egadgets', rating: 4.9, inStock: false },

    // Accessories
    { id: 10, name: 'MagSafe Charger', price: 39, category: 'accessories', rating: 4.7, inStock: true },
    { id: 11, name: 'USB-C Hub', price: 59, category: 'accessories', rating: 4.5, inStock: true },
    { id: 12, name: 'Wireless Mouse', price: 49, category: 'accessories', rating: 4.6, inStock: true }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh' }}>
      {/* Header */}
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontWeight: 'bold' }}>TechStore</h1>
        <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#" style={navLinkStyle} ><Link to="/"> Home</Link></a>
          <a href="#" style={navLinkStyle}>Products</a>
          <a href="#" style={navLinkStyle}>Deals</a>
          <a href="#" style={navLinkStyle}>Support</a>
          <button style={quoteBtnStyle}>Get Quote</button>
          <button style={signInBtnStyle}>Sign In</button>
        </nav>
      </header>

      {/* Hero */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: '#f9a825',
          padding: '100px 40px',
          color: '#000',
          textAlign: 'center'
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '52px', fontWeight: 'bold', marginBottom: '20px' }}
        >
          Premium Tech, Curated for You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '20px', marginBottom: '40px' }}
        >
          Phones • Laptops • eGadgets • Accessories
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button style={ctaBtnStyle}>Shop All</button>
        </motion.div>
      </motion.section>

      {/* Category Tabs */}
      <motion.section
        ref={categoriesRef}
        initial={{ opacity: 0, y: 30 }}
        animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ padding: '40px 40px', backgroundColor: '#1e1e1e' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  ...categoryBtnStyle,
                  backgroundColor: selectedCategory === cat.id ? '#f9a825' : '#2a2a2a',
                  color: selectedCategory === cat.id ? '#000' : '#fff'
                }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Product List - FLEX WRAP */}
      <motion.section
        ref={productsRef}
        initial={{ opacity: 0 }}
        animate={productsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{ padding: '60px 40px', backgroundColor: '#121212' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={productsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '36px', marginBottom: '40px', textAlign: 'center' }}
          >
            {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
          </motion.h2>

          {/* FLEX CONTAINER */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '25px',
            justifyContent: 'center'
          }}>
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                style={{
                  ...productCardStyle,
                  flex: '1 1 300px',
                  maxWidth: '340px'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <div style={{
                    backgroundColor: '#2a2a2a',
                    height: '200px',
                    borderRadius: '12px 12px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '50px',
                    color: '#555'
                  }}>
                    {getIcon(product.category)}
                  </div>
                  {!product.inStock && (
                    <div style={outOfStockBadge}>Out of Stock</div>
                  )}
                </div>

                <div style={{ padding: '20px' }}>
                  <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>{product.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
                    <span style={{ color: '#f9a825' }}>Rating: {product.rating}/5</span>
                    <span style={{ color: '#aaa', fontSize: '14px' }}>({Math.floor(Math.random() * 200)} reviews)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: '22px', fontWeight: 'bold', margin: 0 }}>${product.price}</p>
                    <button
                      onClick={() => addToCart(product)}
                      style={{
                        ...addToCartBtn,
                        opacity: product.inStock ? 1 : 0.5,
                        cursor: product.inStock ? 'pointer' : 'not-allowed'
                      }}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Sold Out'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1e1e1e', padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Need Help Choosing?</h2>
        <p style={{ fontSize: '18px', color: '#aaa', marginBottom: '30px' }}>
          Chat with our tech experts or get a custom quote.
        </p>
        <button style={ctaBtnStyle}>Contact Sales</button>
      </section>
    </div>
  );
};

// === HELPERS ===
const getIcon = (category) => {
  const icons = {
    phones: 'Phone',
    laptops: 'Laptop',
    egadgets: 'Watch',
    accessories: 'Plug'
  };
  return icons[category] || 'Box';
};

// === STYLES ===
const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  backgroundColor: '#1a1a1a',
  borderBottom: '1px solid #333',
  padding: '15px 40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const navLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: '500'
};

const quoteBtnStyle = {
  backgroundColor: 'transparent',
  color: '#ffffff',
  border: '1px solid #ffffff',
  padding: '8px 16px',
  borderRadius: '20px',
  fontSize: '14px',
  cursor: 'pointer'
};

const signInBtnStyle = {
  backgroundColor: '#f9a825',
  color: '#000',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const ctaBtnStyle = {
  backgroundColor: '#000',
  color: '#f9a825',
  border: 'none',
  padding: '14px 32px',
  borderRadius: '30px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
};

const categoryBtnStyle = {
  padding: '10px 20px',
  borderRadius: '30px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s'
};

const productCardStyle = {
  backgroundColor: '#1e1e1e',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid #333',
  transition: 'all 0.3s',
  cursor: 'pointer'
};

const outOfStockBadge = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  backgroundColor: 'rgba(255,0,0,0.8)',
  color: '#fff',
  padding: '4px 10px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: 'bold'
};

const addToCartBtn = {
  backgroundColor: '#f9a825',
  color: '#000',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '14px'
};



export default Dash