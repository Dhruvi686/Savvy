const multer = require('multer');
const path = require('path');
const JobApplication = require('../models/JobApplication');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});
const upload = multer({ storage: storage });

router.post('/apply', upload.single('cv'), async (req, res) => {
  const data = JSON.parse(req.body.data);
  const cvUrl = req.file ? `uploads/${req.file.filename}` : '';
  const application = new JobApplication({ ...data, cvUrl });
  await application.save();
  res.status(201).json({ message: 'Application submitted' });
});