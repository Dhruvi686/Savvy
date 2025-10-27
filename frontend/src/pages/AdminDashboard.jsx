import React from 'react';
import { Link } from 'react-router-dom';

const sidebarItems = [
  {
    section: 'CLIENT SECTION',
    items: [
      { label: 'Client', to: '/admin-dashboard' },
      { label: 'Job', to: '#' },
      { label: 'Segment', to: '#' },
      { label: 'Invoice', to: '#' }
    ]
  },
  {
    section: 'JOB SECTION',
    items: [
      { label: 'Job Application', to: '#' },
      { label: 'Candidate List', to: '/admin/candidate-list' }, // <-- This opens CandidateList.jsx
      { label: 'Career Application Form', to: '#' }
    ]
  },
  {
    section: 'USER SECTION',
    items: [
      { label: 'Apply Job', to: '/apply-job' }
    ]
  }
];

const stats = [
  { label: 'Total Client', value: 31, color: '#7b2ff2' },
  { label: 'Total Active Client', value: 2, color: '#ff5e62' },
  { label: 'Total In-Active', value: 29, color: '#43cea2' },
  { label: 'Total Job Application', value: 10, color: '#f7971e' }
];

const AdminDashboard = () => (
  <div style={{ display: 'flex', minHeight: '100vh', background: '#f7f8fa' }}>
    {/* Sidebar */}
    <aside style={{
      width: 240,
      background: '#fff',
      borderRight: '1px solid #eee',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
      <div style={{ marginBottom: 32 }}>
        <img src="/logo192.png" alt="Logo" style={{ height: 40, marginBottom: 8 }} />
        <div style={{ fontWeight: 'bold', fontSize: 18 }}>Dashboard</div>
      </div>
      {sidebarItems.map(section => (
        <div key={section.section}>
          <div style={{ fontSize: 12, color: '#888', marginBottom: 8 }}>{section.section}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {section.items.map(item => (
              <li key={item.label} style={{ padding: '8px 0', cursor: 'pointer', color: '#333' }}>
                <span style={{ marginRight: 8 }}>▣</span>
                {item.to !== '#' ? (
                  <Link to={item.to} style={{ color: '#333', textDecoration: 'none' }}>
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>

    {/* Main Content */}
    <main style={{ flex: 1, padding: 32 }}>
      {/* Top Cards */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        {stats.map(stat => (
          <div key={stat.label} style={{
            flex: 1,
            background: stat.color,
            color: '#fff',
            borderRadius: 12,
            padding: 24,
            boxShadow: '0 2px 8px #eee',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: 32, fontWeight: 'bold' }}>{stat.value}</div>
            <div style={{ fontSize: 16 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Client Report Table */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #eee', marginBottom: 32 }}>
        <h3>Client Report</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
          <thead>
            <tr style={{ background: '#f0f0f0' }}>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Total Client</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>New Lead</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Agreement Submitted</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Active Client</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>In-Active Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 8, border: '1px solid #eee' }}>31</td>
              <td style={{ padding: 8, border: '1px solid #eee' }}>0</td>
              <td style={{ padding: 8, border: '1px solid #eee' }}>0</td>
              <td style={{ padding: 8, border: '1px solid #eee' }}>2</td>
              <td style={{ padding: 8, border: '1px solid #eee' }}>29</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Segment-Wise Client Report Table */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #eee' }}>
        <h3>Segment-Wise Client Report</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
          <thead>
            <tr style={{ background: '#f0f0f0' }}>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Segment</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>New Lead</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Agreement Submitted</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Active Client</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>In-Active Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 8, border: '1px solid #eee' }}>HR Solution</td>
              <td style={{ padding: 8, border: '1px solid #eee' }}>0</td>
              <td style={{ padding: 8, border: '1px solid #eee' }}>0</td>
              <td style={{ padding: 8, border: '1px solid #eee' }}>2</td>
              <td style={{ padding: 8, border: '1px solid #eee' }}>23</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </main>
  </div>
);

export default AdminDashboard;
