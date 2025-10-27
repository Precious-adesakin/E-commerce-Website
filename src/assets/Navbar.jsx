import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{backgroundColor:'black', height:45}} className='text-center'>
            <Link style={{marginLeft:-10, fontSize:25, textDecoration:'none'}} to="/home">Home</Link> 
            <Link style={{marginLeft:1000,fontSize:25, textDecoration:'none'}} to="/log">Log In</Link> 
            <Link style={{marginLeft:15,fontSize:25, textDecoration:'none'}} to="/formik">SignUp</Link>
        </div>
    )
}

export default Navbar