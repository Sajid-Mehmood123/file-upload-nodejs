const Product = require("../models/product.model");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  res.send("create job");
};

const getAllProducts = async (req, res) => {
  res.send("get all products");
};

module.exports = { createProduct, getAllProducts };
