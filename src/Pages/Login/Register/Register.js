import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css';
import{useHistory} from "react-router-dom";


const Register = () => {
    const history = useHistory()
    const { handleGoogleLogin, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, error } = useAuth();

    const handleReg = e => {
        e.preventDefault()
        handleRegistration(history)

    }

    return (
        <>
            <div>
                <h1 className='fst-italic fw-normal login-register-heading mt-5'>Please Register</h1>
                <hr className="hr-bar mb-3" />
                <div className=''>
                    <p className='  mt-4 fs-5 fst-italic fw-normal'>Register with Email and Password</p>
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center form-bg m-auto">
                            <form onSubmit={handleReg} className="w-75" >
                                <div className="mb-3 mt-5">
                                    <input onBlur={handleNameChange} type="name" placeholder='Name: ' className="form-control" id="exampleInputEmail1 " aria-describedby="emailHelp" />
                                </div>

                                <div className="mb-3">
                                    <input onBlur={handleEmailChange} type="email" placeholder='Your Email:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>

                                <div className="mb-3">
                                    <input onBlur={handlePasswordChange} type="password" placeholder='Password:' className="form-control" id="exampleInputPassword1" required />
                                </div>

                                <input type="submit" className="register-login-btn w-75" value="Register" />
                                <h3 className="mt-1 fw-normal fst-italic text-white">Or</h3>
                                <button className='mt-1 mb-2  google-signIn-btn' onClick={handleGoogleLogin}>
                                    Google Sign in</button>
                            </form>
                        </div>
                        <h6 className="my-3">Already have an account?<Link to="/login"> Click here to login</Link></h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;