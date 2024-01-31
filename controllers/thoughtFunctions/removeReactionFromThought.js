const Thought = require("../../models/Thought");

async function removeReactionFromThought(req, res) {
  try {
    const thoughtId = req.params.thoughtId;
    const reactionId = req.params.reactionId;

    // Find the thought by ID
    const thought = await Thought.findById(thoughtId);

    if (!thought) {
      return res.status(404).json({ error: "Thought not found with that ID" });
    }

    // Check if the reactionId is in the thought's reactions array
    const reactionIndex = thought.reactions.findIndex(
      (reaction) => reaction._id.toString() === reactionId
    );

    if (reactionIndex === -1) {
      return res.status(400).json({
        error: "Reaction not found in the thought's reactions list",
      });
    }

    // Remove reactionId from the thought's reactions array
    thought.reactions.splice(reactionIndex, 1);

    // Save the updated thought document
    const updatedThought = await thought.save();

    res.status(200).json(updatedThought);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = removeReactionFromThought;
