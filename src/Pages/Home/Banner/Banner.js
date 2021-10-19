import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div id='banner' className='d-flex align-items-center'>
                <div className="container">
                    <div className="row ps-4">
                        <div className="col-md-6 mt-5">
                            <h1 className='title'>A Team Of Medical Professionals</h1>
                            <h2 className='title pt-3'>To Take Care Of Your Health</h2>
                            <Link to="/services"><button className="banner-btn mt-4">View Service +</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;