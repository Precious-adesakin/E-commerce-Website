// Dash.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Dash = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (!product.inStock) return;
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'phones', name: 'Phones' },
    { id: 'laptops', name: 'Laptops' },
    { id: 'egadgets', name: 'e-Gadgets' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    { id: 1, name: 'iPhone 15 Pro', price: 999, category: 'phones', rating: 4.9, inStock: true },
    { id: 2, name: 'Samsung S24 Ultra', price: 1199, category: 'phones', rating: 4.8, inStock: true },
    { id: 3, name: 'Google Pixel 8', price: 699, category: 'phones', rating: 4.7, inStock: false },
    { id: 4, name: 'Infinix Hot40I', price: 600, category: 'phones', rating: 3.9, inStock: true },

    { id: 5, name: 'MacBook Pro 16"', price: 2399, category: 'laptops', rating: 5.0, inStock: true },
    { id: 6, name: 'Dell XPS 15', price: 1499, category: 'laptops', rating: 4.8, inStock: true },
    { id: 7, name: 'HP Spectre x360', price: 1299, category: 'laptops', rating: 4.6, inStock: true },
    { id: 8, name: 'AirPods Pro 2', price: 249, category: 'egadgets', rating: 4.9, inStock: true },
    { id: 9, name: 'Apple Watch Ultra', price: 799, category: 'egadgets', rating: 4.8, inStock: true },
    { id: 10, name: 'DJI Mini 4 Pro', price: 759, category: 'egadgets', rating: 4.9, inStock: false },
    { id: 11, name: 'Electric Iron', price: 650, category: 'egadgets', rating: 4.9, inStock: true },

    { id: 12, name: 'MagSafe Charger', price: 39, category: 'accessories', rating: 4.7, inStock: true },
    { id: 13, name: 'USB-C Hub', price: 59, category: 'accessories', rating: 4.5, inStock: true },
    { id: 14, name: 'Wireless Mouse', price: 49, category: 'accessories', rating: 4.6, inStock: true }
  ];

  // LIVE FILTER: SEARCH + CATEGORY
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery, products]);

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh' }}>
      {/* NAVBAR */}
      <Navbar cartCount={cartCount} />

      {/* HERO */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: '#f9a825',
          color: '#000',
          padding: '100px 20px',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 'bold', marginBottom: '16px' }}
          >
            Premium Tech, Curated for You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '20px', marginBottom: '32px' }}
          >
            Phones • Laptops • eGadgets • Accessories
          </motion.p>

          {/* SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 50px 16px 20px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '16px',
                  backgroundColor: '#fff',
                  color: '#000',
                  outline: 'none',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                }}
              />
              <span style={{
                position: 'absolute',
                right: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '20px',
                color: '#666'
              }}>
                Search
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CATEGORIES */}
      <motion.section
        ref={categoriesRef}
        initial={{ opacity: 0, y: 30 }}
        animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ padding: '40px 20px', backgroundColor: '#1e1e1e' }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  ...categoryBtnStyle,
                  backgroundColor: selectedCategory === cat.id ? '#f9a825' : '#2a2a2a',
                  color: selectedCategory === cat.id ? '#000' : '#fff',
                  padding: '12px 24px',
                  fontSize: '15px',
                  fontWeight: '600',
                }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PRODUCTS */}
      <motion.section
        ref={productsRef}
        initial={{ opacity: 0 }}
        animate={productsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{ padding: '60px 20px', backgroundColor: '#121212' }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={productsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center' }}
          >
            {searchQuery
              ? `Results for "${searchQuery}"`
              : selectedCategory === 'all'
                ? 'All Products'
                : categories.find(c => c.id === selectedCategory)?.name
            }
            {filteredProducts.length === 0 && ' — No matches'}
          </motion.h2>

          {filteredProducts.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', color: '#aaa', fontSize: '18px', marginTop: '40px' }}
            >
              No products found. Try adjusting your search or filters.
            </motion.p>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={productsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  style={{
                    backgroundColor: '#1e1e1e',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #333',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      backgroundColor: '#2a2a2a',
                      height: '200px',
                      borderRadius: '16px 16px 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '60px',
                      color: '#555',
                    }}>
                      {getIcon(product.category)}
                    </div>
                    {!product.inStock && (
                      <div style={outOfStockBadge}>Out of Stock</div>
                    )}
                  </div>

                  <div style={{ padding: '24px' }}>
                    <h3 style={{ margin: '0 0 12px', fontSize: '20px', fontWeight: '600' }}>
                      {product.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <span style={{ color: '#f9a825', fontWeight: 'bold' }}>
                        {product.rating} stars
                      </span>
                      <span style={{ color: '#aaa', fontSize: '14px' }}>
                        ({Math.floor(Math.random() * 200) + 50} reviews)
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                        ${product.price}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        style={{
                          ...addToCartBtn,
                          opacity: product.inStock ? 1 : 0.5,
                          cursor: product.inStock ? 'pointer' : 'not-allowed',
                        }}
                      >
                        {product.inStock ? 'Add to Cart' : 'Sold Out'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* CTA - FULLY RESPONSIVE */}
<section
  style={{
    backgroundColor: '#1e1e1e',
    padding: '60px 20px',
    textAlign: 'center',
    borderTop: '1px solid #333',
  }}
>
  <div
    className="container"
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
    }}
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        fontSize: 'clamp(28px, 5vw, 36px)',
        fontWeight: 'bold',
        marginBottom: '16px',
        lineHeight: '1.3',
      }}
    >
      Need Help Choosing?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        fontSize: 'clamp(16px, 4vw, 18px)',
        color: '#aaa',
        marginBottom: '32px',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: '1.6',
      }}
    >
      Chat with our tech experts or get a custom quote. We’re here to help you find the perfect device.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          backgroundColor: '#f9a825',
          color: '#000',
          border: 'none',
          padding: '16px 36px',
          borderRadius: '30px',
          fontSize: 'clamp(16px, 4vw, 18px)',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(249, 168, 37, 0.4)',
          minWidth: '200px',
        }}
      >
        Contact Sales
      </motion.button>
    </motion.div>
  </div>
