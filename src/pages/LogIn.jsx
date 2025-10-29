// LogIn.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Navbar from './Navbar';
import Banner from './Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('Login submitted:', values);
      // Add login logic here
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required('This field is required')
        .email('Must be a valid email address'),
      password: yup
        .string()
        .required('This field is required')
        .min(8, 'Must be at least 8 characters'),
    }),
  });

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: '#121212',
          minHeight: '100vh',
          padding: '20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="row g-4 align-items-center">
            {/* LEFT: BANNER */}
            <div className="col-lg-6 d-none d-lg-block">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Banner />
              </motion.div>
            </div>

            {/* RIGHT: LOGIN FORM */}
            <div className="col-lg-6 col-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  backgroundColor: '#1e1e1e',
                  borderRadius: '16px',
                  padding: '40px 30px',
                  maxWidth: '450px',
                  marginRight: '500',
                  border: '1px solid #333',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
              >
                <h2
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '36px',
                    textAlign: 'center',
                    marginBottom: '8px',
                  }}
                >
                  Log In
                </h2>
                <p
                  style={{
                    color: '#aaa',
                    textAlign: 'center',
                    marginBottom: '32px',
                    fontSize: '16px',
                  }}
                >
                  Welcome back to TechStore
                </p>

                <form onSubmit={formik.handleSubmit}>
                  {/* EMAIL */}
                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={inputStyle}
                      className="w-100"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <small style={{ color: '#ff6b6b', marginLeft: '5px' }}>
                        {formik.errors.email}
                      </small>
                    )}
                  </div>

                  {/* PASSWORD */}
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={inputStyle}
                      className="w-100"
                    />
                    {formik.touched.password && formik.errors.password && (
                      <small style={{ color: '#ff6b6b', marginLeft: '5px' }}>
                        {formik.errors.password}
                      </small>
                    )}
                  </div>

                  {/* SUBMIT BUTTON */}
                  <Link to="/dash">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={!formik.isValid || !formik.dirty}
                    style={{
                      ...loginBtnStyle,
                      opacity: !formik.isValid || !formik.dirty ? 0.6 : 1,
                      cursor: !formik.isValid || !formik.dirty ? 'not-allowed' : 'pointer',
                    }}
                    className="w-100"
                  >
                    Log In
                  </motion.button>
                  </Link>
                </form>

                {/* SIGN UP LINK */}
                <div
                  style={{
                    marginTop: '32px',
                    textAlign: 'center',
                    color: '#ccc',
                    fontSize: '15px',
                  }}
                >
                  Don't have an account?{' '}
                  <Link
                    to="/sign"
                    style={{
                      color: '#f9a825',
                      textDecoration: 'none',
                      fontWeight: '600',
                    }}
                  >
                    Sign Up Here
                  </Link>
                </div>

                {/* GUEST LINK */}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Link
                    to="/"
                    style={{
                      color: '#f9a825',
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    ← Continue as Guest
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// STYLES
const inputStyle = {
  backgroundColor: '#2a2a2a',
  border: '1px solid #444',
  color: '#fff',
  padding: '16px',
  borderRadius: '12px',
  fontSize: '16px',
  outline: 'none',
  transition: 'all 0.2s',
  width: '100%',
};

const loginBtnStyle = {
  backgroundColor: '#f9a825',
  color: '#000',
  border: 'none',
  padding: '16px',
  borderRadius: '30px',
  fontSize: '18px',
  fontWeight: 'bold',
  width: '100%',
  marginTop: '8px',
  cursor: 'pointer',
};

export default LogIn;