const mongoose = require("mongoose");

const post = new mongoose.Schema(
  {
    postContent: {
      type: String,
      required: true,
    },
    postMedia: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: mongoose.Types.ObjectId,
      ref: "Likes",
      defautl: 0,
    },
    comment: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", post);
