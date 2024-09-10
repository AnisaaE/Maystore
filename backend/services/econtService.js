require("dotenv").config();

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
    throw new Error(`Error fetching offices: ${error.message}`);
  }
};
const createShippingLabel = async (labelData, moreInfo) => {
  // Създаване на тялото на заявката с необходимите параметри
  const requestBody = {
    label: {
      senderClient: {
        name: "Селви Гаджалов",
        phones: ["0877707018"],
      },
      senderAddress: {
        id: 65,
        city: {
          country: {
            code3: "BGR",
          },
          name: "Рудозем",
          postCode: "4960",
        },
        street: "бул. България",
      },
      senderOfficeCode: "4960",
      receiverClient: {
        name: labelData.name,
        phones: [labelData.phone],
        email: labelData.email,
      },
      receiverAddress: labelData.office,
      receiverOfficeCode: labelData.office.code,
      packCount: 1,
      shipmentType: "PACK",
      weight: moreInfo.weight,
      shipmentDescription: moreInfo.description,
      payAfterAccept: 1,
      paymentReceiverMethod: "CASH",
      sendDate: new Date().toISOString().slice(0, 10),
    },
    mode: "validate", 
  };
  
  return request(
    "Shipments/LabelService.createLabel.json", 
    "POST",
    requestBody
  );
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
