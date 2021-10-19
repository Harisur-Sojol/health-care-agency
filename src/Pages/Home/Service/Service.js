import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description, id } = service;
    return (
        <>
            {/* <div className="col-md-4">
                <div className="card service-card">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="card-body">
                        <h3>{name}</h3>
                        <p className="text-secondary fst-italic fw-normal">{description}</p>
                    </div>
                    <div className=" mb-3 ps-4 pe-4 d-flex align-items-center justify-content-between">
                        <h5 className="text-warning fs-2">$ {price}</h5>
                        <Link to={`/serviceDetail/${id}`}><button className="service-btn">Read More</button></Link>
                    </div>
                </div>
            </div> */}

            <div className="mb-5 col-md-4 ">
                <div className="card w-100 h-100 text-center rounded serviceCard">
                    <div className="d-flex justify-content-center align-items-center h-75 p-2">
                        <img src={img} className="card-img-top h-75 w-75" alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="text-secondary fst-italic fw-normal">{description}</p>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex align-items-center justify-content-between ">
                            <h4 className="text-warning price">$ {price}</h4>
                            <Link to={`/serviceDetail/${id}`}><button className="service-btn">Read More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;