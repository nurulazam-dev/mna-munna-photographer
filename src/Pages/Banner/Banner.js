import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../images/Banner/banner 1.webp"
import banner2 from "../../images/Banner/banner 2.jfif"
import banner3 from "../../images/Banner/banner 3.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel variant="white">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                        style={{height: "450px"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                        style={{height: "450px"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                        style={{height: "450px"}}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;