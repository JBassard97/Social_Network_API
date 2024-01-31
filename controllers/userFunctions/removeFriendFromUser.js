const User = require("../../models/User");

async function removeFriendFromUser(req, res) {
  try {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found with that ID" });
    }

    // Check if the friendId is in the user's friends list
    const friendIndex = user.friends.indexOf(friendId);

    if (friendIndex === -1) {
      return res
        .status(400)
        .json({ error: "Friend not found in the user's friends list" });
    }

    // Remove friendId from the user's friends array
    user.friends.splice(friendIndex, 1);

    // Save the updated user document
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = removeFriendFromUser;
