require("dotenv").config();
const zlib = require("zlib");
const { promisify } = require('util');

let fetch;
(async () => {
  fetch = (await import("node-fetch")).default;
})();

const API_URL = process.env.API_URL;
const API_USERNAME = process.env.API_USERNAME;
const API_PASSWORD = process.env.API_PASSWORD;

const request = async (endpoint, method, body) => {
  try {
      console.log('Requesting from Econt API...' + endpoint);
  
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString('base64'),
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();
  
    if (!responseText) {
      throw new Error('Empty response from API');
    }

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (error) {
      throw new Error('Invalid JSON response from API');
    }

    return responseData;

  } catch (error) {
    console.error('Error in request:', error.message);
    throw new Error(`Error fetching data: ${error.message}`);
  }
};


const getCities = async () => {
  try {
    const response = await request(
      "Nomenclatures/NomenclaturesService.getCities.json",
      "POST",
      {
        countryCode: "BGR",
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw new Error(`Error fetching cities: ${error.message}`);
  }
};

const getOffices = async (cityId) => {
  try {
    const response = await request(
      "Nomenclatures/NomenclaturesService.getOffices.json",
      "POST",
      {
        countryCode: "BGR",
        cityId: cityId,
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching offices:", error);
    throw new Error(`Error fetching offices: ${error.message}`);
  }
};
const createShippingLabel = async (labelData) => {
  const requestBody = {
    label: {
      senderClient: labelData.senderClient,
      senderAddress: labelData.senderAddress,
      receiverClient: labelData.receiverClient,
      receiverAddress: labelData.receiverAddress,
      requestCourierTimeFrom: labelData.requestCourierTimeFrom,
      requestCourierTimeTo: labelData.requestCourierTimeTo,
      packCount: labelData.packCount,
      shipmentType: labelData.shipmentType,
      weight: labelData.weight,
      shipmentDescription: labelData.shipmentDescription,
      returnInstruction: labelData.returnInstruction,
      instructions: labelData.instructions,
      services: labelData.services,
      packingList: labelData.packingList,
      partialDelivery: labelData.partialDelivery,
      paymentSenderMethod: labelData.paymentSenderMethod,
      paymentReceiverMethod: labelData.paymentReceiverMethod,
      paymentReceiverAmount: labelData.paymentReceiverAmount,
      paymentReceiverAmountIsPercent: labelData.paymentReceiverAmountIsPercent,
      paymentOtherClientNumber: labelData.paymentOtherClientNumber,
      paymentOtherAmount: labelData.paymentOtherAmount,
      paymentOtherAmountIsPercent: labelData.paymentOtherAmountIsPercent,
      mediator: labelData.mediator,
    },
    mode: "create", // или 'validate' за валидиране
  };

  return request("createLabel", "POST", requestBody);
};

const validateShippingLabel = async (labelData) => {
  return request("createLabel", "POST", {
    label: labelData,
    mode: "validate",
  });
};
const calculateShippingCost = async (labelData) => {
  return request("createLabel", "POST", {
    label: labelData,
    mode: "calculate",
  });
};

module.exports = {
  createShippingLabel,
  validateShippingLabel,
  calculateShippingCost,
  getCities,
  getOffices,
};
