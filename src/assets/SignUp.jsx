import React from "react";
import {useFormik} from "formik"  
import { useState } from "react"; 
import * as yup from "yup"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Page from "./Page";

const SignUp = () =>{
    let myStyle1={
        color:'#2B2738',
        width:280,
        marginLeft:75,
    }    
    let myStyle2={
        color:'#2B2738',
        width:280,
        marginLeft:17,
    }    

    let myStyle3={
        color:'#2B2738',
        width:580,
        marginLeft:75,
        marginTop:3,
    }  

    let myStyle4={
        color:'#2B2738',
        width:580,
        marginLeft:75,
        // marginTop:22,
    }  

    let myStyle5={
        width:580,
        marginLeft:75,
        marginTop:30,
        backgroundColor:'#6E54B5',
        color:'white'
    }  

    let myStyle6={
        display:'flex',
        backgroundColor:'#2B2738',
        width:1200,
        height:560,
        border:5,
        borderRadius:15,
        marginTop:10,
        marginLeft:35,
        
    } 

    let formik = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            password:"",          
        },
        onSubmit: (values)=>{
            console.log(values);      
            
        },
        validationSchema: yup.object({
            firstname: yup.string().required("This field is required"),
            lastname: yup.string().required("This field is required"),
            email: yup.string().required("This field is required").email("Must be a valid email address"),
            password: yup.string().required("This field is required")

        })

    })
    console.log(formik.isValid, formik.dirty);
    return(
            <>
            <Navbar/>
            <div style={{backgroundColor:'#f9a825', width:1258,height:580, marginLeft:10,marginTop:12}}>
            <div>
                <div className="row">
                    <div className="col-6 ">
                        
            </div> 
            
            <div style={myStyle6} >
                <Banner/> 
                    <span style={{fontFamily:'Bebas',backgroundColor:'#2B2738',width:500,border:2,borderRadius:15,height:200,color:'whitesmoke',marginLeft:5,marginTop:10}}>
                        <h1 style={{width:-70}}> Unlock a world of <span style={{marginLeft:35}}>Possibilities!</span> </h1>
                        <h2 style={{fontFamily:'Arial',marginTop:50}}> Sign up now and discover exclusive offers
                        </h2> 
                        <h3 style={{fontFamily:'Playfair Display',marginTop:50, width:400}}>Personalized shopping experience tailored just for you.</h3>
                    </span>
                <Page/>    
                    <div style={{backgroundColor:'#1F172C',width:1000, height:520,border:20, borderColor:'white', borderRadius:10, marginLeft:70,marginTop:10}} >

                    <h1 style={{marginLeft:200}} className="text-primary">Lets Get Started </h1>
                            <small  style={{marginLeft:240}} className="text-center text-primary">Already have an Account?   <a href="" className="">Log in</a></small>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <section>
                            <div>
                        <input type="text" 
                        
                        placeholder="First Name" 
                        style={myStyle1}
                        className= "form-control mt-2 mx-50 w-10"
                        onChange={formik.handleChange}
                        name="firstname"
                        onBlur={formik.handleBlur}
                        />
                        <small style={{marginLeft:70}} className="text-danger">{formik.touched.firstname && formik.errors.firstname}</small>
                        </div>

                            <div>
                        <input type="text" 
                        
                        placeholder="Last Name"
                        style={myStyle2}
                        className="form-control w-20 mt-2 mx-30" 
                        onChange={formik.handleChange}
                        name="lastname"
                        onBlur={formik.handleBlur}
                        />
                        <small style={{marginLeft:20}} className="text-danger">{formik.touched.lastname && formik.errors.lastname}</small>
                        </div>
                        </section>

                        <input type="text"  
                        placeholder="Email" 
                        style={myStyle3}
                        className= "form-control my-3"
                        onChange={formik.handleChange}
                        name="email"
                        onBlur={formik.handleBlur}
                        />
                        <small style={{marginLeft:80}} className="text-danger">{formik.touched.email && formik.errors.email}</small>

                        <input type="text"  
                        placeholder="Password" 
                        style={myStyle4}
                        className= "form-control my-3" 
                        onChange={formik.handleChange}
                        name="password"
                        onBlur={formik.handleBlur}
                        />
                        <small style={{marginLeft:80}} className="text-danger ">{formik.touched.password && formik.errors.password}</small>

                        <div id="flip">
                            <input style={{color:'#FFFFFF', marginLeft:75}} type="checkbox" placeholder="I Agree to the Terms and Conditions"/>
                            <h3 style={{color:'#FFFFFF', marginLeft:30,fontSize:18}}>I Agree to the Terms and Conditions</h3>
                        </div>

                        <Link to="/dash">
                        <button 
                        disabled={!formik.isValid || !formik.dirty}
                        type="submit"
                        style={myStyle5}
                        className="btn btn-#6E54B5">
                        Create Account </button>
                        </Link>
                    </form>
                    </div>
                    </div>
                </div>
            </div> 
            </div>
            </>
    )
}

export default SignUp