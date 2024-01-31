const Thought = require("../../models/Thought");

async function addReactionToThought(req, res) {
  try {
    const thoughtId = req.params.thoughtId;
    const thought = await Thought.findById(thoughtId);

    if (!thought) {
      return res.status(404).json({ error: "Thought not found with that ID" });
    }

    thought.reactions.push(req.body);
    const updatedThought = await thought.save();

    return res.status(201).json(updatedThought);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = addReactionToThought;
