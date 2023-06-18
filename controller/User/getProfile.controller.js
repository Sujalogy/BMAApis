const { ProfileModel } = require("../../model/profile.model");
const getProfileUser = async (req, res) => {
  try {
    const profile = await ProfileModel.find();
      res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    getProfileUser
}