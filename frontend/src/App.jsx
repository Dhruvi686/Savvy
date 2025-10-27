import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplyJob from './pages/ApplyJob';
import CandidateList from './pages/CandidateList';
import UserHome from './pages/UserHome';
import AdminLogin from './pages/AdminLogin';
import StudentLogin from './pages/StudentLogin';
import FranchiseLogin from './pages/FranchiseLogin';
import PortalLogin from './pages/PortalLogin';
import ProtectedRoute from './components/ProtectedRoute';
import MenuPage from './pages/MenuPage';
import AdminDashboard from './pages/AdminDashboard';
import MissionPage from './pages/MissionPage';
import CompanyDetailsPage from './pages/CompanyDetailsPage';
import AboutTeamPage from './pages/AboutTeamPage';
import OngoingProjectsPage from './pages/OngoingProjectsPage';
import CompletedProjectsPage from './pages/CompletedProjectsPage';
import FreeCoursesPage from './pages/FreeCoursesPage';
import PaidCoursesPage from './pages/PaidCoursesPage';
import CourseDetailPage from './pages/CourseDetailPage'; // new
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        {/* User Side */}
        <Route path="/" element={<UserHome />} />
        <Route path="/apply-job" element={<ApplyJob />} />

        {/* Portal Login */}
        <Route path="/portal-login" element={<PortalLogin />} />
        
        {/* Individual Login Pages */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/franchise-login" element={<FranchiseLogin />} />
        <Route
          path="/admin"
          element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}
        />
        <Route
          path="/admin/candidate-list"
          element={<ProtectedRoute><CandidateList /></ProtectedRoute>}
        />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about/mission" element={<MissionPage />} />
        <Route path="/about/company" element={<CompanyDetailsPage />} />
        <Route path="/about/team" element={<AboutTeamPage />} />
        <Route path="/projects/ongoing" element={<OngoingProjectsPage />} />
        <Route path="/projects/completed" element={<CompletedProjectsPage />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/courses/free" element={<FreeCoursesPage />} />
        <Route path="/courses/paid" element={<PaidCoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />  {/* dynamic route */}

      </Routes>
    </Router>
  );
}

export default App;