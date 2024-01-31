const User = require("../../models/User");

async function addFriendToUser(req, res) {
  try {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found with that ID" });
    }

    // Check if the friendId is already in the user's friends list
    if (user.friends.includes({ _id: friendId })) {
      return res.status(400).json({ error: "Friend already added" });
    }

    // Add friendId to the user's friends array
    user.friends.push(friendId);

    // Save the updated user document
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = addFriendToUser;
