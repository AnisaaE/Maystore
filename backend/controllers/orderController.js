const router = require("express").Router();
const path = require("path");
const { validateShippingLabel, createShippingLabel, getCities, getOffices } = require("../services/econtService");

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
      res.json(cities);

    } catch (error) {
      console.error('Error in getCitiesController:', error);
      res.status(500).json({ message: error.message });
    }
  }
const getOfficesController = async (req, res) => {
  try {
    const { id } = req.params;
    const offices = await getOffices(id);
    console.log(offices);
    res.json(offices);
  } catch (error) {
    console.error('Error in getOfficesController:', error);
    res.status(500).json({ message: error.message });
  }
}
  module.exports = { 
    validateOrder,
    createOrder,
    getCitiesController,
    getOfficesController
 }