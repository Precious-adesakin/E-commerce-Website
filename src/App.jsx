import React  from "react";
import { useState } from 'react'
import {Route, Routes, Router} from "react-router-dom"
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Navigate } from 'react-router-dom'
import Home from "./assets/Home";
import Details from "./assets/Details";
import Navbar from './assets/Navbar';
import Banner from './assets/Banner';
import Contact from './assets/Contact'
import Notfound from "./assets/Notfound";
import AddProduct from './assets/AddProduct';
import AdminDash from './assets/AdminDash';
import Cart from './assets/Cart'
// import Images from 'Images'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Dash from "./assets/Dash";
import LogIn from "./assets/login";
import Signup from "./assets/Signup";
import { motion } from 'framer-motion';
// import Cart from './assets/Cart';
import Checkout from './assets/Checkout';
import { CartcontentProvider } from './assets/Cartcontent';
import CartNavLink from './assets/CartNavLink';
import { Link } from "react-router-dom";



function App() {

  
  
    return(
      <>
      {/* { <Navbar>Home| Log In| FormikForm</Navbar>} */}
    


    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        {/* <Route path="/formik" element={<Navigate to="/"/>}></Route> */}
        <Route path="/sign" element={<Signup/>}/>
        <Route path="/log" element={<LogIn/>}/>
        <Route path="/dash" element={<Dash/>}></Route>
        <Route path="/info" element={<Details/>}></Route>
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/checksucces" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />

    </Routes>

      </>
    );
    };

  export default App