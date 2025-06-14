import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  availabilityStatus: { type: String, required: true },
  warrantyInformation: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Array },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
