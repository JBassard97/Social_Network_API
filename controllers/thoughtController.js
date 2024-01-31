const getAllThoughts = require("./thoughtFunctions/getAllThoughts");
const getOneThoughtByID = require("./thoughtFunctions/getOneThoughtByID");
const createNewThought = require("./thoughtFunctions/createNewThought");
const updateThoughtByID = require("./thoughtFunctions/updateThoughtByID");
const deleteThoughtByID = require("./thoughtFunctions/deleteThoughtByID");
const addReactionToThought = require("./thoughtFunctions/addReactionToThought");
const removeReactionFromThought = require("./thoughtFunctions/removeReactionFromThought");

module.exports = {
  getAllThoughts,
  getOneThoughtByID,
  createNewThought,
  updateThoughtByID,
  deleteThoughtByID,
  //   TODO: BONUS CONTROLLERS
  //   ! Post request
  addReactionToThought,
  //   ! Delete request, try to return the deleted reaction
  removeReactionFromThought,
};
