const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve uploads if present
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// mount admin routes
try {
  const adminAuth = require('./routes/adminAuth');
  app.use('/api/admin', adminAuth);
  console.log('Mounted /api/admin routes');
} catch (err) {
  console.error('Failed to mount /api/admin:', err.message);
}

// health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend listening on http://localhost:${port}`));