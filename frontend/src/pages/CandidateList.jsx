import React, { useEffect, useState } from 'react';

const CandidateList = () => {
  const [applications, setApplications] = useState([]);
  const [editing, setEditing] = useState({});
  const [remarks, setRemarks] = useState({});

  useEffect(() => {
    fetch('/api/jobs/applications')
      .then(res => res.json())
      .then(data => setApplications(data));
  }, []);

  const handleEdit = (id, currentRemarks) => {
    setEditing({ ...editing, [id]: true });
    setRemarks({ ...remarks, [id]: currentRemarks || '' });
  };

  const handleSave = async (id) => {
    await fetch(`/api/jobs/applications/${id}/remarks`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ remarks: remarks[id] }),
    });
    setEditing({ ...editing, [id]: false });
    // Refresh list
    fetch('/api/jobs/applications')
      .then(res => res.json())
      .then(data => setApplications(data));
  };

  // Accept/Reject handlers
  const handleStatus = async (id, status) => {
    await fetch(`/api/jobs/applications/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    // Refresh list
    fetch('/api/jobs/applications')
      .then(res => res.json())
      .then(data => setApplications(data));
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '40px auto',
        background: '#fff',
        padding: 32,
        borderRadius: 8,
        boxShadow: '0 2px 8px #eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <button
        style={{ float: 'right', margin: '16px' }}
        onClick={() => {
          localStorage.removeItem('isUser'); // or 'isAdmin' for admin panel
          window.location.href = 'http://localhost:3000/admin-login'; // redirect to Dashboard after logout
        }}
      >
        Logout
      </button>
      <h2>Candidate List</h2>
      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Qualification</th>
            <th>skills</th>
            <th>Experience</th>
            <th>current/Last Salary</th>
            <th>current/Last Post</th>
            <th>Interested Job Post</th>
            <th>Expected Salary</th>
            <th>Interested Job Locations</th>
            <th>Reference From</th>
            <th>CV</th>
            <th>Remarks</th>
            <th>Action</th> {/* New column */}
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.name}</td>
              <td>{app.city}</td>
              <td>{app.email}</td>
              <td>{app.mobile}</td>
              <td>{app.qualification}</td>
              <td>{app.skills}</td>
              <td>{app.experience}</td>
              <td>{app.currentSalary}</td>
              <td>{app.currentPost}</td>
              <td>{app.interestedJobPost}</td>
              <td>{app.expectedSalary}</td>
              <td>{app.interestedJobLocations}</td>
              <td>{app.referenceFrom}</td>
              <td>
                {app.cvUrl ? (
                  <a
                    href={`http://localhost:5000/api/jobs/view/${app.cvUrl.replace(/^uploads[\\/]/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CV
                  </a>
                ) : (
                  'No CV uploaded'
                )}
              </td>
              <td>
                {editing[app._id] ? (
                  <>
                    <input
                      value={remarks[app._id] || ''}
                      onChange={e => setRemarks({ ...remarks, [app._id]: e.target.value })}
                    />
                    <button onClick={() => handleSave(app._id)}>Save</button>
                  </>
                ) : (
                  <>
                    {app.remarks || ''}
                    <button style={{ marginLeft: 8 }} onClick={() => handleEdit(app._id, app.remarks)}>Edit</button>
                  </>
                )}
              </td>
              <td>
                <button
                  style={{ marginRight: 8, background: '#4caf50', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: 4, cursor: 'pointer' }}
                  onClick={() => handleStatus(app._id, 'accepted')}
                >
                  Accept
                </button>
                <button
                  style={{ background: '#f44336', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: 4, cursor: 'pointer' }}
                  onClick={() => handleStatus(app._id, 'rejected')}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;