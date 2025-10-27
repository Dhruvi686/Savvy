import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MissionPage.css';

const MissionPage = () => {
  return (
    <div className="mission-page">
      <Navbar />

      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Our Mission</h1>
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Our Mission</span>
          </nav>
        </div>
      </div>

      <main className="mission-content">
        <div className="top-sections">
          <section className="mission-section">
            <h2>Our Vision</h2>
            <p>
              Our Vision is to Make Life Easy of Our Customers by Innovative and Smart Solutions & Services.
              Also we Empower Employees of our organization to achieve more in Their Life.
            </p>
          </section>

          <section className="mission-section">
            <h2>Our Mission</h2>
            <p>
              Improving people’s lives through meaningful Services! The technology we provide connects
              people and things. It connects people to opportunities to improve their lives through access
              to education, information and public services, market opportunities and more.
            </p>
            <p>
              We connect people to services and things, creating more efficient and sustainable possibilities.
              The capabilities offered by us—Technical Trainings & Placement Training Services, Computer Training & Certification,
              IT Services like Web, Android & IOS Development, Tours & Travels, Visa Services, and All-in-One Government Services—are immense.
            </p>
            <p>
              Our Aim is Make Life Easy of Individual in Society.
            </p>
          </section>
        </div>

        <section className="mission-section history-section">
          <h2>Our History</h2>
          <p>Our passion for what we do transfers into our services!</p>
          <div className="history-stats">
            <div className="stat">
              <h3>30+</h3>
              <p>Academy Members</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Gov. Projects completed</p>
            </div>
            <div className="stat">
              <h3>25000+</h3>
              <p>Our Students (PMGDISHA, PMKVY)</p>
            </div>
            <div className="stat">
              <h3>220+</h3>
              <p>Facebook Followers</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MissionPage;