import express from "express";
import {
  addToCart,
  updateCart,
  removeFromCart,
  clearCart,
  getCart,
} from "../controllers/cartController.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/cart", auth, getCart);
router.post("/cart", auth, addToCart);
router.put("/cart/:id", auth, updateCart);
router.delete("/cart/clear", auth, clearCart);
router.delete("/cart/:id", auth, removeFromCart);

export default router;
