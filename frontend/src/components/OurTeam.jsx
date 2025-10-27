import React, { useEffect } from 'react';
import '../pages/OurTeam.css';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sumit Patel',
      qualification: 'B.E. E.C.',
      designation: 'Founder',
      department: 'Savvy Founder',
      image: '/team/sumit-patel.jpg'
    },
    {
      id: 2,
      name: 'Dinesh Prajapati',
      qualification: 'B.E. Mech',
      designation: 'Project Head',
      department: 'Skill',
      image: '/team/dinesh-prajapati.jpg'
    },
    {
      id: 3,
      name: 'Sunil Raval',
      qualification: 'BCA',
      designation: 'Center Head',
      department: 'Skill',
      image: '/team/sunil-raval.jpg'
    },
    {
      id: 4,
      name: 'Charmi Patel',
      qualification: 'B.E.C.E',
      designation: 'Web Developer',
      department: 'Web Development',
      image: '/team/charmi-patel.jpg'
    },
    {
      id: 5,
      name: 'Rajal Sindhav',
      qualification: 'B.SC',
      designation: 'Computer Trainer',
      department: 'Skill',
      image: '/team/rajal-sindhav.jpg'
    },
    {
      id: 6,
      name: 'Jigar Chauhan',
      qualification: 'DIPLOMA MECH',
      designation: 'Computer Trainer',
      department: 'Skill',
      image: '/team/jigar-chauhan.jpg'
    },
    {
      id: 7,
      name: 'Bharti Mulani',
      qualification: 'B.COM',
      designation: 'English Trainer',
      department: 'Skill',
      image: '/team/bharti-mulani.jpg'
    }
  ];

  useEffect(() => {
    // add simple IntersectionObserver to toggle 'in-view' class on card inner elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const inner = entry.target.querySelector('.team-card-inner');
          if (!inner) return;
          if (entry.isIntersecting) inner.classList.add('in-view');
          else inner.classList.remove('in-view');
        });
      },
      { threshold: 0.12 }
    );

    const cards = document.querySelectorAll('.team-card');
    cards.forEach((c) => observer.observe(c));

    return () => {
      cards.forEach((c) => observer.unobserve(c));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="our-team-page">
      <div className="team-header">
        <div className="container">
          <h1 className="team-title">Our Team</h1>
          <p className="team-subtitle">Our Leading Team!</p>
          <div className="title-underline"></div>
        </div>
      </div>

      <div className="team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card-inner">
                  <div className="member-image" aria-hidden="true">
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        e.currentTarget.src = '/team/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="member-info">
                    <div className="member-name">{member.name}</div>
                    <div className="member-qualification">{member.qualification}</div>

                    <div className="member-details">
                      <div className="detail-item">
                        <div className="detail-label">Designation</div>
                        <div className="detail-value">{member.designation}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Department</div>
                        <div className="detail-value">{member.department}</div>
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