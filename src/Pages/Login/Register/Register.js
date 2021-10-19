import React, { useState } from 'react';
import { Col, Form, FormControl, InputGroup, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const { handleGoogleLogin, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration } = useAuth()

    return (
        <>
         <div>
            <h1 className='fst-italic fw-normal login-register-heading mt-5'>Plese Register</h1>
            <div className=''>
                <p className='  mt-4 fs-5 fst-italic fw-normal'>Register with Email and Password</p>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center form-bg m-auto">
                        <form onSubmit={handleRegistration} className="w-75" >
                            <div className="mb-3 mt-5">
                                <input onBlur={handleNameChange} type="name" placeholder='Name: ' className="form-control" id="exampleInputEmail1 " aria-describedby="emailHelp" />
                            </div>

                            <div className="mb-3">
                                <input onBlur={handleEmailChange} type="email" placeholder='Your Email:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            
                            <div className="mb-3">
                                <input onBlur={handlePasswordChange} type="password" placeholder='Password:' className="form-control" id="exampleInputPassword1" required />
                            </div>

                             {/* <button type="submit" className=" login-btn">Register</button>  */}
                             <input type="submit" className="login-btn" value="Register" />
                        </form>
                    </div>
                    <h2 className="mt-3 fw-normal fst-italic">Or</h2>
                    <h6>Login With</h6>
                    <button className='mt-3 mb-2  google-signIn-btn' onClick={handleGoogleLogin}>
                        Google Sign in</button>

                    <h6>Already have an account?<Link to="/login">Log In</Link></h6>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;