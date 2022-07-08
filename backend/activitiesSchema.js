const mongoose = require('mongoose');

ActivitySchema = new mongoose.Schema({
  distance: {
    type: Number,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  finish: {
    type: Date,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  avgSpeed: {
    type: Number,
    required: true,
  },
  kcalBurned: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model('Acitivity', ActivitySchema);
