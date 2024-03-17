import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import recipeRoutes from './routes/recipe.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const uri =
  "mongodb+srv://furkankaratekin:furkankaratekin@nefis-yemekler.4tjick9.mongodb.net/?retryWrites=true&w=majority&appName=nefis-yemekler"; // .env dosyasında tanımladığınız bağlantı dizesi // Update with your MongoDB connection string // Use the environment variable
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error("MongoDB connection error:", err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/recipe", recipeRoutes);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
