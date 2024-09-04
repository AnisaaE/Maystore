const router = require("express").Router();
const path = require("path");
const { validateShippingLabel, createShippingLabel, getCities } = require("../services/econtService");

const validateOrder = async (req, res) => {
    try {
      const labelData = req.body;
      const result = await validateShippingLabel(labelData);
      res.json(result);
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  }
const createOrder = async (req, res) => {
    try {
      const labelData = req.body;
      const result = await createShippingLabel(labelData);
      res.json(result);
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  }
  const getCitiesController = async (req, res) => {
    try {
      const cities = await getCities();
      console.log('Cities received:', cities);
      res.json(cities);

    } catch (error) {
      console.error('Error in getCitiesController:', error);
      res.status(500).json({ message: error.message });
    }
  }

  module.exports = { 
    validateOrder,
    createOrder,
    getCitiesController
 }