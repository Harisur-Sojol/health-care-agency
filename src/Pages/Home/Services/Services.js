import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Harisur-Sojol/medicalData/main/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="services" className="mt-5">
            <div className="container">
            <h2 className="fst-italic fw-normal services-heading">Featured Clinical Services For Patients</h2>
            <h3 className="fst-italic fw-normal services-heading mb-5">Our medical specialists care about you & your family’s health</h3>
                <div className="row g-5">
                    {
                        services.map(service => <Service service={service} key={service.id}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;