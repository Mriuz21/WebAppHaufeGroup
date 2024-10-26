const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  responsibilities: { type: String, required: true },
  participants: { type: [String], required: true },
});

module.exports = mongoose.model('Event', EventSchema);