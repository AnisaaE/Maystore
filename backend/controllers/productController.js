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
  const { name, price, category, subcategory, image } = req.body;

  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    id = products[products.length - 1].id + 1;
  }else id= 1;

  const newProduct = await Product.create({
    id,
    name,
    price,
    category,
    subcategory,
    image,
  });

  console.log(newProduct);

  res.json({ success: true, data: newProduct });
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;

    const product = await Product.findOneAndDelete({ id });

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    console.log(`Removed product: ${product.name}`);

    res.json({ success: true, name: product.name });
  } catch (error) {
    console.error('Error removing product:', error);
    res.status(500).json({ success: false, message: 'An error occurred while removing the product' });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json({ success: true, products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching products' });
  }
};

module.exports = {
  uploadImage,
  addProduct,
  removeProduct,
  getAllProducts,
};
