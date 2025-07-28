import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4">
            <h5 className="mb-3 border-bottom pb-2">Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> Chittagong, Bangladesh
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +8801810-000000
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> info@mnaphotograper.com
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="mb-3 border-bottom pb-2">Our Policies</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="mb-3 border-bottom pb-2">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/register" className="footer-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="bg-light" />

        <div className="text-center">
          <small>Copyright © {year} MNA Munna Photographer</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
