require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const jobRoutes = require('./routes/jobRoutes');
const studentAuth = require('../routes/studentAuth');
const adminAuth = require('../routes/adminAuth');
const franchiseAuth = require('../routes/franchiseAuth');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI;

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Save with original name + timestamp to avoid conflicts
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext);
    cb(null, `${base}-${Date.now()}${ext}`);
  }
});
const upload = multer({ storage });

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/jobs/view', express.static(path.join(__dirname, 'uploads')));

// MongoDB Atlas connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/jobs', jobRoutes(upload.single('cv')));
app.use('/api/student', studentAuth);
app.use('/api/admin', adminAuth);
app.use('/api/franchise', franchiseAuth);

app.get('/api/jobs/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, '../uploads', req.params.filename);
  res.download(filePath, req.params.filename, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

// app.get('/menu', (req, res) => {
//   res.send(<MenuPage />);
// });

// app.get('/admin-dashboard', (req, res) => {
//   res.send(<AdminDashboard />);
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


