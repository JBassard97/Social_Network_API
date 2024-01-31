const User = require("../../models/User");

async function deleteUserByID(req, res) {
  try {
    const userId = req.params.userId;
    const deletedUser = await User.findOneAndDelete({ _id: userId });

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found with that ID" });
    }

    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = deleteUserByID;
