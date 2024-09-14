example = {
  mode: "create",
  label: {
    senderClient: {
      name: "Тест Подател",
      phones: ["0888855533"],
    },
    senderAgent: {
      name: "SUPER ADMINISTRATOR",
      phones: ["0888855533"],
    },
    senderOfficeCode: "1127",
    receiverClient: {
      name: "Тест Получател",
      phones: ["0888822255"],
    },
    receiverAgent: {
      name: "Тест Получател",
      phones: ["0888822255"],
    },
    receiverOfficeCode: "8260",
    payAfterTest: false,
    sizeUnder60cm: true,
    payAfterAccept: true,
    partialDelivery: true,
    keepUpright: false,
    packCount: 1,
    shipmentType: "pack",
    weight: 1,
    sizeUnder60cm: 1,
    services: {
      cdType: "get",
      cdAmount: 125,
      cdCurrency: "BGN",
     // cdPayOptionsTemplate: "CD111111",
    },
    shipmentDescription: "Хранителна добавка",
    instructions: [
      {
        returnInstructionParams: {
          rejectAction: "contact",
          rejectContact: "0888822255",
          rejectOriginalParcelPaySide: "sender",
          rejectReturnParcelPaySide: "receiver",
        },
        type: "return",
      },
    ],
    paymentSenderMethod: "cash",
    paymentReceiverAmount: 0,
  },
};
