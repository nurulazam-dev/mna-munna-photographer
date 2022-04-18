import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ServiceData from '../Services/ServiceData/ServiceData';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceData></ServiceData>
            <Footer></Footer>
        </div>
    );
};

export default Home;