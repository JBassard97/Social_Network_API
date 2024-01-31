const User = require("../../models/User");

async function getOneUserByID(req, res) {
    try {
      //  .select("-__v") excludes the version field we don't need
      const user = await User.findOne({ _id: req.params.userId })
        .populate({
          path: "thoughts", 
          select: "-__v",
        })
        .populate({
          path: "friends", // Populate the 'friends' field
          select: "-__v", // Exclude the '__v' field from populated friends
        })
        .select("-__v");

      if (!user) {
        return res.status(404).json({ error: "User not found with that ID" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
}
  
module.exports = getOneUserByID;