const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // e.g. mobile or email
  name: String,
  password: { type: String, required: true },
  role: { type: String, enum: ['superadmin','admin','viewer'], default: 'admin' },
}, { timestamps: true });

// hash password before save
AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

AdminSchema.methods.comparePassword = function(candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('Admin', AdminSchema);