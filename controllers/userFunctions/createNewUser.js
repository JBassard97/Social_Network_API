const User = require("../../models/User");

async function createNewUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.status(200).json(dbUserData);
    } catch (error) {
      return res.status(500).json(error);
    }
}
  
module.exports = createNewUser;