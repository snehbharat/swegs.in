import Product from "../models/ProductModel.js";

// Add a new product
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      stockQuantity,
      image,
      availabilityStatus,
      warrantyInformation,
      rating,
      reviews,
    } = req.body;
    const product = new Product({
      name,
      price,
      description,
      stockQuantity,
      image,
      availabilityStatus,
      warrantyInformation,
      rating,
      reviews,
    });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

// Update an existing product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const product = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // destructing id from params
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};
