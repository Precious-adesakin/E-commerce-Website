import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { useInView } from requestAnimationFrame
import { Link } from 'react-router-dom'


const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div style={{ backgroundColor: '#f9a825', color: '#ffffff', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        position: 'sticky',
        borderBottom: '1px solid #333',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{marginTop:15, backgroundColor:'black', width:1600,borderRadius:30, display:'flex', height:60}}>
        <h1 style={{ marginTop:12, marginLeft:25, fontSize: '24px', fontWeight: 'bold' }}>Tech Store</h1>
        <nav style={{ display: 'flex', gap: '30px', alignItems: 'right', marginLeft:350, marginTop:18 }}>
          <a href="#" style={navLinkStyle}>News</a>
          <a href="#" style={navLinkStyle}>Info</a>
          <div style={{}}>
          <button style={signInBtnStyle}> <Link to="/log"> Log In</Link> </button>
          <button style={signInBtnStyle}><Link to="/sign"> Sign In</Link></button>      
          </div>   
        </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: '#f9a825',
          padding: '80px 40px',
          position: 'relative',
          overflow: 'hidden',
          color: '#000'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', marginLeft:5, fontSize:5 }}>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}
          >
            Your One-Stop Tech Store <br />
            Upgrade your world with the latest <br /> gadgets  from smartphones to <br /> smart accessories. <br />
            Shop Smart. Live Smarter.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              position: 'absolute',
              top: '20%',
              right: '10%',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              marginLeft:600
            }}
          >
            <div style={floatingCardStyle}>
              <div style={{ display: 'flex', gap: '5px' }}>
                <div style={avatarStyle}></div>
                <div style={avatarStyle}></div>
                <div style={avatarStyle}></div>
              </div>
              <p style={{ margin: '5px 0 0', fontSize: '14px' }}>24.2K User</p>
            </div>

            <div style={{ ...floatingCardStyle, backgroundColor: '#fff', }}>
              <img src="https://via.placeholder.com/80" style={{ borderRadius: '8px', width: '100%' }} />
              <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#000' }}>100% Verified</p>
            </div>

            <div style={{ ...floatingCardStyle, backgroundColor: '#fff' }}>
              <img src="https://via.placeholder.com/80" style={{ borderRadius: '8px', width: '100%' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
                <span style={{ fontSize: '14px', color: '#000' }}>Active jo</span>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#000' }}>2598 <span style={{ fontSize: '14px' }}>+4</span></span>
              </div>
              <button>Shop now</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ marginTop: '40px' }}
          >
            {/* <div style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              maxWidth: '600px'
            }}>
              <input
                type="text"
                placeholder="Search"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  padding: '12px',
                  fontSize: '16px'
                }}
              />
              <button style={{
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                fontSize: '20px',
                cursor: 'pointer'
              }}>
                
              </button>
            </div> */}

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ color: '#000', fontWeight: 'bold' }}>Suggested:</span>
              {['Marketing', 'Sales', 'Remote', 'On-site', 'Full-time', 'Part-time'].map((tag) => (
                <span key={tag} style={tagStyle}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Promoted Jobs Section */}
      <motion.section
        ref={cardsRef}
        initial={{ opacity: 0 }}
        animate={cardsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{ padding: '60px 40px', backgroundColor: '#1e1e1e' }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={cardsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '32px', marginBottom: '40px' }}
        >
          Promoted jobs
        </motion.h2>

        <div style={{
          display: 'flex',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop:60
        }}>
          {[
            { title: 'Finance Controller', type: 'On-Site, Hybrid', time: 'Full-time', company: 'TechTonic Solutions' },
            { title: 'Support Associate', type: 'On-Site, Hybrid', time: 'Part-time', company: 'Innovize labs' },
            { title: 'Tech Marketing Specialist', type: 'Remote', time: 'Contract', company: 'SwiftSphere Innovations' }
          ].map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={jobCardStyle}
            >
              <h3 style={{ margin: '0 0 10px', fontSize: '20px' }}>{job.title}</h3>
              <p style={{ margin: '5px 0', color: '#aaa', fontSize: '14px' }}>
                {job.type} {job.time}
              </p>
              <p style={{ margin: '10px 0 0', fontWeight: 'bold' }}>{job.company}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

const navLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: '500'
};

const loginBtnStyle = {
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

const floatingCardStyle = {
  backgroundColor: '#333',
  padding: '12px',
  borderRadius: '12px',
  width: '180px',
  color: '#fff',
  fontSize: '14px'
};

const avatarStyle = {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: '#555'
};

const tagStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '14px'
};

const jobCardStyle = {
  backgroundColor: '#2a2a2a',
  padding: '20px',
  borderRadius: '12px',
  border: '1px solid #333'
};

export default Home

{/* <button>
  <Link></Link>
</button> */}