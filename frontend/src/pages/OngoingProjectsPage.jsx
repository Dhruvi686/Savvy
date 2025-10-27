import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './project.css';
// use image placed in frontend/public/team/my-image.jpg
const placeholderUrl = process.env.PUBLIC_URL + '/team/my-image.jpg';

const projects = [
  { id: 1, title: 'District Training Hubs', year: '2024', location: 'Multiple Districts', description: 'Smart classrooms, labs and job-readiness workshops.' },
  { id: 2, title: 'Women Empowerment Drives', year: '2024', location: 'Rural Areas', description: 'Digital literacy and entrepreneurship programs.' },
  { id: 3, title: 'Skill Certification Camps', year: '2024', location: 'Mobile Units', description: 'NSDC-aligned certification camps.' }
];

const OngoingProjectsPage = () => {
  return (
    <div className="ongoing-projects-page">
      <Navbar />

      <section className="ongoing-hero">
        <h1 className="hero-title">Ongoing Projects</h1>
      </section>

      <main className="ongoing-content">
        <div className="projects-grid">
          {projects.map(p => (
            <article key={p.id} className="project-card">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${placeholderUrl})` }}
                aria-hidden="true"
              />
              <div className="card-header">
                <h3 className="project-title">{p.title}</h3>
                <div className="project-year">{p.year}</div>
              </div>

              <div className="project-details">
                <div className="detail-item">
                  <dt>Location</dt>
                  <dd>{p.location}</dd>
                </div>
                <div className="detail-item">
                  <dt>Description</dt>
                  <dd>{p.description}</dd>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OngoingProjectsPage;