import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Login.css'
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <>
            <div>
                <h1 className=' mt-5'>Please Login</h1>
                <p className='  mt-4 fs-5 fst-italic fw-normal'>Login with Email & Password</p>
                <div className=''>
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <form className="form-bg" >
                                <div className="mb-3 mt-5">
                                    <input type="name" placeholder='Name: ' className="form-control" id="exampleInputEmail1 " aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">

                                    <input type="email" placeholder='Your Email:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">

                                    <input type="password" placeholder='Password:' className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className=" login-btn">Login</button>
                            </form>
                        </div>
                        <h2 className="mt-3 fw-normal fst-italic">Or</h2>
                        <h6>Login With</h6>
                        <button className='mt-3 mb-2  google-signIn-btn' onClick={handleGoogleLogin}>
                            Google Sign in</button>

                        <h5 className="my-3"> <Link to='/register'>Create A New Account</Link></h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;





{/* <i className="fab fa-google-plus-g "></i> */ }