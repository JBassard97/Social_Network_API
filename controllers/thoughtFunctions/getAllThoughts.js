const Thought = require("../../models/Thought");

async function getAllThoughts(req, res) {
  try {
    const thoughts = await Thought.find().select("-__v");

    return res.status(200).json(thoughts);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = getAllThoughts;
