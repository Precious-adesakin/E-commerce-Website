import React  from "react";
import { useState } from 'react'
import {Route, Routes, Router} from "react-router-dom"
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Navigate } from 'react-router-dom'
import Home from './Home';
import Details from './Details';
import Contact from './Contact'
import AddProduct from './AddProduct';
import AdminDash from './AdminDash';
import Cart from './Cart'

import Dash from "./Dash";
import LogIn from "./LogIn";
import SignUp from './SignUp';
import { motion } from 'framer-motion';
import Checkout from './Checkout';
// import { CartProvider } from './CartContext';
import CartNavLink from './CartNavLink';
import { Link } from "react-router-dom";



function App() {

  
  
    return(
      <>

    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        {/* <Route path="/formik" element={<Navigate to="/"/>}></Route> */}
        <Route path="/sign" element={<SignUp/>}/>
        {/* <Route path="/log" element={<logIn/>}/> */}
        <Route path="/log" element={<LogIn/>}></Route>
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