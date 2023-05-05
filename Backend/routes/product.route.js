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

module.exports = { productRoute };
