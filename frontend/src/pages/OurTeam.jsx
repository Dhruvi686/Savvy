import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sumit Patel",
      qualification: "B.E. E.C.",
      designation: "Founder",
      department: "Savvy Founder",
      image: "/team/sumit-patel.jpg"
    },
    {
      id: 2,
      name: "Dinesh Prajapati",
      qualification: "B.E. Mech",
      designation: "Project Head",
      department: "Skill",
      image: "/team/dinesh-prajapati.jpg"
    },
    {
      id: 3,
      name: "Sunil Raval",
      qualification: "BCA",
      designation: "Center Head",
      department: "Skill",
      image: "/team/sunil-raval.jpg"
    },
    {
      id: 4,
      name: "Charmi Patel",
      qualification: "B.E.C.E",
      designation: "Web Developer",
      department: "Web Development",
      image: "/team/charmi-patel.jpg"
    },
    {
      id: 5,
      name: "Rajal Sindhav",
      qualification: "B.SC",
      designation: "Computer Trainer",
      department: "Skill",
      image: "/team/rajal-sindhav.jpg"
    },
    {
      id: 6,
      name: "Jigar Chauhan",
      qualification: "DIPLOMA MECH",
      designation: "Computer Trainer",
      department: "Skill",
      image: "/team/jigar-chauhan.jpg"
    },
    {
      id: 7,
      name: "Bharti Mulani",
      qualification: "B.COM",
      designation: "English Trainer",
      department: "Skill",
      image: "/team/bharti-mulani.jpg"
    }
  ];

  return (
    <div className="our-team-page">
      {/* Header Section */}
      <div className="team-header">
        <div className="container">
          <h1 className="team-title">Our Team</h1>
          <p className="team-subtitle">Our Leading Team!</p>
          <div className="title-underline"></div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card-inner">
                  <div className="member-image">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      onError={(e) => {
                        e.target.src = '/team/placeholder.jpg'; // Fallback image
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-qualification">{member.qualification}</p>
                    <div className="member-details">
                      <div className="detail-item">
                        <span className="detail-label">Designation:</span>
                        <span className="detail-value">{member.designation}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Department:</span>
                        <span className="detail-value">{member.department}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

