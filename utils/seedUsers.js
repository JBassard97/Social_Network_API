const connection = require("../config/connection");
const { User } = require("../models");
const userData = require("./data/userData");
const { fancyLog } = require("./imports");

console.time(fancyLog("Seed Speed"));

connection.once("open", async () => {
  try {
    await User.deleteMany({});

    const users = await User.insertMany(userData);
    console.log(users, "\nUsers Seeded Successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    connection.close();
    console.timeEnd(fancyLog("Seed Speed"));
  }
});
