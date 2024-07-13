const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
} = require("../controllers/product.controller");
const { uploadProductImage } = require("../controllers/uploads.controller");

router.route("/").post(createProduct).get(getAllProducts);
router.route("/uploads  ").post(uploadProductImage);

module.exports = router;
