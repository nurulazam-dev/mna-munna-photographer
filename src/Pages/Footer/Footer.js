import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark w-100 mt-3'>
            <div className='row pt-3'>
                <div className='text-white col '>
                    <h4 className='my-3 text-center'>Contact us</h4>
                    <div className='w-50 mx-auto'>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <span className='mx-2'>Chittagong, Bangladesh.</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <span className='mx-2'>+8801810-000000</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <span className='mx-1'>info@mnaphotograper.com</span>
                        </p>
                    </div>
                </div>
                <div className='text-white col mx-5'>
                    <h4 className='text-center my-3'>Our Policy:</h4>
                    <div className="w-50 mx-auto">
                    <h6>Privacy Policy</h6>
                    <h6>Terms & Conditions</h6>
                    <h6>Terms of Service</h6>
                    <h6>Cookie Policy</h6>
                    </div>
                </div>
                <div className='text-white col '>
                    <h4 className='my-3 text-center'>Important Link</h4>
                    <div className='w-50 mx-auto'>
                        <Link to="blogs" className='text-warning fs-5 text-decoration-none'>Blogs</Link> <br />
                        <Link to="about" className='text-warning fs-5 text-decoration-none'>About</Link> <br />
                        <Link to="checkout" className='text-warning fs-5 text-decoration-none'>Checkout</Link>

                    </div>
                </div>
            </div>
            <p className='text-white my-2 py-3 text-center'><small>Copyright © {year} Mna Munna Photographer</small></p>
        </div>
    );
};

export default Footer;