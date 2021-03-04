const mongoose = require("mongoose");
const db = require("../models");

// This file empties the products collection and inserts the products below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactproductlist"
);

const productSeed = [
    {
      title:"Lumarian Quartz Deer Skull",
      description:"Necklace Wirewrapped with Sterling Silver",
      brand: "Sparkles and Swirls Boutique",
      price:  75.00,
    },{
      title:"Dual Point Quartz Bronze Deer Skull",
      description:"Necklace Antiqued Bronze Chain 24 inch",
      brand: "Sparkles and Swirls Boutique",
      price:  55.00,
    },{
      title:"Tree of Life Pendant",
      description:"Labradorite Sterling Silver",
      brand: "Sparkles and Swirls Boutique",
      price:  65.00,
    },{
      title:"Large Tree of Life Pendant",
      description:"Teardrop Necklace Wirewrapped with Sterling Silver",
      brand: "Sparkles and Swirls Boutique",
      price:  95.00,
    },{
      title:"Small Tree of Life Pendant",
      description:"Labradorite Wirewrapped with Antique Copper ",
      brand: "Sparkles and Swirls Boutique",
      price:  60.00,
    },{
      title:"Large Labradorite Tree of Life",
      description:"Pendant Wirewrapped with Antique Copper",
      brand: "Sparkles and Swirls Boutique",
      price:  75.00,
    },{
      title:"Square Labradorite Tree of Life",
      description:"Pendant Wirewrapped with Antique Copper",
      brand: "Sparkles and Swirls Boutique",
      price:  70.00,
    },{
      title:"Labradorite Argentium",
      description:"Pendant Wirewrapped with Sterling Silver",
      brand: "Sparkles and Swirls Boutique",
      price:  40.00,
    },{
      title:"Labradorite Pendant",
      description:"Pendant Wirewrapped with Sterling Silver",
      brand: "Sparkles and Swirls Boutique",
      price:  55.00,
    },{
      title:"Custom Diary, contact for pricing",
      description:"Leather Bound with texture inlays",
      brand: "Sparkles and Swirls Boutique",
      price:  0.00,
    },
]
