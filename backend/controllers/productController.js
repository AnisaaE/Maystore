const router = require("express").Router();
const path = require("path");
const Product = require("../models/Product");

const uploadImage = async (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:4000/images/${req.file.filename}`,
  });
};

const addProduct = async (req, res) => {
  try {
    const { name, price, category, subcategory, colors } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No images uploaded" });
    }

    const imageUrls = req.files.map(
      (file) => `https://maystore-backend.onrender.com/upload/images/${file.filename}`
    );

    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      id = products[products.length - 1].id + 1;
    } else {
      id = 1;
    }

    const newProduct = new Product({
      id,
      name,
      price,
      category,
      subcategory,
      colors,
      images: imageUrls,
    });

    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Failed to add product" });
  }
};

const removeProduct = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.body;

    const product = await Product.findOneAndDelete({ id });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    console.log(`Removed product: ${product.name}`);

    res.json({ success: true, name: product.name });
  } catch (error) {
    console.error("Error removing product:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while removing the product",
      });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while fetching products",
      });
  }
};
const getOneProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ id });
  console.log(product)
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  } else {
    return res.status(200).json( product );
  }
};
module.exports = {
  uploadImage,
  addProduct,
  removeProduct,
  getAllProducts,
  getOneProduct,
};
