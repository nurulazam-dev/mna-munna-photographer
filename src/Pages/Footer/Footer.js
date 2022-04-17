import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark w-100 mt-3'>
            <div className='row pt-3'>
                <div className='text-white col mx-5 '>
                    <h5 className='my-3 text-center'>Contact us</h5>
                    <div>
                    <p>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <span>Chittagong,Bangladesh.</span>
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <span>+8801#########</span>
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <span>info@mnaphotograper.com</span>
                    </p>
                    </div>
                </div>
                <div className='text-white col mx-5'>
                    <h5 className='text-center my-3'>Our Policy:</h5>
                </div>
            </div>
            <p className='text-white my-2 py-3 text-center'><small>Copyright © {year} Mna Munna Photographer</small></p>
        </div>
    );
};

export default Footer;