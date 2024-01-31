const Thought = require("../../models/Thought");

async function deleteThoughtByID(req, res) {
  try {
    const thoughtId = req.params.thoughtId;
    const deletedThought = await Thought.findOneAndDelete({ _id: thoughtId });

    if (!deletedThought) {
      return res.status(404).json({ error: "Thought not found with that ID" });
    }

    return res.status(200).json(deletedThought);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = deleteThoughtByID;
