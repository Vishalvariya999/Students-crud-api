const mongoose = require("mongoose");

const studSchema = new mongoose.Schema({
  rno: {
    type: Number,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email_id: {
    type: String,
    required: true,
    trim: true,
  },
  phone_number: {
    type: Number,
    required: true,
    trim: true,
  },
  course: {
    type: String,
    required: true,
    trim: true,
  },
});

const StudentDetails = new mongoose.model("StudentDetails", studSchema);
module.exports = StudentDetails;
