import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    recipe_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipes",
      },
    ],
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
