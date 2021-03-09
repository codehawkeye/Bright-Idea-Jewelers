const mongoose = require("mongoose");
const db = require("../models");

// This file empties the products collection and inserts the products below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactproductlist"
);

const productSeed = [
    {

        title:"Tree of Life Pendant",
        brand: "",
        
        
        price: 95.00 ,
    }

]
db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });