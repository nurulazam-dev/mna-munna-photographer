import { faClock, faPeopleRoof, faPhotoFilm, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ServiceData = () => {
// const ServiceData = ({service}) => {
// const {name, price,duration}=service;


    const navigate = useNavigate();
    const handleSelectPackage = () => {
        navigate('/checkout')
    }

 return (
        <div>
            <h2 className='text-center text-primary my-3'>Photography Service Packages</h2>
           {/*  <h2>{price}</h2>
            <h2>{name}</h2>
            <h2>{duration}</h2> */}

            <div className="container">

                <CardGroup>
                    <Card className='mx-3'>
                        <Card.Img variant="top" src="https://i.ibb.co/GM8z4sC/1hhdg.png" />
                        <Card.Body>
                            <h2>Classic Package</h2>
                            <h2>$1120</h2>
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
                        <Card.Img variant="top" src="https://i.ibb.co/ZTMfyDQ/3-1-d.png" />
                        <Card.Body>
                            <h2>Exclusive Package</h2>
                            <h2>$1320</h2>
                            <div>
                                <p className='fs-5'><FontAwesomeIcon icon={faPhotoFilm}></FontAwesomeIcon> Approximately 150-200 High Quality Edited photos</p>
                            </div>
                            <div>
                                <p className='fs-5'><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Duration up to 4 hours</p>
                            </div>
                            <div>
                                <p className='fs-5'><FontAwesomeIcon icon={faPeopleRoof}></FontAwesomeIcon> Pre-wedding consultation</p>
                            </div>
                            <div>
                                <p className='fs-5'><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon> Files provided direct to you online or via USB</p>
                            </div>

                            <button onClick={handleSelectPackage} style={{ height: "30px" }} className='fs-5 w-100 mx-auto rounded text-center bg-success text-white border-0'>Select Package</button>
                        </Card.Body>

                    </Card>
                    <Card className='mx-3'>
                        <Card.Img variant="top" src="https://i.ibb.co/X5RVv83/2-1-1.png" />
                        <Card.Body>
                            <h2>Express Package</h2>
                            <h2>$1650</h2>
                            <div>
                                <p className='fs-5'><FontAwesomeIcon icon={faPhotoFilm}></FontAwesomeIcon> Approximately 320-400 High Quality Edited photos</p>
                            </div>
                            <div>
                                <p className='fs-5'><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Duration up to 6 hours</p>
                            </div>
                            <div>
                                <p className='fs-5'><FontAwesomeIcon icon={faPeopleRoof}></FontAwesomeIcon> Pre-wedding consultation</p>
                            </div>
                            <div>
                                <p className='fs-5'><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon> Files provided direct to you online or via USB</p>
                            </div>

                            <button onClick={handleSelectPackage}  style={{ height: "30px" }} className='fs-5 w-100 mx-auto rounded text-center bg-success text-white border-0'>Select Package</button>
                        </Card.Body>

                    </Card>

                </CardGroup>

            </div>

        </div>
    );
}

export default ServiceData;