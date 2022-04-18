import { useEffect, useState } from 'react';
// import url from "../Data/data.json"

const useServicesData = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // fetch(url)
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
};

export default useServicesData;