import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './courses.css';

const COURSES = [
  { id: 'course-1', title: 'Distributor Salesman', duration: '3 Months', desc: '...' },
  { id: 'course-2', title: 'Courier Delivery Executive', duration: '3 Months', desc: '...' },
  // add rest or load from API
];

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const course = COURSES.find(c => c.id === courseId);

  if (!course) {
    return (
      <div>
        <Navbar />
        <main style={{ padding: 40 }}>
          <h2>Course not found</h2>
          <p>Requested course: {courseId}</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="courses-page">
      <Navbar />
      <main className="container" style={{ padding: 40 }}>
        <h1>{course.title}</h1>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p>{course.desc}</p>
      </main>
      <Footer />
    </div>
  );
}