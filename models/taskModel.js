const mongoose = require('mongoose');

// Task Schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
