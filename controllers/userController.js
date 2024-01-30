const User = require("../models/User");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find().select("-__v");
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async getOneUserByID(req, res) {
    try {
      //  .select("-__v") excludes the version field we don't need
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ error: "User not found with that ID" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async createNewUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.status(200).json(dbUserData);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async updateUserByID(req, res) {
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
  },
  async deleteUserByID(req, res) {
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
  },
  //   TODO: BONUS CONTROLLERS
  //   "/api/users/:userId/friends/:friendId"
  //    ! Post request
  async addFriendToUser(req, res) {
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
  },
  //   ! Delete request
  async removeFriendFromUser(req, res) {
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
  },
};
