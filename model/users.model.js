const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  question: { type: String, required: true },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" }, // Reference to the Profile Model
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};
