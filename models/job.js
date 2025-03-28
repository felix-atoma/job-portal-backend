const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: String,
  location: String,
  type: String,
  deadline: String,
  description: String,
  responsibilities: [String],
  qualifications: [String],
  benefits: [String],
});

module.exports = mongoose.model("Job", JobSchema);
