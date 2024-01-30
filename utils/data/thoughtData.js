const thoughtData = [
  {
    thoughtText: "This is a sample thought.",
    username: "user1",
    reactions: [
      {
        reactionBody: "Interesting!",
        username: "user2",
      },
    ],
  },
  {
    thoughtText: "Another thought here.",
    username: "user2",
    reactions: [
      {
        reactionBody: "I agree!",
        username: "user1",
      },
      {
        reactionBody: "Nice thought!",
        username: "user3",
      },
    ],
  },
  // Add more thoughts as needed
];

module.exports = thoughtData;
