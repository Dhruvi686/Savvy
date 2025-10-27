import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './project.css';

const projects = [
  {
    id: 1,
    year: '2019',
    projectName: '7th Economic Census Survey 2019',
    department: 'Ministry of Statistics & Programme Implementation',
    districtState: 'Mehsana, Gujarat',
    sector: 'Census Survey',
    courseCategory: 'Economic Census Survey',
    trained: 'N/A',
    placed: 'N/A'
  },
  {
    id: 2,
    year: '2018',
    projectName: 'Digital Jagriti Abhiyan',
    department: 'Ministry of Electronics & IT',
    districtState: 'Mehsana, Gujarat',
    sector: 'Cashless Bharat',
    courseCategory: 'Digital Payment Methods',
    trained: '40,000+ Rural People',
    placed: 'N/A'
  },
  {
    id: 3,
    year: '2019',
    projectName: '1st. National Urban Livelihood Mission (NULM)',
    department: 'Nagarpalika - Gujarat Urban Livelihood Mission',
    districtState: 'Mehsana, Gujarat',
    sector: 'Electrical (NCVT)',
    courseCategory: 'Electrician Domestic',
    trained: '50 Students',
    placed: 'Ongoing'
  },
  {
    id: 4,
    year: '2018',
    projectName: '1st. Pradhan Mantri Kaushal Vikas Yojana 2.0',
    department: 'MSDE',
    districtState: 'Gujarat',
    sector: 'Retail & Logistics',
    courseCategory: 'Distributor Salesman & Courier Delivery Executive',
    trained: '240 Students',
    placed: '168 Students'
  },
  {
    id: 5,
    year: '2016',
    projectName: 'Sub Register',
    department: 'Department Of Land Resources',
    districtState: 'Mehsana, Gujarat',
    sector: 'Data Entry Computer Work',
    courseCategory: 'Gujarati Data Entry',
    trained: 'N/A',
    placed: 'N/A'
  },
  {
    id: 6,
    year: '2015',
    projectName: 'National Food Security Act (NFSA)',
    department: 'Mamlatdar Kacheri Mehsana',
    districtState: 'Mehsana, Gujarat',
    sector: 'Data Entry Computer Work',
    courseCategory: 'Gujarati English Data Entry',
    trained: 'N/A',
    placed: 'N/A'
  }
];

const CompletedProjectsPage = () => {
  return (
    <div className="completed-projects-page">
      <Navbar />

      <header className="completed-hero">
        <h1 className="hero-title">Our Completed Projects</h1>
        <p className="hero-subtitle">Highlights of training and community initiatives delivered across districts.</p>
      </header>

      <main className="completed-content">
        <div className="projects-grid">
          {projects.map(p => (
            <article key={p.id} className="project-card">
              <div className="card-header">
                <h3 className="project-name">{p.projectName}</h3>
                <div className="project-meta">{p.year}</div>
              </div>

              <dl className="project-details">
                <div className="detail-item">
                  <dt>Department / Funded By</dt>
                  <dd>{p.department}</dd>
                </div>
                <div className="detail-item">
                  <dt>District / State</dt>
                  <dd>{p.districtState}</dd>
                </div>
                <div className="detail-item">
                  <dt>Sector / Industry</dt>
                  <dd>{p.sector}</dd>
                </div>
                <div className="detail-item">
                  <dt>Course / Category</dt>
                  <dd>{p.courseCategory}</dd>
                </div>
                <div className="detail-item">
                  <dt>Trained</dt>
                  <dd>{p.trained}</dd>
                </div>
                <div className="detail-item">
                  <dt>Placed</dt>
                  <dd>{p.placed}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompletedProjectsPage;