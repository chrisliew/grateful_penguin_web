const mongoose = require("mongoose");
const { Schema } = mongoose;

const GratitudesSchema = new Schema({
  gratitude: String,
  mood: Number,
  date: { type: Date, default: Date.now }
});

module.exports = Gratitudes = mongoose.model("gratitudes", GratitudesSchema);
