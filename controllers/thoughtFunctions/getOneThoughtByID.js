const Thought = require("../../models/Thought");

async function getOneThoughtByID(req, res) {
  try {
    const thought = await Thought.findOne({
      _id: req.params.thoughtId,
    }).select("-__v");

    if (!thought) {
      return res.status(404).json({ error: "Thought not found with that ID" });
    }

    return res.status(200).json(thought);
  } catch (error) {
    res.status(500).json(error);
  }
}
module.exports = getOneThoughtByID;
