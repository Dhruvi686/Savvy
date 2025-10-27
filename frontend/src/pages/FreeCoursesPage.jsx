import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './courses.css';

const FREE_COURSES = [
  { id: 'ds', title: 'Distributor Salesman', description: 'Individuals in this position visits retail /wholesale outlets as per daily route plan & makes sales call using relevant selling aids like handheld POS, product samples and order forms.', duration: '3 Months' },
  { id: 'cde', title: 'Courier Delivery Executive', description: 'Courier Delivery Executives are also known as Delivery Executives or Couriers. Individuals in this role are on-the-road staff who are responsible for collecting packages from the warehouse and delivering to customers on time while maintaining records.', duration: '3 Months' },
  { id: 'ccc', title: 'Certificate of Computer Concept - CCC', description: 'Computers are important tools in nearly every profession, so almost everyone can benefit by knowing how they work and how to use them. This course covers basics of MS Office, internet, and digital literacy.', duration: '2 Months' },
  { id: 'ees', title: 'Certi.course in Effective English & Career Skills', description: 'Enhanced communication skills in English can result to not only an improved social life, but also better job opportunities in the future. From job interview techniques to resume writing, this course covers practical skills.', duration: '3 Months' }
];

export default function FreeCoursesPage() {
  const [query, setQuery] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', mobile: '', city: '', gender: 'Male', course: ''
  });

  const filtered = FREE_COURSES.filter(c => c.title.toLowerCase().includes(query.toLowerCase()));

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // replace with real submit
    alert(`Application submitted for ${form.course || '—'}`);
    setForm({ name: '', email: '', mobile: '', city: '', gender: 'Male', course: '' });
  }

  const truncate = (text, n = 120) => (text.length > n ? text.slice(0, n).trim() + '...' : text);

  return (
    <div className="courses-page free-courses-page">
      <Navbar />
      <header className="courses-hero">
        <h1>Course List</h1>
        <p className="hero-sub">Browse free courses. Click Apply to use the form on the right.</p>
      </header>

      <main className="courses-main container">
        <aside className="courses-sidebar">
          <div className="search-box">
            <label htmlFor="course-search">Search By Course Name</label>
            <input id="course-search" aria-label="Search courses" placeholder="Type course name..." value={query} onChange={e => setQuery(e.target.value)} />
          </div>

          <div className="categories">
            <div className="cat">Categories</div>
            <ul>
              <li className="active">Free ({FREE_COURSES.length})</li>
              <li>Paid (38)</li>
            </ul>
          </div>

          <div className="apply-cta">
            <h4>To Learn Our Courses</h4>
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Apply Now</button>
          </div>
        </aside>

        <section className="courses-list">
          {filtered.map(course => (
            <article key={course.id} className="course-card">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{truncate(course.description, 120)}</p>
              <div className="course-duration"><strong>Duration:</strong> {course.duration}</div>
            </article>
          ))}
        </section>

        <aside className="courses-form">
          <form onSubmit={handleSubmit} className="apply-form">
            <h3>Apply Now</h3>

            <label>Name *</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Enter Name" required />

            <label>Email *</label>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Enter Email" type="email" required />

            <label>Mobile *</label>
            <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter Mobile Number" required />

            <label>City *</label>
            <input name="city" value={form.city} onChange={handleChange} placeholder="Enter City" />

            <label>Gender *</label>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <label>Course *</label>
            <select name="course" value={form.course} onChange={handleChange} required>
              <option value="">-----Please Select-----</option>
              {FREE_COURSES.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
            </select>

            <label>Photo Upload (pdf/jpeg)</label>
            <input type="file" accept=".pdf,.jpg,.jpeg,.png" />

            <label>Adhar Upload (pdf/jpeg)</label>
            <input type="file" accept=".pdf,.jpg,.jpeg,.png" />

            <button type="submit" className="btn-submit">Submit Application</button>
          </form>
        </aside>
      </main>

      <Footer />
    </div>
  );
}