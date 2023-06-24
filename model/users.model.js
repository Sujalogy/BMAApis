const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  question: { type: String, required: true },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  image: { type: String },
  fullName: { type: String },
  dob: { type: String },
  gender: { type: String },
  city: { type: String },
  registerDate: { type: String },
  aboutMe: { type: String }
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};
