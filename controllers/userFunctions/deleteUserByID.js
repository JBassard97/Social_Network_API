const User = require("../../models/User");
const Thought = require("../../models/Thought");

async function deleteUserByID(req, res) {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found with that ID" });
    }

    // !!! This line is where you delete all thoughts associated with the user being deleted !!!
    await Thought.deleteMany({ username: user.username });

    const deletedUser = await User.findOneAndDelete({ _id: userId });

    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = deleteUserByID;
