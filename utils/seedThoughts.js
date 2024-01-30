const connection = require("../config/connection");
const { Thought } = require("../models");
const thoughtData = require("./data/thoughtData");
const fancyLog = require("./imports");

console.time(fancyLog("Seed Speed"));

connection.once("open", async () => {
  try {
    await Thought.deleteMany({});

    const thoughts = await Thought.insertMany(thoughtData);
    console.log(thoughts, "\nThoughts Seeded Successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    connection.close();
    console.timeEnd(fancyLog("Seed Speed"));
  }
});
