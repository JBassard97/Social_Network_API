const { Schema, model, Types } = require("mongoose");
const { getCurrentDateTime } = require("../utils/imports");
const { format } = require("date-fns");

const reactionSchema = new Schema(
  {
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
      default: getCurrentDateTime,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

reactionSchema.virtual("formattedCreatedAt").get(function () {
  return format(this.createdAt, "yyyy-MM-dd hh:mm:ss a");
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
      default: getCurrentDateTime,
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

thoughtSchema.virtual("formattedCreatedAt").get(function () {
  return format(this.createdAt, "yyyy-MM-dd hh:mm:ss a");
});

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
