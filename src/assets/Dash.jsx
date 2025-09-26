import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import SignUp from './SignUp'
import { useState } from "react";
import { motion, useInView } from "framer-motion";

const Dash = () => {
    let style1={
        height:250,
        width:350,
        marginLeft:50,
        }
        

    let myStyle2={
          display:'flex',
          width:10
          }    

          const products = [
            { id: 1, name: 'Headphones', price: '$49.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 2, name: 'Laptops', price: '$129.99', image: '/Jumia images/1 (17).jpg' },
            { id: 3, name: 'Smart Watch', price: '$99.99', image: '/Jumia images/Mouse1.jpg' },
            { id: 4, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 5, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 6, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 7, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 8, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 9, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 10, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 11, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 12, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 13, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 14, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },
            { id: 15, name: 'Denim Jeans', price: '$59.99', image: '/Jumia images/Earphones-300_400.jpg' },


          ];
          
        
          // State to toggle products (simulates filter or update)
          const [visibleProducts, setVisibleProducts] = useState(products);
          const ref = useRef(null);
        
          // Variants for fade animation
          const productVariants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          };
        
          // Handle a "refresh" (e.g., filter button click)
          // const handleRefresh = () => {
          //   // Simulate new products loading (fade out then back in)
          //   setVisibleProducts([]);
          //   setTimeout(() => setVisibleProducts(products), 500); // Fade out for 0.5s, then back
          // };



        return (
        <>
            <h1 className='text-primary'>Welcome User</h1>

            
    <div style={{ padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }} ref={ref}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>My E-commerce Store</h1>
      
      {/* Refresh Button */}
      {/* <button
        onClick={handleRefresh}
        style={{ display: 'block', margin: '0 auto 2rem', padding: '0.5rem 1rem', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Refresh Products
      </button> */}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {visibleProducts.map((product) => {
          const isInView = useInView(ref, { once: false }); // Triggers on every scroll
          return (
            <motion.div
              key={product.id}
              variants={productVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Fade in when in view, out when out
              style={{
                background: 'white',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center',
              }}
            >
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
              <h3 style={{ margin: '0.5rem 0', color: '#333' }}>{product.name}</h3>
              <p style={{ margin: '0', color: '#666' }}>{product.price}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  



















































        {/* <div>Welcome {firstname}</div>
            <div style={{backgroundColor:'#FCFCF9'}}>
            <h1>ShopCart</h1>
          </div> */}
            {/* <div style={{backgroundColor:'#F7ECE5',width:500,height:250, border:2, borderRadius:10, marginTop:50,marginLeft:10}}>
            <section>
              <div>
            <h2 style={{width:350,marginTop:8,marginLeft:50,color:'#074223',fontSize:35 }}>Grab Upto 50% off on Selected Headphone</h2>
            <button style={{marginTop:30, marginLeft:150,width:85,height:35,border:2, borderRadius:20, backgroundColor:'#074223',color:'white'}}>Buy Now</button>
            </div>
            <img style={style1} src="Jumia Images/Earphones-300_400.jpg" alt="Show text" />
            </section>
            </div>


            <div>
            <div style={myStyle2}> 
              <span style={{}}>
                <img style={{height:250, width:250,marginTop:10, marginLeft:50, borderRadius:10}} src="Jumia Images/Mouse1.jpg" alt="Show Text" />
                <span>
                  <h3 style={{marginLeft:80}}>Wireless Mouse</h3>
                  <p style={{marginLeft:150}}><b>9,750</b></p>
                  <button style={{marginLeft:130, color:'blue'}}>Add to Cart</button>
                </span>
                </span>
              <span>
                <img style={{height:250, width:250,marginTop:10, marginLeft:50, borderRadius:10}} src="Jumia Images/Laptop_stand.jpg" alt="Show Text" />
                <span>
                  <h3 style={{marginLeft:80}}>Wireless Mouse</h3>
                  <p style={{marginLeft:150}}><b>9,750</b></p>
                </span>
                </span>
              <span>
                <img style={{height:250, width:250,marginTop:10, marginLeft:50, borderRadius:10}} src="Jumia Images/Mouse1.jpg" alt="Show Text" />
                <span>
                  <h3 style={{marginLeft:80}}>Wireless Mouse</h3>
                  <p style={{marginLeft:150}}><b>9,750</b></p>
                </span>
                </span>
              <span>
                <img style={{height:250, width:250,marginTop:10, marginLeft:50, borderRadius:10}} src="Jumia Images/Mouse1.jpg" alt="Show Text" />
                <span>
                  <h3 style={{marginLeft:80}}>Wireless Mouse</h3>
                  <p style={{marginLeft:150}}><b>9,750</b></p>
                </span>
                </span>
            </div> 

              <span><img style={{height:220, width:210,marginTop:10, marginLeft:50, borderRadius:10}} src="Jumia Images/Mouse1.jpg" alt="Show Text" /></span>
              <span><img style={{height:220, width:210,marginTop:10, marginLeft:50, borderRadius:10}} src="Jumia Images/Mouse1.jpg" alt="Show Text" /></span>
              <span><img style={{height:220, width:210,marginTop:10, marginLeft:50, borderRadius:10}} src="Jumia Images/Mouse1.jpg" alt="Show Text" /></span>
              <span><img style={{height:220, width:210,marginTop:10, marginLeft:50, borderRadius:10}} src="Jumia Images/Mouse1.jpg" alt="Show Text" /></span>
            </div> */}
        </>
        )
}

export default Dash