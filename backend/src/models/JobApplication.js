const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  name: String,
  city: String,
  email: String,
  mobile: String,
  qualification: String,
  skills: String,
  experience: String,
  currentSalary: String,         
  currentPost: String,          
  interestedJobPost: String,
  expectedSalary: String,
  interestedJobLocations: String,
  referenceFrom: String,
  cvUrl: String,
  remarks: String,
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);

