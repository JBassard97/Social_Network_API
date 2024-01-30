const router = require("express").Router();
const {
  getAllThoughts,
  getOneThoughtByID,
  createNewThought,
  updateThoughtByID,
  deleteThoughtByID,
  addReactionToThought,
  removeReactionFromThought,
} = require("../../controllers/thoughtController");

// "/api/thoughts"
router.route("/").get(getAllThoughts).post(createNewThought);

// "/api/thoughts/:thoughtId"
router.route("/:thoughtId").get(getOneThoughtByID).put(updateThoughtByID).delete(deleteThoughtByID);

// TODO: BONUS ROUTES
// "/api/thoughts/:thoughtId/:userId/reactions"
router.route("/:thoughtId/reactions").post(addReactionToThought);

// "/api/thoughts/:thoughtId/reactions/:reactionId"
router.route("/:thoughtId/reactions/:reactionId").delete(removeReactionFromThought);

module.exports = router;
