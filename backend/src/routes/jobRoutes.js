const express = require('express');
const router = express.Router();
const JobController = require('../controllers/jobController');
const JobApplication = require('../models/JobApplication'); // Create this model
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Files will be saved in /uploads
const jobController = new JobController();
const path = require('path');

router.get('/', jobController.getJobs.bind(jobController));
router.post('/', jobController.createJob.bind(jobController));
router.post('/apply', upload.single('cv'), async (req, res) => {
  try {
    const applicationData = JSON.parse(req.body.data);
    const application = new JobApplication({
      ...applicationData,
      cvUrl: req.file ? req.file.path : null,
    });
    await application.save();
    res.status(201).json({ message: 'Application submitted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/applications', async (req, res) => {
  try {
    const applications = await JobApplication.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.patch('/applications/:id/remarks', async (req, res) => {
  try {
    const { remarks } = req.body;
    await JobApplication.findByIdAndUpdate(req.params.id, { remarks });
    res.json({ message: 'Remarks updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'uploads', req.params.filename); // <-- fix here
  console.log('Download request for:', filePath);
  res.download(filePath, req.params.filename, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});
router.get('/view/:filename', (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'uploads', req.params.filename);
  console.log('View request for:', filePath);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});
router.get('/api/jobs/view/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../uploads', filename); // adjust path as needed
  res.sendFile(filePath, err => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

module.exports = () => router;