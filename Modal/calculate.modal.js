const mongoose = require("mongoose");

const CalculateSchem = mongoose.Schema({
  AIA: Number,
  IR: Number,
  TotalYr: Number,
});

const CalculateModel = mongoose.model("user", CalculateSchem);

module.exports = { CalculateModel };
