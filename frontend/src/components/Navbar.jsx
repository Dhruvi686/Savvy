import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="nav-wrapper">
      <div className="nav-bar">
        <div className="nav-content">
          <div className="logo-container">
            <img src={process.env.PUBLIC_URL + '/savvy-logo.png'} alt="Savvy Logo" />
          </div>
          <nav aria-label="Primary">
            <ul className="nav-menu">
              <li className="active"><Link to="/">Home</Link></li>
              <li className="has-dropdown">
                <Link to="/about">About Us</Link>
                <ul className="dropdown">
                  <li><Link to="/about/history">History</Link></li>
                  <li><Link to="/about/mission">Our Mission</Link></li>
                  <li><Link to="/about/company">Company Details</Link></li>
                  <li><Link to="/about/team">Our Team</Link></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link to="/projects">Our Projects</Link>
                <ul className="dropdown">
                  <li className="has-submenu">
                    <Link to="/projects">Projects</Link>
                    <ul className="submenu">
                      <li><Link to="/projects/ongoing">Ongoing Projects</Link></li>
                      <li><Link to="/projects/completed">Completed Projects</Link></li>
                      <li><Link to="/projects/completed">Upcoming Projects</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/projects/partners">Our Partners</Link></li>
                  <li><Link to="/projects/gallery">Project Gallery</Link></li>
                  <li><Link to="/projects/success-stories">Success Stories</Link></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link to="/courses">Courses</Link>
                <ul className="dropdown">
                  <li><Link to="/courses/free">Free Courses</Link></li>
                  <li><Link to="/courses/paid">Paid Courses</Link></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link to="/jobs">Jobs & Placement</Link>
                <ul className="dropdown">
                  <li><Link to="/jobs/job-1">Browse Jobs</Link></li>
                  <li><Link to="/apply-job">Submit Resume</Link></li>
                  <li><Link to="/jobs/job-2">Success Stories</Link></li>
                  <li><Link to="/jobs/job-2">Associated With</Link></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link to="/services">Other Services</Link>
                <ul className="dropdown">
                  <li><Link to="/jobs/job-1">Live Khakhra</Link></li>
                  <li><Link to="/jobs/job-2">CED - કૌશલ્ય વર્ધન કેન્દ્ર</Link></li>
                </ul>
              </li>
              
              <li><Link to="/contact">Contact Us</Link></li>
              <li className="has-dropdown">
                <Link to="/login">Login</Link>
                <ul className="dropdown">
                  <li><Link to="/student-login">Student Login</Link></li>
                  <li><Link to="/franchise-login">Franchise Login</Link></li>
                  <li><Link to="/portal-login">Portal Login</Link></li>
                  <li><Link to="/admin-login">Admin Login</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;