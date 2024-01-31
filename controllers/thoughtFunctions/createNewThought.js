const Thought = require("../../models/Thought");
const User = require("../../models/User");

async function createNewThought(req, res) {
  try {
    const newThought = await Thought.create(req.body);

    const user = await User.findOneAndUpdate(
      { username: req.body.username },
      { $push: { thoughts: newThought._id } },
      { new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found with that username" });
    }

    return res.status(200).json(newThought);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = createNewThought;
