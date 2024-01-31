const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("remove", async function (next) {
  try {
    // Remove all thoughts where the user is the author
    await Thought.deleteMany({ username: this.username });

    // Remove the user from the friends list of other users
    await User.updateMany(
      { friends: this._id },
      { $pull: { friends: this._id } }
    );

    next();
  } catch (error) {
    next(error);
  }
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

userSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.length;
});

const User = model("user", userSchema);

module.exports = User;
