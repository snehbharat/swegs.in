import mongoose from "mongoose";
import axios from "axios";
import Product from "./models/ProductModel.js";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Fetch products from the external API
    const response = await axios.get(API_URL);
    const products = response.data.products;
    // console.log(products);

    // Insert products into MongoDB
    const productDocs = products.map((product) => ({
      name: product.title,
      price: product.price,
      description: product.description,
      stockQuantity: product.stock,
      image: product.images[0],
      availabilityStatus: product.availabilityStatus,
      warrantyInformation: product.warrantyInformation,
      rating: product.rating,
      reviews: product.reviews,
    }));

    await Product.insertMany(productDocs);
    console.log(
      "Products have been successfully added to MongoDB",
      productDocs
    );
  } catch (error) {
    console.error("Error fetching and populating products:", error.message);
  } finally {
    mongoose.disconnect();
  }
};

// fetchProducts();
