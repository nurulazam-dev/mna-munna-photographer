import React from 'react';
import useServicesData from '../../../hooks/useServicesData';
import ServiceData from '../ServiceData/ServiceData';

const ServicesData = () => {
    const [services] = useServicesData();
    return (
        <div>
            {
                services.map(service => <ServiceData
                    key={service.id}
                    service={service}
                ></ServiceData>)
            }
        </div>
    );
};

export default ServicesData;