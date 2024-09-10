const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = require("./Product").schema;

const officeSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  city: {
    country: {
      code3: {
        type: String,
        required: true,
      },
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    postCode: {
      type: String,
      required: true,
      trim: true,
    },
  },
  fullAddress: {
    type: String,
    required: true,
    trim: true,
  },
  quarter: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  street: {
    type: String,
    trim: true,
  },
});

const OrderedProductSchema = new Schema({
  uniqueKey: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  printFront: {
    type: String,
    default: '',
  },
  printBack: {
    type: String,
    default: '',
  },
  uploadFront: {
    type: String, // Може да е `String` или `Buffer` в зависимост от начина, по който се съхраняват изображенията
    default: null,
  },
  uploadBack: {
    type: String, // Може да е `String` или `Buffer` в зависимост от начина, по който се съхраняват изображенията
    default: null,
  }
  
});
const orderSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    office: {
      type: officeSchema, 
      required: true,
    },
    products: {
      type: [OrderedProductSchema],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
