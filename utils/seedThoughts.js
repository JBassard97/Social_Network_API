const connection = require("../config/connection");
const { Thought } = require("../models");
const thoughtData = require("./data/thoughtData");

console.time("Seed Speed");

connection.once("open", async () => {
  try {
    await Thought.deleteMany({});

    const thoughts = await Thought.insertMany(thoughtData);
    console.log(thoughts, "\nThoughts Seeded Successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    connection.close();
    console.timeEnd("Seed Speed");
  }
})
