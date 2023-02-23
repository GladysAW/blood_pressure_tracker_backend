const mongoose = require("mongoose");
const { Schema } = mongoose;

const EntrySchema = new Schema({
  date: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  systolic: {
    type: Number,
    required: true,
  },

  diastolic: {
    type: Number,
    required: true,
  },

  pulse: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Entry", EntrySchema);
