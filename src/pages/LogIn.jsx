import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Formik } from 'formik'
import Navbar from './Navbar'
import Banner from './Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { color } from 'framer-motion'



const LogIn = ()=>{

  let myStyle1={
    color:'#2B2738',
    width:400,
    marginLeft:20,
    marginTop:120,
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 15px',
    fontSize: '1rem',
}    

  let myStyle2={
    color:'#2B2738',
    width:400,
    marginLeft:20,
    marginTop:75,
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 15px',
    fontSize: '1rem',
  } 

  let myStyle3={
    // width:200,
    marginLeft:20,
    // marginTop:50,
    color:'white',
    backgroundColor: '#6E5485',
    border: 'none',
    borderRadius: '8px',
    padding: '12px',
    fontWeight: '600',
    width: 400,
    marginTop: '10px',
}

  let formik = useFormik({
    initialValues:{
        email:"",
        password:"",          
    },
    onSubmit: (values)=>{      
        
    },
    validationSchema: yup.object({
        email: yup.string().required("This field is required").email("Must be a valid email address"),
        password: yup.string().required("This field is required").required("Must not be less than 8 characters")

    })
  })
  return(
    <>
    <Navbar/>
    <div className='nav-page' style={{ backgroundColor:'#2B2738', width:1258,height:570, marginLeft:10,marginTop:4}}>
                <div className="row">
                    <div className="col-6 ">
    <Banner/>
    <div style={{backgroundColor:'#2B2738', width:510,height:540, marginLeft:400,marginTop:8,border:2,borderRadius:15,}}>
            <div>
                <div className="row">
                    <div className="col-6 ">
        <form action=""onSubmit={formik.handleSubmit}>
          <div style={{marginLeft:6}}>
            <h2 className="text-white" style={{ fontWeight: 'bold',fontSize:50, marginLeft:90, marginTop:10}}>Log In</h2>
          </div>
          
      <div>                
          <input 
            type="text"
            placeholder='Email'
            className= "form-control mt-5 mx-50 w-10"
            style={myStyle1}
            onChange={formik.handleChange}
            name='email'
            onBlur={formik.handleBlur}
          />
            <small style={{marginLeft:35}} className="text-danger">{formik.touched.email && formik.errors.email}</small>
      </div>
      <div>
      <input 
      type="text" 
      placeholder='Password'
      className= "form-control mt-2 mx-50 w-10"
        style={myStyle2}
        onChange={formik.handleChange}
        name='password'
        onBlur={formik.handleBlur}
      />
        <small style={{marginLeft:30}} className="text-danger">{formik.touched.password && formik.errors.password}</small>
      </div>
      <Link to="/dash">
                        <button 
                        disabled={!formik.isValid || !formik.dirty}
                        type="submit"
                        style={myStyle3}
                        className="btn btn-#6E54B5">
                        Log In </button>
                        </Link>
        <div style={{ marginTop:50,color:'white',textAlign:'center',width:300, marginLeft:80,}}>
          <h3>Does not have an account yet? <span  style={{ textDecoration:'none'}}>Click <Link to="/sign"><a href="" className="">Here</a></Link> </span></h3>
        </div>

      </form>
              </div>  
              </div>        
            </div> 
    </div>
`   </div>
                </div>     
            </div>
    </>  
  )
}

export default LogIn;



