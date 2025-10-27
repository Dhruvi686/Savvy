const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Mock student data - replace with actual database
const students = [
  {
    id: 1,
    username: 'student1',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'John Doe',
    email: 'john@example.com',
    mobile: '9876543210',
    course: 'Web Development'
  },
  {
    id: 2,
    username: 'student2', 
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'Jane Smith',
    email: 'jane@example.com',
    mobile: '9876543211',
    course: 'Data Science'
  }
];

const JWT_SECRET = process.env.JWT_SECRET || 'change-me';

// POST /api/student/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Input validation
    if (!username || !password) {
      return res.status(400).json({ 
        error: 'Username and password are required' 
      });
    }

    // Find student by username or mobile
    const student = students.find(s => 
      s.username === username || s.mobile === username
    );

    if (!student) {
      return res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, student.password);
    
    if (!isValidPassword) {
      return res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }

    // Create JWT token
    const payload = {
      id: student.id,
      username: student.username,
      name: student.name,
      role: 'student'
    };

    const token = jwt.sign(payload, JWT_SECRET, { 
      expiresIn: '24h' 
    });

    // Return success response
    res.json({
      success: true,
      token,
      student: {
        id: student.id,
        name: student.name,
        email: student.email,
        mobile: student.mobile,
        course: student.course
      }
    });

  } catch (error) {
    console.error('Student login error:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

// POST /api/student/register
router.post('/register', async (req, res) => {
  try {
    const { username, password, name, email, mobile, course } = req.body;
    
    // Input validation
    if (!username || !password || !name || !email || !mobile) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    // Check if student already exists
    const existingStudent = students.find(s => 
      s.username === username || s.email === email || s.mobile === mobile
    );

    if (existingStudent) {
      return res.status(409).json({ 
        error: 'Student already exists with this username, email, or mobile' 
      });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new student
    const newStudent = {
      id: students.length + 1,
      username,
      password: hashedPassword,
      name,
      email,
      mobile,
      course: course || 'General'
    };

    students.push(newStudent);

    // Create JWT token
    const payload = {
      id: newStudent.id,
      username: newStudent.username,
      name: newStudent.name,
      role: 'student'
    };

    const token = jwt.sign(payload, JWT_SECRET, { 
      expiresIn: '24h' 
    });

    // Return success response
    res.status(201).json({
      success: true,
      token,
      student: {
        id: newStudent.id,
        name: newStudent.name,
        email: newStudent.email,
        mobile: newStudent.mobile,
        course: newStudent.course
      }
    });

  } catch (error) {
    console.error('Student registration error:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

// GET /api/student/profile
router.get('/profile', (req, res) => {
  // This would typically use JWT middleware for authentication
  res.json({ message: 'Student profile endpoint' });
});

module.exports = router;
