const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");
const connectDB = require("./config/db");
require("colors");

const productRoutes = require("./routes/productRoutes");

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API IS RUNNING!");
});

app.use("/api/products", productRoutes);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
