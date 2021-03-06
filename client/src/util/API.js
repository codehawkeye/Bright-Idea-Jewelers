import axios from "axios";

export default {
  // Gets all products
  getProduct: function() {
    return axios.get("/api/products");
  },
  // Gets the products with the given id
  getProduct: function(id) {
    return axios.get("/api/products" + id);
  },
  // Saves a products to the database
  saveProducts: function(productData) {
    return axios.post("/api/products", productData);
  }
};