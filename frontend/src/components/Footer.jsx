import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay" aria-hidden="true" />
      <div className="footer-container">
        <div className="footer-column footer-branding">
          <img src="/savvy-logo.png" alt="Savvy NIEST Logo" className="footer-logo" />
          <span className="heading-underline" />
          {/* <p className="footer-slogan">
            Access our courses, projects, and success stories directly from the SAVVY Android app.
          </p> */}
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook" className="social-icon facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="social-icon twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-icon instagram">
              <FaInstagram />
            </a>
            <a href="https://google.com" aria-label="Google" className="social-icon google">
              <FaGoogle />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="social-icon youtube">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Useful Links</h3>
          <span className="heading-underline" />
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/projects">Our Projects</a></li>
            <li><a href="/courses">Our Courses</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Contact</h3>
          <span className="heading-underline" />
          <ul className="footer-contact">
            <li>+91 99255 33867</li>
            <li>savvyniest@gmail.com</li>
            <li>Second floor -19,20,21 Anup Arcade Near Geb, Visnagar Rd, Mehsana, Gujarat 384001</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Opening Hours</h3>
          <span className="heading-underline" />
          <ul className="footer-hours">
            <li><span>Mon - Tues:</span> 10.00 AM - 6.00 PM</li>
            <li><span>Wed - Thu:</span> 10.00 AM - 6.00 PM</li>
            <li><span>Fri:</span> 10.00 PM - 6.00 PM</li>
            <li><span>Sat:</span> 10.00 AM - 6.00 PM</li>
            <li><span>Sun:</span> Closed</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Savvy National Institute for Education and Skill Training. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;