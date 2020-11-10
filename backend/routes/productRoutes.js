const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/ProductController");

// @description: fetch all products
// @route GET /api/products
// @access Public
router.route("/").get(getProducts);

// @description: fetch single product
// @route GET /api/products/:id
// @access Public

router.route("/:id").get(getProductById);

module.exports = router;
