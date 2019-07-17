const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // googleId: String,
  facebookId: String,
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  photo: String,
  gratitudes: [
    {
      gratitude: String,
      mood: Number,
      date: { type: Date, default: Date.now }
    }
  ]
});

module.exports = User = mongoose.model("users", userSchema);
