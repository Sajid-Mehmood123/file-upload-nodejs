const Product = require("../models/product.model");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const product = await Product.find({});
  res.status(StatusCodes.OK).json({ total: product.length, product });
};

module.exports = { createProduct, getAllProducts };
