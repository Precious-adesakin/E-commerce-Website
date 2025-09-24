import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Formik } from 'formik'
import Navbar from './Navbar'
import Banner from './Banner'


const LogIn = ()=>{

  let myStyle1={
    color:'#2B2738',
    width:280,
    marginLeft:100,
    marginTop:120,
}    

  let myStyle2={
    color:'#2B2738',
    width:280,
    marginLeft:100,
    marginTop:75,
  } 

  let myStyle3={
    width:400,
    marginLeft:50,
    marginTop:50,
    backgroundColor:'#6E54B5',
    color:'white'
}

  let myStyle4={
  // width:400,
  // marginLeft:50,
  // marginTop:50,
  // backgroundColor:'#6E54B5',
  color:'white'
}

  let formik = useFormik({
    initialValues:{
        email:"",
        password:"",          
    },
    onSubmit: (values)=>{
        console.log(values);      
        
    },
    validationSchema: yup.object({
        email: yup.string().required("This field is required").email("Must be a valid email address"),
        password: yup.string().required("This field is required").required("Must not be less than 8 characters")

    })
  })
    console.log(formik.isValid, formik.dirty);
  return(
    <>
    <Navbar/>
    <div style={{backgroundColor:'#676279', width:1258,height:570, marginLeft:10,marginTop:4}}>
                <div className="row">
                    <div className="col-6 ">
    <Banner/>
    <div style={{backgroundColor:'#2B2738', width:510,height:540, marginLeft:350,marginTop:8,border:2,borderRadius:15,}}>
            <div>
                <div className="row">
                    <div className="col-6 ">
        <form action=""onSubmit={formik.handleSubmit}>
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
            <small style={{marginLeft:90}} className="text-danger">{formik.touched.email && formik.errors.email}</small>
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
        <small style={{marginLeft:90}} className="text-danger">{formik.touched.password && formik.errors.password}</small>
      </div>
      {/* <input 
      type="text"
      placeholder='Username'
      className= "form-control mt-2 mx-50 w-10"
        style={myStyle2}
        onChange={formik.handleChange}
        name='username'
        onBlur={formik.handleBlur}
      /> */}
      <Link to="/dash">
                        <button 
                        disabled={!formik.isValid || !formik.dirty}
                        type="submit"
                        style={myStyle3}
                        className="btn btn-#6E54B5">
                        Create Account </button>
                        </Link>

      <div style={{ marginLeft:30, marginTop:50}} >
        <h3 style={{color:'white', }}>Does not have an account Yet?, <span style={{marginLeft:20,}}>Click <Link to="/sign"><a href="" className="">Here</a></Link> </span></h3>
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




















// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import './Login.css';

// const Login = () => {
//   const initialValues = {
//     email: '',
//     password: '',
//     rememberMe: false,
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//   });

//   const handleSubmit = (values) => {
//     // Simulate form submission (replace with actual API call)
//     console.log('Login submitted:', values);
//     // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify(values) });
//   };

//   return (
//     <div className="login-container">
//       <div className="left-section">
//         <h1>Welcome Back!</h1>
//         <p>Log in to access your personalized shopping experience and exclusive offers.</p>
//       </div>
//       <div className="right-section">
//         <h2>Log In</h2>
//         <p className="signup-link">Don’t have an account? <a href="/signup">Sign up</a></p>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           <Form>
//             <div className="form-group">
//               <Field type="email" name="email" placeholder="Email" />
//               <ErrorMessage name="email" component="div" className="error" />
//             </div>
//             <div className="form-group">
//               <Field type="password" name="password" placeholder="Password" />
//               <ErrorMessage name="password" component="div" className="error" />
//             </div>
//             <div className="form-group">
//               <label>
//                 <Field type="checkbox" name="rememberMe" />
//                 Remember Me
//               </label>
//             </div>
//             <button type="submit">Log In</button>
//             <p className="forgot-password"><a href="/forgot-password">Forgot Password?</a></p>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };

export default LogIn;



