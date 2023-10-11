const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    min: 6,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
