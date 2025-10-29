import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Using your new responsive Navbar

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [dealsRef, dealsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div style={{backgroundColor: '#f9a825', color: '#fff', minHeight: '100vh' }}>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: '#f9a825',
          color: '#000',
          padding: '100px 20px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="row align-items-center">
            {/* TEXT */}
            <div className="col-lg-7">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: 'clamp(36px, 5vw, 52px)',
                  fontWeight: 'bold',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                }}
              >
                Your One-Stop Tech Store
                <br />
                <span style={{ color: '#000' }}>
                  Upgrade your world with the latest
                  <br />
                  gadgets - from smartphones to
                  <br />
                  smart accessories.
                </span>
                <br />
                <span style={{ fontSize: '24px', fontWeight: '600' }}>
                  Shop Smart. Live Smarter.
                </span>
              </motion.h1>

              {/* TAGS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ marginTop: '32px' }}
              >
                <p style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '18px' }}>
                  Suggested:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['Phones', 'Laptops', 'Watches', 'Accessories', 'Deals', 'Fast Shipping'].map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '8px 16px',
                        borderRadius: '30px',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ marginTop: '40px' }}
              >
                <Link to="/log">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundColor: '#000',
                      color: '#f9a825',
                      border: 'none',
                      padding: '16px 32px',
                      borderRadius: '30px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    }}
                  >
                    Shop Now
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* HERO IMAGE (MOBILE HIDDEN) */}
            <div className="col-lg-5 d-none d-lg-block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                      >
            <img
            src="data:image/png;base64,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"
      alt="Premium Tech Gadgets"
      style={{
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      }}
    />
  </motion.div>
</div>
          </div>
        </div>
      </motion.section>

      {/* PROMOTED DEALS */}
      <motion.section
        ref={dealsRef}
        initial={{ opacity: 0 }}
        animate={dealsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{ padding: '80px 20px', backgroundColor: '#1e1e1e' }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={dealsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center' }}
          >
            Promoted Deals
          </motion.h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              { title: 'Fast Delivery', desc: 'Same-Day Dispatch', highlight: '2-Hour Metro', company: 'SwiftLogix' },
              { title: '24/7 Support', desc: 'Live Chat & Email', highlight: 'Real Fast Response', company: 'TechCare Pro' },
              { title: 'Exclusive Deals', desc: 'Members Only', highlight: 'Up to 70% Off', company: 'Elite Tech Club' },
            ].map((deal, i) => (
              <motion.div
                key={deal.title}
                initial={{ opacity: 0, y: 30 }}
                animate={dealsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}
                style={{
                  backgroundColor: '#2a2a2a',
                  padding: '28px',
                  borderRadius: '16px',
                  border: '1px solid #333',
                  transition: 'all 0.3s',
                }}
              >
                <h3 style={{ margin: '0 0 12px', fontSize: '22px', fontWeight: 'bold' }}>
                  {deal.title}
                </h3>
                <p style={{ margin: '8px 0', color: '#aaa', fontSize: '15px' }}>
                  {deal.desc}
                </p>
                <p style={{ margin: '12px 0 0', color: '#f9a825', fontWeight: 'bold', fontSize: '16px' }}>
                  {deal.highlight}
                </p>
                <p style={{ margin: '16px 0 0', fontSize: '14px', color: '#ccc' }}>
                  by <strong>{deal.company}</strong>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FOOTER CTA */}
      <section style={{ backgroundColor: '#121212', padding: '80px 20px', textAlign: 'center', display:'grid' }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '32px', marginBottom: '20px' }}
        >
          Ready to Upgrade?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: '#aaa', fontSize: '18px', marginBottom: '32px',  }}
        >
          Join thousands of happy customers.
        </motion.p>
        <Link to="/log">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#f9a825',
              color: '#000',
              border: 'none',
              padding: '16px 36px',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Start Shopping
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default Home;