</section>
    </div>
  );
};

// ICONS
const getIcon = (category) => {
  const icons = { phones: 'Phone', laptops: 'Laptop', egadgets: 'Watch', accessories: 'Plug' };
  return icons[category] || 'Box';
};

// STYLES
const ctaBtnStyle = {
  backgroundColor: '#000',
  color: '#f9a825',
  border: 'none',
  padding: '16px 36px',
  borderRadius: '30px',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
};

const categoryBtnStyle = {
  padding: '12px 24px',
  borderRadius: '30px',
  border: 'none',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s',
};

const outOfStockBadge = {
  position: 'absolute',
  top: '12px',
  left: '12px',
  backgroundColor: 'rgba(255,0,0,0.9)',
  color: '#fff',
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '13px',
  fontWeight: 'bold',
};

const addToCartBtn = {
  backgroundColor: '#f9a825',
  color: '#000',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '15px',
};

// NAVBAR
const Navbar = ({ cartCount }) => (
  <nav style={{
    backgroundColor: '#1a1a1a',
    borderBottom: '1px solid #333',
    padding: '16px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  }}>
    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#f9a825', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>
        TechStore
      </Link>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/dash" style={navLinkStyle}>Products</Link>
        <Link to="/cart" style={{ position: 'relative', ...navLinkStyle }}>
          Cart
          {cartCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-12px',
                backgroundColor: '#f9a825',
                color: '#000',
                borderRadius: '50%',
                width: '22px',
                height: '22px',
                fontSize: '12px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {cartCount}
            </motion.span>
          )}
        </Link>
      </div>
    </div>
  </nav>
);

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '16px',
};

export default Dash;