import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="services">
            <h2>This is Service mvtrdtycg tccfcgctc cfc</h2>
            <div className="container">
                <div className="row g-4">
                    {
                        services.map(service => <Service service={service} key={service.id}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;