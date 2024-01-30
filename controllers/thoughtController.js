const Thought = require("../models/Thought");
const User = require("../models/User");

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find().select("-__v");

      return res.status(200).json(thoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getOneThoughtByID(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");

      if (!thought) {
        return res
          .status(404)
          .json({ error: "Thought not found with that ID" });
      }

      return res.status(200).json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createNewThought(req, res) {
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
  },
  async updateThoughtByID(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true, runValidators: true }
      );

      if (!updatedThought) {
        return res
          .status(404)
          .json({ error: "Thought not found with that ID" });
      }

      return res.status(200).json(updatedThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteThoughtByID(req, res) {
    try {
      const thoughtId = req.params.thoughtId;
      const deletedThought = await Thought.findOneAndDelete({ _id: thoughtId });

      if (!deletedThought) {
        return res
          .status(404)
          .json({ error: "Thought not found with that ID" });
      }

      return res.status(200).json(deletedThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //   TODO: BONUS CONTROLLERS
  //   ! Post request
  async addReactionToThought(req, res) {
    try {
      const thoughtId = req.params.thoughtId;
      const thought = await Thought.findById(thoughtId);

      if (!thought) {
        return res
          .status(404)
          .json({ error: "Thought not found with that ID" });
      }

      thought.reactions.push(req.body);
      const updatedThought = await thought.save();

      return res.status(201).json(updatedThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //   ! Delete request, try to return the deleted reaction
  async removeReactionFromThought(req, res) {
    try {
      const thoughtId = req.params.thoughtId;
      const reactionId = req.params.reactionId;

      // Find the thought by ID
      const thought = await Thought.findById(thoughtId);

      if (!thought) {
        return res
          .status(404)
          .json({ error: "Thought not found with that ID" });
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
  },
};
