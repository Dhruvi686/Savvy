import React, { useState } from 'react';
import './UserHome.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OurTeam from '../components/OurTeam';
// import HomepageSlider from '../components/HpageSlider';

const UserHome = () => {
  const courses = [
    {
      id: 1,
      category: 'Computer Education',
      title: 'Advanced Diploma in Computer Applications',
      description: 'Master essential software tools, office automation, and productivity suites to boost administrative efficiency.',
      link: '/courses/adca'
    },
    {
      id: 2,
      category: 'Technical Skills',
      title: 'Electronics & Hardware Maintenance',
      description: 'Hands-on training for repairing, maintaining, and calibrating consumer electronics and industrial components.',
      link: '/courses/electronics-maintenance'
    },
    {
      id: 3,
      category: 'Vocational Training',
      title: 'Beauty & Wellness Professional',
      description: 'Industry-aligned program covering cosmetology, salon management, and client service best practices.',
      link: '/courses/beauty-wellness'
    },
    {
      id: 4,
      category: 'IT Services',
      title: 'Full-Stack Web Development',
      description: 'Build modern web applications using HTML, CSS, JavaScript, and backend frameworks for real-world solutions.',
      link: '/courses/fullstack'
    }
  ];

  const [currentCourse, setCurrentCourse] = useState(0);

  const handleNextCourse = () => {
    setCurrentCourse((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const handlePrevCourse = () => {
    setCurrentCourse((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div>
            <a href="tel:+919925533867" style={{ color: '#fff', textDecoration: 'none', marginRight: 30 }}>
              <span style={{ color: '#fff' }}>📞</span> +91-99255-33867
            </a>
            <a href="mailto:savvyniest@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
              ✉️ savvyniest@gmail.com
            </a>
          </div>
          <div>
            <button>Learn Online</button>
            <button>Online Exam</button>
            <button>Verify Certificate</button>
            <button>Become Franchise</button>
          </div>
        </div>
      </div>

      <Navbar />

      {/* Modern Animated Homepage Slider */}
      {/* <HomepageSlider /> */}

      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-content">
          <h1 className="banner-title">DIGITAL KRANTI ABHIYAN</h1>
          {/* <div className="banner-desc">
            Savvy National Institute For Education And Skill Training Managed BY NIGT.
          </div> */}
          <div className="banner-logos">
            <img src="slide1.jpg" alt="MSDE" />
            <img src="slide2.jpg" alt="PMKVY" />
            <img src="slide3.jpg" alt="Skill India" />
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <section className="overview-section">
        <div className="overview-wrapper">
          <h2 className="section-title">Building Employability Across India</h2>
          <p className="section-subtitle">
            We empower learners, job seekers, and partners with outcome-driven training, real industry projects, and dedicated placement support.
          </p>
          <div className="overview-grid">
            <div className="overview-card">
              <span className="card-badge">01</span>
              <h3>Our Projects</h3>
              <p>
                We engaged with the government to help build a workforce in the country by providing necessary skill sets.
              </p>
              <a className="card-link" href="/projects">Explore Projects →</a>
            </div>
            <div className="overview-card">
              <span className="card-badge">02</span>
              <h3>Our Courses</h3>
              <p>
                We have a wide range of courses available for employment oriented vocational skills training.
              </p>
              <a className="card-link" href="/courses">View Courses →</a>
            </div>
            <div className="overview-card">
              <span className="card-badge">03</span>
              <h3>Jobs & Placement</h3>
              <p>
                Job recruitment placement consultancy with a vision to provide jobs in the nearby proximity to all the job seekers.
              </p>
              <a className="card-link" href="/jobs">Discover Opportunities →</a>
            </div>
            <div className="overview-card">
              <span className="card-badge">04</span>
              <h3>Become Partner</h3>
              <p>
                Be a part in Digital Kranti Abhiyan of Indian Govt. for training and fulfilling employment in every district in India.
              </p>
              <a className="card-link" href="/partners">Partner With Us →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="content-wrapper">
          <span className="section-badge accent">Welcome To Savvy</span>
          <h2 className="welcome-title">Empowering Skills, Careers &amp; Growth</h2>
          <p className="welcome-text">
            Savvy NIEST's vision is to Make Life Easy of Customers by Innovative and Smart Solutions &amp; Services. Also we empower employees of our organization to achieve more in their life.
          </p>
          <p className="welcome-text">
            Savvy NIEST’s meaning is improving people’s lives through meaningful services. These technologies connect people and things. We offer technical trainings &amp; placement training services, computer training &amp; certification, IT services like web, Android and iOS development, tours &amp; travels, visa services, and all-in-one government services. We connect people to opportunities to improve their lives through access to education, information and public services, market opportunities and more.
          </p>
        </div>
      </section>

      {/* Courses Slider */}
      <section className="courses-section">
        <div className="content-wrapper">
          <span className="section-badge">Our Courses</span>
          <h2 className="section-title">There are various kinds of courses available</h2>
          <p className="section-subtitle narrow">
            From computer courses to technical and vocational programs, Savvy NIEST designs each curriculum to support employment-oriented skills training.
          </p>
          <div className="courses-carousel">
            <button className="course-nav prev" onClick={handlePrevCourse} aria-label="Previous course">
              ‹
            </button>
            <div className="course-card">
              <span className="course-category">{courses[currentCourse].category}</span>
              <h3>{courses[currentCourse].title}</h3>
              <p>{courses[currentCourse].description}</p>
              <a className="card-link" href={courses[currentCourse].link}>
                Explore Course →
              </a>
            </div>
            <button className="course-nav next" onClick={handleNextCourse} aria-label="Next course">
              ›
            </button>
          </div>
          <div className="course-dots">
            {courses.map((course, index) => (
              <button
                key={course.id}
                className={`course-dot ${index === currentCourse ? 'active' : ''}`}
                onClick={() => setCurrentCourse(index)}
                aria-label={`View course ${course.title}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="ongoing-section">
        <div className="content-wrapper">
          <span className="section-badge">Ongoing Project</span>
          <h2 className="section-title">Transforming Communities Through Skill Development</h2>
          <p className="section-subtitle narrow">
            Our teams are actively implementing Digital Kranti Abhiyan initiatives that connect learners, industries, and government partners to create sustainable employment pipelines across India.
          </p>
          <div className="projects-highlights">
            <article className="project-card">
              <h3>District Training Hubs</h3>
              <p>
                Setting up smart classrooms, labs, and job-readiness workshops that deliver practical training tailored to local industry demand.
              </p>
              <span className="project-status">In Progress</span>
            </article>
            <article className="project-card">
              <h3>Women Empowerment Drives</h3>
              <p>
                Providing digital literacy and entrepreneurship programs that enable women to launch businesses and secure meaningful employment.
              </p>
              <span className="project-status">Ongoing</span>
            </article>
            <article className="project-card">
              <h3>Skill Certification Camps</h3>
              <p>
                Hosting mobile assessment centers for NSDC-aligned certifications that help candidates showcase verified expertise to employers.
              </p>
              <span className="project-status">Active</span>
            </article>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="cta-section">
        <div className="content-wrapper">
          <span className="section-badge accent">Get Involved</span>
          <h2 className="section-title">Become Part of Our Growth Story</h2>
          <div className="cta-grid">
            <div className="cta-card">
              <h3>Become a Partner</h3>
              <p>Become part of an outstanding team! Collaborate with us to expand training and placement services across districts.</p>
              <a className="cta-link" href="/partners">Click Here...</a>
            </div>
            <div className="cta-card">
              <h3>Submit Your CV</h3>
              <p>Register and upload your CV for job opportunities curated by our placement experts and partner companies.</p>
              <a className="cta-link" href="/jobs/register">Click Here...</a>
            </div>
            <div className="cta-card">
              <h3>Register Now</h3>
              <p>Enroll for different courses, gain industry-ready skills, and secure your pathway to employment.</p>
              <a className="cta-link" href="/courses/register">Click Here...</a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="content-wrapper">
          <span className="section-badge accent">Our Team</span>
          <h2 className="section-title">Our Leading Team</h2>
          <div className="team-grid">
            <article className="team-card">
              <h3>Sumit Patel</h3>
              <p className="team-qualification">B.E. E.C.</p>
              <p><strong>Designation:</strong> Founder</p>
              <p><strong>Department:</strong> Savvy Founder</p>
            </article>
            <article className="team-card">
              <h3>Dinesh Prajapati</h3>
              <p className="team-qualification">B.E. Mech</p>
              <p><strong>Designation:</strong> Project Head</p>
              <p><strong>Department:</strong> Skill</p>
            </article>
            <article className="team-card">
              <h3>Sunil Raval</h3>
              <p className="team-qualification">BCA</p>
              <p><strong>Designation:</strong> Center Head</p>
              <p><strong>Department:</strong> Skill</p>
            </article>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <OurTeam />

      <Footer />
    </div>
  );
};

export default UserHome;
