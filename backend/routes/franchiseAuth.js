const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Mock franchise data - replace with actual database
const franchises = [
  {
    id: 1,
    username: 'franchise1',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'ABC Franchise Center',
    email: 'abc@franchise.com',
    mobile: '9876543210',
    location: 'Mumbai',
    status: 'active',
    commission: 15
  },
  {
    id: 2,
    username: 'franchise2', 
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'XYZ Learning Hub',
    email: 'xyz@franchise.com',
    mobile: '9876543211',
    location: 'Delhi',
    status: 'active',
    commission: 12
  }
];

const JWT_SECRET = process.env.JWT_SECRET || 'change-me';

// POST /api/franchise/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Input validation
    if (!username || !password) {
      return res.status(400).json({ 
        error: 'Username and password are required' 
      });
    }

    // Find franchise by username or mobile
    const franchise = franchises.find(f => 
      f.username === username || f.mobile === username
    );

    if (!franchise) {
      return res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }

    // Check if franchise is active
    if (franchise.status !== 'active') {
      return res.status(401).json({ 
        error: 'Franchise account is not active' 
      });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, franchise.password);
    
    if (!isValidPassword) {
      return res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }

    // Create JWT token
    const payload = {
      id: franchise.id,
      username: franchise.username,
      name: franchise.name,
      role: 'franchise'
    };

    const token = jwt.sign(payload, JWT_SECRET, { 
      expiresIn: '24h' 
    });

    // Return success response
    res.json({
      success: true,
      token,
      franchise: {
        id: franchise.id,
        name: franchise.name,
        email: franchise.email,
        mobile: franchise.mobile,
        location: franchise.location,
        status: franchise.status,
        commission: franchise.commission
      }
    });

  } catch (error) {
    console.error('Franchise login error:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

// POST /api/franchise/register
router.post('/register', async (req, res) => {
  try {
    const { username, password, name, email, mobile, location } = req.body;
    
    // Input validation
    if (!username || !password || !name || !email || !mobile || !location) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    // Check if franchise already exists
    const existingFranchise = franchises.find(f => 
      f.username === username || f.email === email || f.mobile === mobile
    );

    if (existingFranchise) {
      return res.status(409).json({ 
        error: 'Franchise already exists with this username, email, or mobile' 
      });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new franchise
    const newFranchise = {
      id: franchises.length + 1,
      username,
      password: hashedPassword,
      name,
      email,
      mobile,
      location,
      status: 'pending', // Admin approval required
      commission: 10 // Default commission
    };

    franchises.push(newFranchise);

    // Create JWT token
    const payload = {
      id: newFranchise.id,
      username: newFranchise.username,
      name: newFranchise.name,
      role: 'franchise'
    };

    const token = jwt.sign(payload, JWT_SECRET, { 
      expiresIn: '24h' 
    });

    // Return success response
    res.status(201).json({
      success: true,
      token,
      franchise: {
        id: newFranchise.id,
        name: newFranchise.name,
        email: newFranchise.email,
        mobile: newFranchise.mobile,
        location: newFranchise.location,
        status: newFranchise.status,
        commission: newFranchise.commission
      }
    });

  } catch (error) {
    console.error('Franchise registration error:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

// GET /api/franchise/profile
router.get('/profile', (req, res) => {
  // This would typically use JWT middleware for authentication
  res.json({ message: 'Franchise profile endpoint' });
});

// GET /api/franchise/dashboard
router.get('/dashboard', (req, res) => {
  // This would typically use JWT middleware for authentication
  res.json({ message: 'Franchise dashboard endpoint' });
});

module.exports = router;
