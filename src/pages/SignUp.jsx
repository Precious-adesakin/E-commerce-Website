import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Page from "./Page";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {

    const formik = useFormik({
    initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    },
    validationSchema: Yup.object({
        firstname: Yup.string().required("This field is required"),
        lastname: Yup.string().required("This field is required"),
        email: Yup.string()
        .email("Must be a valid email address")
        .required("This field is required"),
        password: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
        console.log(values);
    },
    });

    return (
    <>


        <Navbar />

    
        <div className="bg-dark text-white min-vh-100 d-flex align-items-center py-4">
        <div className="container" >
            <div className="row g-4 justify-content-center">
            
            <div className="col-lg-6 order-lg-1 order-2" >
                <div className="d-flex flex-column align-items-center text-center text-lg-start">
                <Banner />
                <div className="mt-3 p-3 bg-dark rounded">
                    <h1 className="display-5 fw-bold">
                    Unlock a world of <span className="d-lg-block">Possibilities!</span>
                    </h1>
                    <h2 className="h5 mt-3" style={{fontSize:30 }}>Sign up now and discover exclusive offers</h2>
                    <h3 className="h6 mt-3" style={{ fontFamily: "Playfair Display", fontSize:20 }}>
                    Personalized shopping experience tailored just for you.
                    </h3>
                </div>
                < page/>
                </div>
            </div>

            <div className="col-lg-5 order-lg-2 order-1" >
                <div className="card text-white shadow-lg" style={{ borderRadius: "12px",backgroundColor:'#2B2738'}} >
                <div className="card-body p-4 p-md-5">
                    <h2 className="text-center text-primary mb-1">Let's Get Started</h2>
                    <p className="text-center mb-4">
                    Already have an account?{" "}
                    <Link to="/log" className="text-primary text-decoration-underline">
                        Log in
                    </Link>
                    </p>

                    <form onSubmit={formik.handleSubmit}>
                    {/* First & Last Name – side-by-side on md+ */}
                    <div className="row g-3 mb-3">
                        <div className="col-md-6">
                        <input
                            type="text"
                            placeholder="First Name"
                            className={`form-control ${
                            formik.touched.firstname && formik.errors.firstname ? "is-invalid" : ""
                            }`}
                            name="firstname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstname}
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                            <div className="invalid-feedback">{formik.errors.firstname}</div>
                        )}
                        </div>

                        <div className="col-md-6">
                        <input
                            type="text"
                            placeholder="Last Name"
                            className={`form-control ${
                            formik.touched.lastname && formik.errors.lastname ? "is-invalid" : ""
                            }`}
                            name="lastname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastname}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                            <div className="invalid-feedback">{formik.errors.lastname}</div>
                        )}
                        </div>
                    </div>

                    <div className="mb-3">
                        <input
                        type="email"
                        placeholder="Email"
                        className={`form-control ${
                            formik.touched.email && formik.errors.email ? "is-invalid" : ""
                        }`}
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <input
                        type="password"
                        placeholder="Password"
                        className={`form-control ${
                            formik.touched.password && formik.errors.password ? "is-invalid" : ""
                        }`}
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password && (
                        <div className="invalid-feedback">{formik.errors.password}</div>
                        )}
                    </div>

                    {/* Terms checkbox */}
                    <div className="form-check mb-4 d-flex align-items-center">
                        <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="terms"
                        />
                        <label className="form-check-label" htmlFor="terms">
                        I Agree to the Terms and Conditions
                        </label>
                    </div>

                    {/* Submit */}
                    <Link to="/dash" className="d-block">
                        <button
                        type="submit"
                        disabled={!formik.isValid || !formik.dirty}
                        className="btn btn-primary w-100 fw-bold"
                        style={{ backgroundColor: "#6E54B5", border: "none" }}
                        >
                        Create Account
                        </button>
                    </Link>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
    );
};

export default SignUp;  