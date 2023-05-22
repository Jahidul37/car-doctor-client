// import React from 'react';

import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-4">
            <div className=" text-center">
                <div className="text-2xl font-bold text-orange-600">Service</div>
                <div className="text-5xl"> Our Services</div>
                <p>the majority have suffered alteration in some form,
                    by injected humour, <br /> or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-6 my-4">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;