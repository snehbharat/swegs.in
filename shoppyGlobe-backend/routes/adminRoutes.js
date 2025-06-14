import express from "express";
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/adminController.js";
import { auth, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add a new product
router.post("/admin/add-product", auth, admin, addProduct);

// Update an existing product
router.put("/admin/update-product/:id", auth, admin, updateProduct);

// Delete a product
router.delete("/admin/delete-product/:id", auth, admin, deleteProduct);

export default router;
