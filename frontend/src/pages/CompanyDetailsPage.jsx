import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CompanyDetailsPage.css';

const companies = [
  {
    name: 'Savvy Pvt Ltd',
    brand: 'Savvy Pvt Ltd',
    address: 'SF-13,15,17,19,20,21,22 Anup Arcade, Near GEB, Visnagar road, Mehsana, Gujarat-384001, India',
    phone: '+91 99045 47080',
    email: 'info@savvyonlineservice.com'
  },
  {
    name: 'YUVA NAV NIRMAN GROUP',
    brand: 'YUVA NAV NIRMAN GROUP',
    address: 'SF-21,22, Anup Arcade, Nr.GEB, Mehsana-1, Dist -Mehsana-384001, North Gujarat',
    phone: '+91 99988 85692',
    email: 'yuvanavnirman@gmail.com'
  },
  {
    name: 'Savvy Pvt Ltd',
    brand: 'Savvy Online Services',
    address: 'SF-13,15,17,19,20,21,22 Anup Arcade, Near GEB, Visnagar road, Mehsana, Gujarat-384001, India',
    phone: '+91 99255 33867',
    email: 'savvypmkvy@gmail.com'
  },
  {
    name: 'Savvy Pvt Ltd',
    brand: 'Savvy online Shop',
    address: 'SF-13,15,17,19,20,21,22 Anup Arcade, Near GEB, Visnagar road, Mehsana, Gujarat-384001, India',
    phone: '+91 99255 33867',
    email: 'savvyonlineshop.info@gmail.com'
  },
  {
    name: 'Savvy Pvt Ltd',
    brand: 'Savvy',
    address: 'G-13 Perfect Aarush, Near Vishva karma Vadi Modhera Road, Mehsana, Gujarat-384001, India',
    phone: '+91 99045 47080',
    email: 'support@savvyonlineservice.com'
  }
];

const CompanyDetailsPage = () => {
  return (
    <div className="company-page">
      <Navbar />

      <div className="page-banner">
        <div className="page-banner-content">
          <h1>Company Details</h1>
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/about">About Us</a>
            <span>/</span>
            <span>Company Details</span>
          </nav>
        </div>
      </div>

      <main className="company-content">
        {companies.map((company, index) => (
          <article className="company-card" key={`${company.brand}-${index}`}>
            <h2>{company.name}</h2>
            <h3>{company.brand}</h3>
            <p className="company-address">{company.address}</p>
            <div className="company-contact">
              <p><strong>Phone:</strong> {company.phone}</p>
              <p><strong>Email:</strong> <a href={`mailto:${company.email}`}>{company.email}</a></p>
            </div>
          </article>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default CompanyDetailsPage;