import Cart from "../models/cartModel.js";
import Product from "../models/ProductModel.js";

// get all cart items of a particular user
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    // console.log(cart);

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// add items to the cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    // Finding the user cart
    const cart = await Cart.findOne({ userId: req.user.id });

    if (cart) {
      // Check if the product is already in the cart
      const existingItem = cart.items.find(
        (item) => item.product._id.toString() === productId
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ product, quantity });
      }
      await cart.save();
      res.json(cart);
    } else {
      const newCart = new Cart({
        userId: req.user.id,
        items: [{ product, quantity }],
      });
      await newCart.save();
      res.json(newCart);
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Update cart item quantity
export const updateCart = async (req, res) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the item in the cart by the product ID
    const item = cart.items.find(
      (item) => item.product._id.toString() === req.params.id
    );
    if (item) {
      item.quantity = quantity;
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ error: "Item not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    cart.items = cart.items.filter(
      (item) => item.product._id.toString() !== req.params.id
    );
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// clear cart
export const clearCart = async (req, res) => {
  try {
    console.log(req.user);

    // Find the user's cart
    const cart = await Cart.findOne({ userId: req.user.id });
    console.log(cart);

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Clear the items array
    cart.items = [];
    await cart.save();

    res.json({ message: "Cart cleared successfully", cart: cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
