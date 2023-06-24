const { UserModel } = require('../../model/users.model');

const updateUser = async (req, res) => {
  const userId = req.params.id; 
  const updateFields = {
    image: req.body.image,
    fullName: req.body.fullName,
    dob: req.body.dob,
    gender: req.body.gender,
    city: req.body.city,
    registerDate: req.body.registerDate,
    aboutMe: req.body.aboutMe
  };

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateFields, { new: true });
    
    if (updatedUser) {
      res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  updateUser
};
