const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the User Model
  image: { type: String },
  fullName: { type: String },
  dob: { type: String },
  gender: { type: String },
  city: { type: String },
  registerDate: { type: String },
  aboutMe: { type: String },
});

const ProfileModel = mongoose.model("Profile", profileSchema);

module.exports = {
  ProfileModel,
};
