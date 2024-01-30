const { Schema, model, Types } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
    ref: "users",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (createdAt) {
      // ! Getter method to format the timestamp on query
      return new Date(createdAt).toLocaleString(); // You can adjust the formatting as needed
    },
  },
});

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function () {
        // ! Getter method to format the timestamp on query
        return new Date().toLocaleString(); // You can adjust the formatting as needed
      },
    },
    username: {
      type: String,
      required: true,
      ref: "user", // Referencing 'User' model
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
