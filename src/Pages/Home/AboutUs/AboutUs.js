import React from 'react';
import './AboutUs.css';
import aboutImg2 from '../../../images/aboutImage/aboutImg2.png'

const AboutUs = () => {
    return (
        <div id="aboutUs">
            <h3 className="text-center about-heading">About Us</h3>
            <hr className="about-hr-bar" />
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-md-7">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus neque, assumenda maxime. Eaque libero unde corrupti deleniti maxime ratione doloremque suscipit perferendis aperiam labore debitis atque odit neque possimus optio quo.</p>
                        <div className="row">
                            <div className="col-md-6 my-4">
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className="about-icon">
                                        <i className="fas fa-stethoscope icon me-4"></i>
                                    </div>
                                    <div className="health-info">
                                        <h5>Outdoor Checkup</h5>
                                        <p className="ps-4">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-4">
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className="about-icon">
                                        <i class="fas fa-ambulance icon me-4"></i>
                                    </div>
                                    <div className="health-info">
                                        <h5>Emergency Care</h5>
                                        <p className="ps-4">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-4">
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className="about-icon">
                                        <i class="fas fa-user-nurse icon me-4"></i>
                                    </div>
                                    <div className="health-info">
                                        <h5>Nurse Care</h5>
                                        <p className="ps-4">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-4">
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className="about-icon">
                                        <i class="fas fa-burn icon me-4"></i>
                                    </div>
                                    <div className="health-info">
                                        <h5>Blood Test</h5>
                                        <p className="ps-4">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-4">
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className="about-icon">
                                        <i class="fas fa-procedures icon me-4"></i>
                                    </div>
                                    <div className="health-info">
                                        <h5>Operation Theater</h5>
                                        <p className="ps-4">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-4">
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className="about-icon">
                                        <i class="fas fa-pills  icon me-4"></i>
                                    </div>
                                    <div className="health-info">
                                        <h5>Pharmacy</h5>
                                        <p className="ps-4">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className='w-100' src={aboutImg2} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;




//nurse
{/*  */ }