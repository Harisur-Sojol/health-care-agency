import React from 'react';
import './Service.css'

const Service = ({service}) => {
    console.log(service)
    const {name, img, description} = service;
    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;