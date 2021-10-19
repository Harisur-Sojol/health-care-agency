import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const { handleGoogleLogin } = useAuth()
    return (
        <div>
            <h1 className='fst-italic fw-normal login-register-heading mt-5'>Plese Register</h1>
            <div className=''>
                <p className='  mt-4 fs-5 fst-italic fw-normal'>Register with Email & Password</p>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center form-bg m-auto">
                        <form className="w-50" >
                            <div className="mb-3 mt-5">
                                <input type="name" placeholder='Name: ' className="form-control" id="exampleInputEmail1 " aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">

                                <input type="email" placeholder='Your Email:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">

                                <input type="password" placeholder='Password:' className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className=" login-btn">Register</button>
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
    );
};

export default Register;