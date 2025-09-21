import React  from "react";
import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Navigate } from 'react-router-dom'
import Home from "./assets/Home";
import Contact from "./assets/LogIn";
import Details from "./assets/Details";
import Navbar from './assets/Navbar';
import Banner from './assets/Banner';
import Notfound from "./assets/Notfound";
// import Images from 'Images'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import SignUp from "./assets/SignUp";
import Dash from "./assets/Dash";
import FormikForm from "./assets/SignUp";
import LogIn from "./assets/LogIn";


function App() {

    return(
    <>
      {/* { <Navbar>Home| Log In| FormikForm</Navbar>} */}
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        {/* <Route path="/formik" element={<Navigate to="/"/>}></Route> */}
        <Route path="/sign" element={<SignUp/>}/>
        <Route path="/log" element={<LogIn/>}/>
        <Route path="/dash" element={<Dash/>}></Route>
        <Route path="/info" element={<Details/>}></Route>
        <Route path="/dash/:firstname" element={<SignUp/>}></Route>
        {/* <Route path="/formik/:signup" element={<Home/>}></Route> */}
        {/* <Route path="*" element={<Notfound/>}></Route> */}
    </Routes>



























































        {/* <Navbar/> */}
        {/* <div style={{backgroundColor:'#f7f6f4', height:30,marginTop:0}}>
        <div style={{marginTop:10}}>

        <a href="" style={myStyle} >Sell on Jumia</a> */}
        {/* {/* <a href="" style={myStyle2}>Discover Stores</a>
        <a href="" style={myStyle3}>Track Orders</a>
        <a href="" style={myStyle4}>Need help? Call: 
        <img style={myStyle15} src="Images/Whatsapp.svg" alt="" srcset="" /> 
        <p style={myStyle5}>+2347069000083 or +2349035000505</p>
        <section style={myStyle22}>
        <img style={myStyle16} src="Images/Flag.svg" alt="" srcset=""/> 
        <h4 style={myStyle23}>Nigeria</h4> }
        </section> 
        </a>*/}
        
        {/* <a href="" style={myStyle6}></a> */}
        {/* </div>
        </div> */}
        </>
    )
    }

  export default App