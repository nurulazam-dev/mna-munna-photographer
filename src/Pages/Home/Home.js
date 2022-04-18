import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ServiceData from '../Services/ServiceData/ServiceData';
// import ServicesData from '../Services/ServicesData/ServicesData';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <ServicesData></ServicesData> */}
            
            <ServiceData></ServiceData>
            <Footer></Footer>
        </div>
    );
};

export default Home;