const Thought = require("../models/Thought");

module.exports = {
  async getAllThoughts(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getOneThoughtByID(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createNewThought(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateThoughtByID(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteThoughtByID(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
    //   TODO: BONUS CONTROLLERS
//   ! Post request
  async addReactionToThought(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //   ! Delete request, try to return the deleted reaction
  async removeReactionFromThought(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
