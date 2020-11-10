const AsyncHandler = require("express-async-handler");
const Product = require("../models/ProductModel");

// @description: fetch all products
// @route GET /api/products
// @access Public
const getProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @description: fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getProducts,
  getProductById,
};
