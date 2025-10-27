import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', phone: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // replace endpoint with your backend API if available
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      alert('Message submitted. Thank you!');
      setForm({ name: '', email: '', subject: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Submission failed.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="contact-page">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>Interested in discussing? We bring a personal and effective approach to every service we provide.</p>
        </section>

        <div className="contact-container">
          <aside className="contact-info">
            <h3>OUR HEAD OFFICE LOCATION</h3>
            <p>Second floor -19,20,21 Anup Arcade<br/>Near Geb, Visnagar Rd, Mehsana, Gujarat 384001<br/><br/></p>

            <h3>OUR CONTACT NUMBER</h3>
            <p><a href="tel:+919925533867">+91 99255 33867</a><br/><br/></p>

            <h3>OUR CONTACT E-MAIL</h3>
            <p><a href="mailto:info@savvyonlineservice.com">info@savvyonlineservice.com</a></p>
          </aside>

          <section className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Name</label>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Enter Name" />

              <label>Email</label>
              <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Enter Email" />

              <label>Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Enter Subject" />

              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Enter Phone" />

              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Enter Message" rows="6" />

              <div className="form-note">All fields are mandatory!</div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </section>
        </div>

        {/* Find us on map */}
        <section className="contact-map-section">
          <div className="contact-map-container">
            <h2>Find Us on Map</h2>
            <div className="map-wrapper" aria-hidden={false}>
              <iframe
                title="Savvy - Mehsana"
                src="https://www.google.com/maps?q=Second%20floor%20-19,20,21%20Anup%20Arcade%20Near%20GEB%20Visnagar%20Rd%20Ramdavnagar%20Mehsana%20Gujarat%20384001&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;