import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

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
      { label: 'Candidate List', to: '/admin/candidate-list' },
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

const AdminDashboard = () => {
  const [dashboardStats, setDashboardStats] = useState({
    totalClients: 0,
    activeClients: 0,
    inactiveClients: 0,
    totalApplications: 0
  });

  const [clientReport, setClientReport] = useState({
    newLeads: 0,
    agreementSubmitted: 0
  });

  useEffect(() => {
    // Fetch dashboard statistics
    const fetchDashboardData = async () => {
      try {
        // Fetch main stats
        const statsResponse = await fetch('/api/dashboard/stats');
        const statsData = await statsResponse.json();
        setDashboardStats(statsData);

        // Fetch client report data
        const reportResponse = await fetch('/api/dashboard/client-report');
        const reportData = await reportResponse.json();
        setClientReport({
          newLeads: reportData.newLeads,
          agreementSubmitted: reportData.agreementSubmitted
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  const stats = [
    { label: 'Total Client', value: dashboardStats.totalClients, color: '#7b2ff2' },
    { label: 'Total Active Client', value: dashboardStats.activeClients, color: '#ff5e62' },
    { label: 'Total In-Active', value: dashboardStats.inactiveClients, color: '#43cea2' },
    { label: 'Total Job Application', value: dashboardStats.totalApplications, color: '#f7971e' }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f7f8fa' }}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ marginBottom: 32 }}>
          <img 
            src="/savvy-logo.png" 
            alt="Savvy Admin" 
            className="admin-logo"
            style={{ 
              height: 60,
              marginBottom: 8,
              display: 'block'
            }} 
          />
          <div style={{ 
            fontWeight: 'bold', 
            fontSize: 18,
            background: 'linear-gradient(45deg, #7b2ff2, #43cea2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Admin Dashboard
          </div>
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
        {/* Stats Cards with Loading Animation */}
        <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
          {stats.map(stat => (
            <div 
              key={stat.label} 
              className="stat-card"
              style={{
                flex: 1,
                background: stat.color,
                color: '#fff',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 2px 8px #eee',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.3s ease'
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 'bold' }}>
                {stat.value}
              </div>
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
                <td style={{ padding: 8, border: '1px solid #eee' }}>{dashboardStats.totalClients}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{clientReport.newLeads}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{clientReport.agreementSubmitted}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{dashboardStats.activeClients}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{dashboardStats.inactiveClients}</td>
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
};

export default AdminDashboard;
