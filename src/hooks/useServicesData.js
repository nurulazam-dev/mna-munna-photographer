import { useEffect, useState } from 'react';
import url from '../services.json'

// console.log(url);
const useServicesData = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
};

export default useServicesData;