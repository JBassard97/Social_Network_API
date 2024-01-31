const Thought = require("../../models/Thought");

async function updateThoughtByID(req, res) {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ error: "Thought not found with that ID" });
    }

    return res.status(200).json(updatedThought);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = updateThoughtByID;
