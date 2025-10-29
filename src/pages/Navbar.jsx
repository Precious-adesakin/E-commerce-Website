import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{height:45,backgroundColor:'#f9a825'}} className='text-center'>
            <Link style={{marginLeft:-10, fontSize:25, textDecoration:'none'}} to="/home">Home</Link> 
            <Link style={{marginLeft:1000,fontSize:25, textDecoration:'none'}} to="/log">Log In</Link> 
            <Link style={{marginLeft:15,fontSize:25, textDecoration:'none'}} to="/sign">SignUp</Link>

            
        </div>
    )
}

export default Navbar