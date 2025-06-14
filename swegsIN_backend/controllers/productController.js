import Product from "../models/ProductModel.js";

// Fetch all products from the MongoDB database
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from MongoDB
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products from MongoDB" });
  }
};

// Fetch a product by ID.
export const getProductById = async (req, res) => {
  try {
    const productID = req.params.id;
    const product = await Product.findById(productID); // Fetch product by ID from MongoDB
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error while fetching product" });
  }
};
