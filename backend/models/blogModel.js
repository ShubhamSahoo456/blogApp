const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blog: {
      type: String,
      required: true,
    },
    comments: [
      {
        comment: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
  },
  { timestamps: true }
);

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
