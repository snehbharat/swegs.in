import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

import { fetchProducts } from "./data.js";

// fetchProducts();

dotenv.config();
connectDB();

const app = express();

// middlewares
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // to parse JSON bodies

// Routes
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", userRoutes);
app.use("/api", adminRoutes);

app.get("/", (req, res) => {
  res.send("root route");
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
