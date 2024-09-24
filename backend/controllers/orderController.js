const router = require("express").Router();
const path = require("path");
const {
  validateShippingLabel,
  createShippingLabel,
  getCities,
  getOffices,
  deleteShippingLabel,
} = require("../services/econtService");
const Order = require("../models/Order");

const validateOrder = async (req, res) => {
  try {
    const labelData = req.body;
    const result = await validateShippingLabel(labelData);
    res.json(result);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
};
const createOrder = async (req, res) => {
  try {
    const labelData = req.body;
    const result = await createShippingLabel(labelData);
    res.json(result);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
};
const getCitiesController = async (req, res) => {
  try {
    const cities = await getCities();
    res.json(cities);
  } catch (error) {
    console.error("Error in getCitiesController:", error);
    res.status(500).json({ message: error.message });
  }
};
const getOfficesController = async (req, res) => {
  try {
    const { id } = req.params;
    const offices = await getOffices(id);

    res.json(offices);
  } catch (error) {
    console.error("Error in getOfficesController:", error);
    res.status(500).json({ message: error.message });
  }
};

const sendOrder = async (req, res) => {
  console.log(req.body);
  try {
    const { name, phone, email, office, products, totalPrice } = req.body;

    let orders = await Order.find({});
    let id;
    if (orders.length > 0) {
      id = orders[orders.length - 1].id + 1;
    } else {
      id = 1;
    }

    const newOrder = new Order({
      id,
      name,
      phone,
      office,
      email,
      products,
      totalPrice,
    });

    console.log(newOrder);

    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order added successfully", order: newOrder });
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).json({ message: "Failed to add order" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("products");
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching order", error: error.message });
  }
};

const createLabel = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    const moreInfo = req.body;
    const result = await createShippingLabel(order, moreInfo);
    console.log(result);

    if (result.label && result.label.shipmentNumber) {
      // Опит за актуализиране на статуса на поръчката
      console.log(moreInfo.weight);

      try {
        order.status = "Shipped";
        order.pdfUrl = result.label.pdfURL;
        order.weight = moreInfo.weight;
        order.description = moreInfo.description;
        order.shipmentNumber = result.label.shipmentNumber;
        console.log(order);
        await order.save();
        console.log("Order status updated to 'Shipped'");
      } catch (error) {
        console.error("Error updating order status:", error);
        // Не хвърляме грешка, продължаваме изпълнението
      }
    }
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating label", error: error.message });
  }
};

// Delete label from an order
const deleteLabel = async (req, res) => {
  
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    // Add logic to delete the label
    const result = await deleteShippingLabel(order);
    console.log(result);
    if (result.results) {
      // Опит за актуализиране на статуса на поръчката
      try {
        order.status = "Pending";
        order.pdfUrl = "";
        order.shipmentNumber = "";
        console.log(order);
        await order.save();
        console.log("Order status updated to 'Pending'");
      } catch (error) {
        console.error("Error updating order status:", error);
        // Не хвърляме грешка, продължаваме изпълнението
      }
    }

    res.json({ message: "Label deleted successfully", order });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting label", error: error.message });
  }
};

// Delete an order
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting order", error: error.message });
  }
};

module.exports = {
  validateOrder,
  createOrder,
  getCitiesController,
  getOfficesController,
  sendOrder,
  getAllOrders,
  getOrderById,
  createLabel,
  deleteLabel,
  deleteOrder,
};
