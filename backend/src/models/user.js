const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  mobile: String,
  role: { type: String, enum: ['admin', 'company', 'recruiter', 'candidate'], required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);