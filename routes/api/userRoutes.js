const router = require("express").Router();
const {
  getAllUsers,
  getOneUserByID,
  createNewUser,
  updateUserByID,
  deleteUserByID,
  addFriendToUser,
  removeFriendFromUser,
} = require("../../controllers/userController");

// "/api/users"
router.route("/").get(getAllUsers).post(createNewUser);

// "/api/users/userId"
router
  .route("/:userId")
  .get(getOneUserByID)
  .put(updateUserByID)
  .delete(deleteUserByID);

//   TODO: BONUS ROUTES
//   "/api/users/:userId/friends/:friendId"
router
  .route("/:userId/friends/:friendId")
  .post(addFriendToUser)
  .delete(removeFriendFromUser);

module.exports = router;
