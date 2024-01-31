const User = require("../../models/User");

async function getAllUsers(req, res) {
  try {
    const users = await User.find()
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .populate({
        path: "friends",
        select: "-__v",
      })
      .select("-__v");
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = getAllUsers;
