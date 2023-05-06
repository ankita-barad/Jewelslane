const express = require("express");
const { ProductModel } = require("../models/product.model");
const productRoute = express.Router();

productRoute.post("/create", async (req, res) => {
  try {
    let products = await ProductModel.insertMany(req.body);
    res.send(products);
  } catch (error) {
    console.log(error);
  }
});

productRoute.get("/", async (req, res) => {
  try {
    let products = await ProductModel.find();
    res
      .status(200)
      .send(JSON.stringify({ products, filters: {}, total: products.length }));
  } catch (error) {
    console.log(error);
  }
});

module.exports = { productRoute };
