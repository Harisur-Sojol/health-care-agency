import React from 'react';
import './notFound.css'
import notfound from '../../../images/notFound.png'

const NotFound = () => {
    return (
        <>
            <div className='text-center error-area mt-5 mb-5'>
                <img className='error-img' src={notfound} alt="" />
                <h3>Oops... Page Not Found!</h3>
                <p className="fs-5 text-secondary fw-normal">Sorry the page could not be found here</p>
                <i className="fas fa-exclamation-triangle"></i>
            </div>

            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rem?</h1>
        </>
    );
};

export default NotFound;