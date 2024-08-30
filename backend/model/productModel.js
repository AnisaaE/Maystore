const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true 
  },
  name: {
    type: String,
    required: true,
    trim: true 
  },
  price: {
    type: Number,
    required: true,
    min: 0 
  },
  category: {
    type: String,
    required: true,
    trim: true 
  },
  subcategory: {
    type: String,
    trim: true 
  },
  image: {
    type: String,
    trim: true 
  },
  available: {
    type:Boolean,
    default: true
  },
}, {
  timestamps: true 
});

// Създай модел на базата на схемата
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
