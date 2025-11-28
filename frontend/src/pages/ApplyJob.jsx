import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ApplyJob = () => {
  // removed unused navigate; add it back only if you call navigate(...) after submit
  const [form, setForm] = useState({
    name: '',
    city: '',
    email: '',
    mobile: '',
    qualification: '',
    skills: '',
    jobExperience: '',
    experience: '',
    currentSalary: '',
    currentPost: '',
    interestedJobPost: '',
    expectedSalary: '',
    interestedJobLocations: '',
    referenceFrom: '',
  });
  const [cv, setCv] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCv(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('data', JSON.stringify(form));
    formData.append('cv', cv); // cv is the selected file

    try {
      const response = await fetch('/api/jobs/apply', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Application submitted!');
      } else {
        alert('Submission failed.');
      }
    } catch (err) {
      alert('Error submitting application.');
    }
  };

  return (
    <>
      <Navbar />
      <main style={{
        maxWidth: 800,
        margin: '40px auto',
        background: '#fff',
        padding: 32,
        borderRadius: 8,
        boxShadow: '0 2px 8px #eee'
      }}>
        <h2 style={{ color: '#2196f3', marginBottom: 8, textAlign: 'center' }}>
          Apply Now
        </h2>
        <div style={{ textAlign: 'center', marginBottom: 24, fontWeight: 500 }}>
          Fill up below form to submit your job requirement !
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            <div style={{ flex: 1 }}>
              <label>Name *</label>
              <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
            </div>
            <div style={{ flex: 1 }}>
              <label>City *</label>
              <input name="city" value={form.city} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            <div style={{ flex: 1 }}>
              <label>Email *</label>
              <input name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
            </div>
            <div style={{ flex: 1 }}>
              <label>Contact No *</label>
              <input name="mobile" value={form.mobile} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            <div style={{ flex: 1 }}>
              <label>Highest Qualification *</label>
              <input name="qualification" value={form.qualification} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
            </div>
            <div style={{ flex: 1 }}>
              <label>Skills *</label>
              <input name="skills" value={form.skills} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Job Experience *</label>
            <select name="jobExperience" value={form.jobExperience} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            <div style={{ flex: 1 }}>
              <label>Job Experience</label>
              <input name="experience" value={form.experience} onChange={handleChange} style={{ width: '100%', padding: 8, marginTop: 4 }} placeholder="Enter Experience (in years)" />
            </div>
            <div style={{ flex: 1 }}>
              <label>Current/Last Salary</label>
              <input name="currentSalary" value={form.currentSalary} onChange={handleChange} style={{ width: '100%', padding: 8, marginTop: 4 }} placeholder="Enter Current/Last Salary" />
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Current/Last Job Post</label>
            <input name="currentPost" value={form.currentPost} onChange={handleChange} style={{ width: '100%', padding: 8, marginTop: 4 }} placeholder="Enter Current/Last Job Post" />
          </div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            <div style={{ flex: 1 }}>
              <label>Interested Job Post *</label>
              <input name="interestedJobPost" value={form.interestedJobPost} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
            </div>
            <div style={{ flex: 1 }}>
              <label>Expected Salary *</label>
              <input name="expectedSalary" value={form.expectedSalary} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} placeholder="Enter Expected Salary (per month)" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            <div style={{ flex: 1 }}>
              <label>Interested Job Locations *</label>
              <input name="interestedJobLocations" value={form.interestedJobLocations} onChange={handleChange} style={{ width: '100%', padding: 8, marginTop: 4 }} placeholder="Enter Interested Job Locations" />
            </div>
            <div style={{ flex: 1 }}>
              <label>Reference From</label>
              <input name="referenceFrom" value={form.referenceFrom} onChange={handleChange} style={{ width: '100%', padding: 8, marginTop: 4 }} placeholder="Enter Reference From" />
            </div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <label>C/V Upload</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
          </div>
          <div style={{ fontSize: 12, color: '#888', marginBottom: 16 }}>
            Maximum upload file size: 12 MB
          </div>
          <button type="submit" style={{ background: '#2196f3', color: '#fff', padding: '10px 24px', border: 'none', borderRadius: 4, fontSize: 16 }}>
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default ApplyJob;