import React from 'react';
import './footer.css'
import footerLogo from '../../../images/services/service1.png'

const Footer = () => {
    return (
        <>
            <div className='footer-area'>
                <div className="container">
                    <div className="row mt-5 pt-5">
                        <div className="col-md-3 my-3 text-white">
                            <img className='footer-img my-3' src={footerLogo} alt="" />
                            <h6>About Health Care Agency</h6>
                            <p>Sed ipsum posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo dui laoreet dignissim lectus etiam ipsum habitant tristique</p>
                        </div>
                        <div className="col-md-3 my-3">
                            <h3 className="text-white">Helpful Links</h3>
                            <hr className="mb-2 p-0 text-white" />
                            <ul>
                                <li className='info'>How to avoid diseases</li>
                                <li className='info'>Become healthy in 5 steps</li>
                                <li className='info'>Fruits Juices for a Day</li>
                            </ul>
                        </div>
                        <div className="col-md-3 my-3 text-white">
                            <h3 className="mb-3">GET IN TOUCH</h3>
                            <hr className="mb-2 p-0 text-white"/>
                            <ul className="d-flex conatct-list text-center mb-0">
                                <li className="pe-3">
                                    <i className="fas fa-phone-alt"></i>
                                </li>
                                <li>
                                    <p className='footer-info'>+88 018 785 4589</p>
                                </li>
                            </ul>
                            <ul className='d-flex conatct-list text-center mb-0'>
                                <li className="pe-3">
                                    <i className="far fa-envelope"></i>
                                </li>
                                <li>
                                    <p className='footer-info'>www.healthCareAgency@email.com</p>
                                </li>
                            </ul>
                            <ul className='d-flex conatct-list text-center mb-0'>
                                <li className="pe-3">
                                    <i className="fas fa-globe-americas"></i>
                                </li>
                                <li>
                                    <p className='footer-info'>www.abc.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 my-3 text-white ">
                            <h3>Opening Hours</h3>
                            <hr className="mb-2 p-0 text-white"/>
                            <div className=" ps-3 pe-3 d-flex align-items-center justify-content-between">
                                <p>Monday-Friday</p>
                                <p>08:00am-10:00pm</p>
                            </div>
                            <div className=" ps-3 pe-3 d-flex align-items-center justify-content-between">
                                <p>Saturday - Sunday</p>
                                <p>09:00am-06:00pm</p>
                            </div>
                            <div className=" ps-3 pe-3 d-flex align-items-center justify-content-between">
                                <p>Emergency Services</p>
                                <p>24 hours Open</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;