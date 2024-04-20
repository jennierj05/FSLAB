const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  breed: String,
  age: Number,
  weight: Number,
  owner: String,
  medicalHistory: String,
  vaccinations: [String],
  lastVetVisit: Date
});

// Create model based on schema
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
