import React from 'react';
import './notFound.css'
import notfound from '../../../images/notFound.png'

const NotFound = () => {
    return (
        <>
            <div className='text-center notFound-area mt-5 mb-5'>
                <img className='error-img' src={notfound} alt="" />
                <h3 className="mt-4">Oops... Page Not Found!</h3>
                <p className="fs-5 text-secondary fw-normal mt-3">Sorry the page you are looking for is not found here!!!</p>
                <i className="fas fa-exclamation-triangle"></i>
            </div>
        </>
    );
};

export default NotFound;