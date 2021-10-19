import React from 'react';
import './AboutUs.css';
import aboutImg2 from '../../../images/aboutImage/aboutImg2.png'

const AboutUs = () => {
    return (
        <div id="aboutUs">
            <h3 className="text-center about-heading">About Us</h3>
            <hr className="about-hr-bar" />
            <div className="container">
                <div className="row mt-5 mb-3 align-items-center">
                    <div className="col-md-7">
                        <p className="fs-6 fw-normal">The Health Care Agency is a regional provider, charged with protecting and promoting individual, family and community health through coordination of public and private sector resources. HCA's service environment is complex, with 180 different funding sources and over 200 State and Federal mandates. The mandates under which HCA operates require the County to provide for, or to regulate, certain health services. Many also carry specific requirements for staffing, operations, claiming and record-keeping.</p>
                        <div className="row">
                            <div className="col-md-6 my-4">
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className="about-icon">
                                        <i className="fas fa-stethoscope iCon me-4"></i>
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
                                        <i class="fas fa-ambulance iCon me-4"></i>
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
                                        <i class="fas fa-user-nurse iCon me-4"></i>
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
                                        <i class="fas fa-burn iCon me-4"></i>
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
                                        <i class="fas fa-procedures iCon me-4"></i>
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
                                        <i class="fas fa-pills  iCon me-4"></i>
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