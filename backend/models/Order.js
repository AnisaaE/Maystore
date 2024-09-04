const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shipmentNumber: { type: String, required: false },

  senderClient: {
    name: { type: String, required: true },
    phones: [{ type: String, required: true }],
  },

  senderAddress: {
    city: {
      country: {
        code3: { type: String, required: true, default: "BGR" },
      },
      name: { type: String, required: true },
      postCode: { type: String, required: true },
    },
    street: { type: String, required: true },
    num: { type: String, required: true },
    other: { type: String, required: false },
  },

  receiverClient: {
    name: { type: String, required: true },
    phones: [{ type: String, required: true }],
  },

  receiverAddress: {
    city: {
      country: {
        code3: { type: String, required: true, default: "BGR" },
      },
      name: { type: String, required: true },
      postCode: { type: String, required: true },
    },
    street: { type: String, required: true },
    num: { type: String, required: true },
    other: { type: String, required: false },
  },

  requestCourierTimeFrom: { type: String, required: false },
  requestCourierTimeTo: { type: String, required: false },

  packCount: { type: Number, required: true },
  shipmentType: { type: String, required: true }, // Тип на пратката: PACK, DOCUMENT, etc.
  weight: { type: Number, required: true }, // Тегло в килограми
  shipmentDescription: { type: String, required: true }, // Описание на пратката

  mode: { 
    type: String, 
    enum: ["calculate", "validate", "create"], 
    required: true 
  }, // Използвайте "create" за създаване на товарителница

  returnInstructionParams: { type: Object, required: false }, // Допълнителни инструкции за връщане, ако има такива

  services: [{ 
    type: Object, 
    required: false 
  }], // Допълнителни услуги като обявена стойност и наложен платеж

  instructions: { 
    type: Object, 
    required: false 
  }, // Указания към куриера

  orderNumber: { type: String, required: true }, // Номер на поръчката
  sendDate: { type: Date, required: true }, // Дата на изпращане на пратката
});

const Order = mongoose.model("Order", ShippingLabelSchema);

module.exports = Order;
