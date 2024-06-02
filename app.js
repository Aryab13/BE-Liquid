import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./models/index.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import cors from "cors";

const app = express();
const __dirname = path.resolve();

// Middleware untuk parsing body JSON
app.use(bodyParser.json());
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
