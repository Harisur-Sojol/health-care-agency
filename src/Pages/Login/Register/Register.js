import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h3 className="mt-4">Create Account</h3>
            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit="">
                    <div className="mb-3 mt-4">
                        <input type="name" placeholder='Name: ' className="form-control" id="exampleInputEmail1 " aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">

                        <input type="email" placeholder='Your Email:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='Password:' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='Re-Enter-Password:' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="login-btn">Submit</button>
                </form>
            </div>
                <h6>Already have an account?<Link to="/login">Log In</Link></h6>
                <p>Or</p>
                <button className="btn-danger">Google Sign In</button>
        </div>
    );
};

export default Register;