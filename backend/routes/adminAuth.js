const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const JWT_SECRET = process.env.JWT_SECRET || 'change-me';

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: 'missing username or password' });

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const payload = { username, role: 'admin', name: 'Fixed Admin' };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });
    return res.json({ ok: true, token, admin: payload });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;