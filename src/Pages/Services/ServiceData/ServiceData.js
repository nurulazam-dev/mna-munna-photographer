import { faClock, faPeopleRoof, faPhotoFilm, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ServiceData = () => {
// const ServiceData = ({service}) => {
// const {price}=service;


    const navigate = useNavigate();
    const handleSelectPackage = () => {
        navigate('/checkout')
    }

    return (
        <div>
            {/* {price} */}
            <h2 className='text-center text-primary my-3'>Photography Service Packages</h2>

            <div className="container">

                <CardGroup>
                    <Card className='mx-3'>
                        <Card.Img variant="top" src="https://i.ibb.co/GM8z4sC/1hhdg.png" />
                        <Card.Body>
                            <h2>Classic Package</h2>
                            <h2>$120</h2>
                            <div>
                                <p className='fs-5'><FontAwesomeIcon icon={faPhotoFilm}></FontAwesomeIcon> Approximately 75 High Quality Edited photos</p>
                            </div>
                            <div>
                            <p className='fs-5'><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Duration up to 2 hours</p>
                            </div>
                            <div>
                            <p className='fs-5'><FontAwesomeIcon icon={faPeopleRoof}></FontAwesomeIcon> Pre-wedding consultation</p>
                            </div>
                            <div>
                            <p className='fs-5'><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon> Files provided direct to you online or via USB</p>
                            </div>

                            <button onClick={handleSelectPackage} style={{ height: "30px" }} className='w-100 mx-auto rounded text-center fs-5 bg-success text-white border-0'>Select Package</button>
                        </Card.Body>

                    </Card>
                    <Card className='mx-3'>
                        <Card.Img variant="top" src="https://i.ibb.co/GM8z4sC/1hhdg.png" />
                        <Card.Body>
                            <h2>Classic Package</h2>
                            <h2>$120</h2>
                            <div>
                                <p><FontAwesomeIcon icon={faPhotoFilm}></FontAwesomeIcon> Approximately 75 High Quality Edited photos</p>
                            </div>
                            <div>
                                <p><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Duration up to 2 hours</p>
                            </div>
                            <div>
                                <p><FontAwesomeIcon icon={faPeopleRoof}></FontAwesomeIcon> Pre-wedding consultation</p>
                            </div>
                            <div>
                                <p><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon> Files provided direct to you online or via USB</p>
                            </div>

                            <button style={{ height: "30px" }} className='w-100 mx-auto rounded text-center bg-success text-white border-0'>Select Package</button>
                        </Card.Body>

                    </Card>
                    <Card className='mx-3'>
                        <Card.Img variant="top" src="https://i.ibb.co/GM8z4sC/1hhdg.png" />
                        <Card.Body>
                            <h2>Classic Package</h2>
                            <h2>$120</h2>
                            <div>
                                <p><FontAwesomeIcon icon={faPhotoFilm}></FontAwesomeIcon> Approximately 75 High Quality Edited photos</p>
                            </div>
                            <div>
                                <p><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Duration up to 2 hours</p>
                            </div>
                            <div>
                                <p><FontAwesomeIcon icon={faPeopleRoof}></FontAwesomeIcon> Pre-wedding consultation</p>
                            </div>
                            <div>
                                <p><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon> Files provided direct to you online or via USB</p>
                            </div>

                            <button style={{ height: "30px" }} className='w-100 mx-auto rounded text-center bg-success text-white border-0'>Select Package</button>
                        </Card.Body>

                    </Card>

                </CardGroup>

            </div>

        </div>
    );
};

export default ServiceData;