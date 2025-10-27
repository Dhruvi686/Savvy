import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './courses.css';

const PAID_SAMPLE = [
  { id: 'fsd', title: 'Full-Stack Web Development', duration: '6 Months' },
  { id: 'ai', title: 'AI & ML Foundation', duration: '4 Months' },
  { id: 'ux', title: 'UI/UX Design', duration: '3 Months' }
];

export default function PaidCoursesPage() {
  const [q, setQ] = useState('');

  const filtered = PAID_SAMPLE.filter(c => c.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="courses-page paid-courses-page">
      <Navbar />
      <header className="courses-hero">
        {/* <div className="hero-top-links">
          <a href="/services">Other Services</a>
          <a href="/contact">Contact Us</a>
          <a href="/login">Login</a>
        </div> */}
        <h1>Paid Courses</h1>
        <p className="hero-sub">Explore paid programs (sample list). Use the search box to find a course.</p>
      </header>

      <main className="courses-main container">
        <div className="search-bar-wide">
          <input placeholder="Search courses..." value={q} onChange={e => setQ(e.target.value)} />
        </div>

        <section className="courses-grid-paid">
          {filtered.map(c => (
            <article key={c.id} className="course-card flat">
              <h3>{c.title}</h3>
              <div className="course-duration">{c.duration}</div>
              <p className="course-desc">Short description goes here. Click apply to use the same application form on Free Courses page.</p>
              <div className="course-actions">
                <a className="btn-apply" href="/courses/register">Apply</a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}