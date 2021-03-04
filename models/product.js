const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number },
  image: { }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
