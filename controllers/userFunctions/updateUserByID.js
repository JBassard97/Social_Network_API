const User = require("../../models/User");

async function updateUserByID(req, res) {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found with that ID" });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = updateUserByID;