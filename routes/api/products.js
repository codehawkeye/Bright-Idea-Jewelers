const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router.route("/products")
  .get(productsController.findAll);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .get(productsController.findById);
  ;

module.exports = router;