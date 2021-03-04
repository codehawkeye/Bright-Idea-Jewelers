const mongoose = require("mongoose");
const db = require("../models");

// This file empties the products collection and inserts the products below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactproductlist"
);

const productSeed = [
    {
        title:"",
        brand: "",
        price:  ,

    }
]
