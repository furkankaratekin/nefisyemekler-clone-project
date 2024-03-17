import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    },
    favorites_recipes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipes",
      },
    ],
    favorites_menus: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menus",
      },
    ],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
