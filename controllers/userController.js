const getAllUsers = require("./userFunctions/getAllUsers");
const getOneUserByID = require("./userFunctions/getOneUserByID");
const createNewUser = require("./userFunctions/createNewUser");
const updateUserByID = require("./userFunctions/updateUserByID");
const deleteUserByID = require("./userFunctions/deleteUserByID");
const addFriendToUser = require("./userFunctions/addFriendToUser");
const removeFriendFromUser = require("./userFunctions/removeFriendFromUser");

module.exports = {
  getAllUsers,
  getOneUserByID,
  createNewUser,
  updateUserByID,
  deleteUserByID,
  //   TODO: BONUS CONTROLLERS
  //    ! Post request
  addFriendToUser,
  //   ! Delete request
  removeFriendFromUser,
};
