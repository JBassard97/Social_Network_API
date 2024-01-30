const User = require("../models/User");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getOneUserByID(req, res) {
    try {
      //  .select("-__v") excludes the version field we don't need
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createNewUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateUserByID(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { new: true, runValidators: true }
      );
      if (!updatedUser) {
        throw new Error("User not found with that ID");
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteUserByID(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //   TODO: BONUS CONTROLLERS
  //    ! Post request
  async addFriendToUser(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //   ! Delete request
  async removeFriendFromUser(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
