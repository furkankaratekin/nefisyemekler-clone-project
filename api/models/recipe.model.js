import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true, // Ekleme: name alanı zorunlu olmalıdır
    },
    picture: {
      type: String,
      unique: true,
      required: true, // Ekleme: picture alanı zorunlu olmalıdır
    },
    category: {
      type: String,
    },
    ingredients: [
      {
        type: String, // Düzelme: ingredients bir dizi string olmalıdır, Array değil
      },
    ],
    recipe: {
      type: String,
      required: true, // Ekleme: recipe alanı zorunlu olmalıdır
    },
    calorie: {
      type: String,
      required: true, // Ekleme: recipe alanı zorunlu olmalıdır
    },
    content_photos: [
      {
        type: String, // Düzelme: content_photos bir dizi string olmalıdır, Array değil
      },
    ],
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
