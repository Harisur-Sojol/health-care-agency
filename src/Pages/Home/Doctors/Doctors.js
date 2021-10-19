import React from 'react';
import './Doctors.css'
import doctor1 from '../../../images/doctors/doctor1.png'
import doctor2 from '../../../images/doctors/doctor2.png'
import doctor3 from '../../../images/doctors/doctor3.png'
import doctor4 from '../../../images/doctors/doctor4.png'
import doctor5 from '../../../images/doctors/doctor5.png'


const Doctors = () => {
    return (
        <div id='doctors'>
            <h3 className="doctors-heading">Our Specialist</h3>
            <hr className="hr-bar" />
            <div className="container ">
                <div className="row m-4 g-5">
                    <div className="mb-5 col-md-4 ">
                        <div className="card w-100 h-100 text-center rounded doctorCard">
                            <div className="d-flex justify-content-center align-items-center h-75 p-2">
                                <img src={doctor1} className="card-img-top h-75 w-75" alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Dr. Jonathon Alex</h5>
                                <p className="text-secondary fst-italic fw-normal">Orthopaedics</p>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-between ">
                                    <i class="fab fa-facebook icon ps-2"></i>
                                    <i class="fab fa-twitter icon pe-2"></i>
                                    <i class="fab fa-google-plus-g icon me-5"></i>
                                    <button className="doctor-btn">view Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 col-md-4 ">
                        <div className="card w-100 h-100 text-center rounded doctorCard">
                            <div className="d-flex justify-content-center align-items-center h-75 p-2">
                                <img src={doctor2} className="card-img-top h-75 w-75" alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Dr. Smile Jhon</h5>
                                <p className="text-secondary fst-italic fw-normal">Orthopaedics</p>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-between ">
                                    <i class="fab fa-facebook icon ps-2"></i>
                                    <i class="fab fa-twitter icon pe-2"></i>
                                    <i class="fab fa-google-plus-g icon me-5"></i>
                                    <button className="doctor-btn">view Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 col-md-4 ">
                        <div className="card w-100 h-100 text-center rounded doctorCard">
                            <div className="d-flex justify-content-center align-items-center h-75 p-2">
                                <img src={doctor3} className="card-img-top h-75 w-75" alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Dr. Mark Jacobson</h5>
                                <p className='text-secondary fst-italic fw-normal'>Cardiology</p>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-between ">
                                    <i class="fab fa-facebook icon ps-2"></i>
                                    <i class="fab fa-twitter icon pe-2"></i>
                                    <i class="fab fa-google-plus-g icon me-5"></i>
                                    <button className="doctor-btn">view Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 col-md-4 ">
                        <div className="card w-100 h-100 text-center rounded doctorCard">
                            <div className="d-flex justify-content-center align-items-center h-75 p-2">
                                <img src={doctor4} className="card-img-top h-75 w-75" alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Dr. Mark Jacobson</h5>
                                <p className='text-secondary fst-italic fw-normal'>Cardiology</p>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-between ">
                                    <i class="fab fa-facebook icon ps-2"></i>
                                    <i class="fab fa-twitter icon pe-2"></i>
                                    <i class="fab fa-google-plus-g icon me-5"></i>
                                    <button className="doctor-btn">view Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 col-md-4 ">
                        <div className="card w-100 h-100 text-center rounded doctorCard">
                            <div className="d-flex justify-content-center align-items-center h-75 p-2">
                                <img src={doctor5} className="card-img-top h-75 w-75" alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Dr. Mark Jacobson</h5>
                                <p className='text-secondary fst-italic fw-normal'>Cardiology</p>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-between ">
                                    <i class="fab fa-facebook icon ps-2"></i>
                                    <i class="fab fa-twitter icon pe-2"></i>
                                    <i class="fab fa-google-plus-g icon me-5"></i>
                                    <button className="doctor-btn">view Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Doctors;