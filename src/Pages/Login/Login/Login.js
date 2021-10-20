import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Login.css'
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle, handleLoginPasswordChange, handleLoginEmailChange, handleLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || "/home";

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <>
            <div className=''>
                <h2 className='fst-italic fw-normal login-register-heading mt-5'>Please log in to your account</h2>
                <p className='  mt-4 fs-5 fst-italic fw-normal'>Login with Email & Password</p>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center form-bg m-auto">
                        <form onSubmit={handleLogin} className="w-75" >
                            <div className="mb-3 mt-5">
                                <input onBlur={handleLoginEmailChange} type="email" placeholder='Your Email:' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">

                                <input onBlur={handleLoginPasswordChange} type="password" placeholder='Password:' className="form-control" id="exampleInputPassword1" />
                            </div>
                            <input type="submit" className="register-login-btn w-75" value="Log In" />

                            <h3 className="mt-1 text-white fw-normal fst-italic">Or</h3>
                            <button className='mt-1 mb-2  google-signIn-btn' onClick={handleGoogleLogin}>
                                Login With Google</button>
                        </form>
                    </div>

                    <h6 className="my-3"> New to HealthCare Agency? <Link to='/register'>Create A New Account</Link></h6>
                </div>
            </div>
        </>
    );
};

export default Login;
