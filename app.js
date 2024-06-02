import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Import cors
import sequelize from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();
const __dirname = path.resolve();

// Middleware untuk parsing body JSON
app.use(bodyParser.json());

// Middleware untuk CORS
app.use(cors());

// Middleware untuk melayani file statis
app.use("/public", express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", userRoutes);
app.use("/api", productRoutes);

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
