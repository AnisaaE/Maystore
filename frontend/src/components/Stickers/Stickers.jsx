import { useState, useEffect } from "react";
import "./Stickers.css";
import { useCart } from "../../context/cardContext";

export function Stickers() {
  const { addToCart } = useCart();
  const [stickerOptions, setStickerOptions] = useState({
    name: "Стикер",
    text: "Самир",
    font: "Arial",
    color: "#FF0000",
    height: "",
    width: "",
    quantity: 1,
    price: 0,
  });

  useEffect(() => {
    const price = calculatePrice();
    const textWidth = calculateTextWidth(
      stickerOptions.height,
      stickerOptions.font,
      stickerOptions.text
    );
    setStickerOptions((prevOptions) => ({
      ...prevOptions,
      price: price,
      width: textWidth,
    }));
  }, [
    stickerOptions.font,
    stickerOptions.height,
    stickerOptions.width,
    stickerOptions.quantity,
    stickerOptions.text,
  ]);

  const fontCoefficients = {
    Arial: 0.77,
  "Times New Roman": 0.6545, // (0.85 / 1) * 0.77
  "Comic Sans MS": 0.847,    // (1.1 / 1) * 0.77
  "Courier New": 0.7315,     // (0.95 / 1) * 0.77
  Verdana: 0.924,            // (1.2 / 1) * 0.77
  Georgia: 0.693,            // (0.9 / 1) * 0.77
  Helvetica: 0.77,           // (1 / 1) * 0.77
  Tahoma: 0.8085,            // (1.05 / 1) * 0.77
  Calibri: 0.7315,           // (0.95 / 1) * 0.77
  Garamond: 0.616,           // (0.8 / 1) * 0.77
  "Lucida Sans": 0.8855,     // (1.15 / 1) * 0.77
  "Trebuchet MS": 0.8085,    // (1.05 / 1) * 0.77
  Futura: 0.693,             // (0.9 / 1) * 0.77
  "Palatino Linotype": 0.6545,// (0.85 / 1) * 0.77
  Impact: 1.001,             // (1.3 / 1) * 0.77
  "Gill Sans": 0.7315   
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const isHeight = name === "height";
    const isWidth = name === "width";

    let newHeight = stickerOptions.height;
    let newWidth = stickerOptions.width;

    if (isHeight && value) {
      newHeight = value;
      newWidth = calculateTextWidth(
        value,
        stickerOptions.font,
        stickerOptions.text
      );
    } else if (isWidth && value) {
      newWidth = value;
      newHeight = calculateTextHeight(
        value,
        stickerOptions.font,
        stickerOptions.text
      );
    }

    setStickerOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
      height: newHeight,
      width: newWidth,
    }));
  };

  const cmToPx = (cm) => cm * 37.795275591; // 1 cm = 37.795275591 px
const pxToCm = (px) => px / 37.795275591;
  const calculateTextWidth = (heightInCm, font, text) => {
    const heightInPx = cmToPx(heightInCm);
  
    // Създаваме нов canvas елемент
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    // Задаваме шрифта на контекста на canvas
    context.font = `${heightInPx}px ${font}`;
    
    // Измерваме ширината на текста в пиксели
    const textWidthInPx = context.measureText(text).width;
    
    // Преобразуваме ширината от пиксели в сантиметри
    const textWidthInCm = pxToCm(textWidthInPx);
    
    return textWidthInCm.toFixed(2);
  };

  const calculateTextHeight = (widthInCm, font, text) => {
    // Преобразуваме ширината от сантиметри в пиксели
    const widthInPx = cmToPx(widthInCm);
  
    // Създаваме нов canvas елемент
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    // Задаваме шрифта на контекста на canvas с предполагаема височина (например 20px)
    // Ще коригираме височината по-долу според нуждите
    const initialFontSizePx = 20; // Примерен начален размер на шрифта
    context.font = `${initialFontSizePx}px ${font}`;
  
    // Измерваме ширината на текста при началния размер на шрифта
    const textWidthInPx = context.measureText(text).width;
  
    // Пропорционално коригираме височината, за да получим правилната стойност
    const scaleFactor = widthInPx / textWidthInPx;
    const finalHeightInPx = initialFontSizePx * scaleFactor;
  
    // Преобразуваме височината от пиксели в сантиметри
    const finalHeightInCm = pxToCm(finalHeightInPx);
  
    return finalHeightInCm.toFixed(2);
  };
  
  const calculatePrice = () => {
    const { height, width, quantity } = stickerOptions;

    if (!height || !width) return 0;

    const area = (width / 100) * (height / 100);
    console.log(area);
    const pricePerSquareMeter = 10;

    const totalPrice = area * pricePerSquareMeter * quantity;
    return totalPrice.toFixed(2);
  };
  const handleOrder = () => {
    const stickerToAdd = {
      ...stickerOptions,
      id: `${stickerOptions.text}-${stickerOptions.font}-${stickerOptions.color}-${stickerOptions.height}-${stickerOptions.width}`, // Generate a unique ID for each sticker
    };

    addToCart(stickerToAdd); // Add the configured sticker to the cart
  };

  return (
    <div className="container bg-light p-1 rounded">
      {/* Header Section */}
      {/* <div className="text-center m-4">
        <h1 className="fw-bold">НАПРАВИ СИ НАДПИС САМ</h1>
        <ul className="list-inline">
          <li className="list-inline-item mx-2 text-success">бързо</li>
          <li className="list-inline-item mx-2 text-success">лесно</li>
          <li className="list-inline-item mx-2 text-success">качествено</li>
        </ul>
      </div> */}

      {/* Description Section */}
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <p>
            Надписите са изработени от висококачествено PVC каст фолио ORAFOL /
            ORACAL 751 C / подходящо за апликация върху:
          </p>
          <ul
            className="list-unstyled text-start mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <li>
              <i className="bi bi-check-circle-fill text-success"></i>{" "}
              автомобили, камиони, мотори
            </li>
            <li>
              <i className="bi bi-check-circle-fill text-success"></i> стъкла,
              витрини
            </li>
            <li>
              <i className="bi bi-check-circle-fill text-success"></i> ПДЧ, МДФ,
              еталбонд, плексиглас
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center p-0">
          <img
            src="https://via.placeholder.com/400x200?text=Your+Car+Image+Here"
            alt="Car"
            className="img-fluid rounded"
            style={{ maxHeight: "200px" }}
          />
        </div>
      </div>
      {/* Customization Section */}
      <div className="row align-items-center justify-content-center">
        <div className="text-center mb-3 col-md-6 row justify-content-center">
          <label htmlFor="custom-text" className="form-label fw-bold col-12">
            Въведи своя надпис тук
          </label>
          <input
            type="text"
            id="custom-text"
            name="text"
            className="form-control text-center fw-bold col-12"
            value={stickerOptions.text}
            onChange={handleChange}
            placeholder="Надпис"
            style={{
              color: stickerOptions.color,
              fontFamily: stickerOptions.font,
              fontSize: "24px",
            }}
          />
        </div>

        <div className="col-6 row g-3 mb-4">
          <div className="col-md-6 row">
            <div className="col-12">
              <label htmlFor="font" className="form-label mb-0 mt-1">
                Шрифт
              </label>
              <select
                id="font"
                name="font"
                className="form-select mx-auto mb-1"
                value={stickerOptions.font}
                onChange={handleChange}
              >
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Calibri">Calibri</option>
                <option value="Garamond">Garamond</option>
                <option value="Lucida Sans">Lucida Sans</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Futura">Futura</option>
                <option value="Palatino Linotype">Palatino Linotype</option>
                <option value="Impact">Impact</option>
                <option value="Gill Sans">Gill Sans</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="color" className="form-label mb-0 mt-1">
                Цвят
              </label>
              <input
                type="color"
                id="color"
                name="color"
                className="form-control form-control-color mx-auto mb-2"
                value={stickerOptions.color}
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <label
                htmlFor="quantity"
                className="form-label mx-auto mb-0 mt-1"
              >
                Брой
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="form-control mb-1"
                value={stickerOptions.quantity}
                onChange={handleChange}
                placeholder="1"
              />
            </div>
          </div>
          <div className="col-md-6 row align-self-start">
            {" "}
            <div className="col-12">
              <label htmlFor="height" className="form-label mb-0 mt-1">
                Височина (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                className="form-control mx-auto mb-2"
                value={stickerOptions.height}
                onChange={handleChange}
                placeholder="cm"
              />
            </div>
            <div className="col-12 ">
              <label htmlFor="width" className="form-label mb-0 mt-1">
                Дължина (cm)
              </label>
              <input
                type="number"
                id="width"
                name="width"
                className="form-control mx-auto mb-2"
                value={stickerOptions.width}
                onChange={handleChange}
                placeholder="cm"
              />
            </div>
            <div className="col-12">
              <label
                htmlFor="price"
                className="form-label mb-0 mt-1"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Цена
              </label>
              <input
                type="text"
                id="price"
                name="price"
                className="form-control  mb-2"
                style={{
                  fontSize: "24px",
                  color: "#d9534f",
                  backgroundColor: "#f8f9fa",
                  textAlign: "center",
                }}
                value={`${stickerOptions.price} лв`}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-end justify-content-end">
          <button className="btn btn-danger btn-lg w-100" onClick={handleOrder}>
            Поръчай
          </button>
        </div>
      </div>

      {/* <div className="text-center mt-3">
        <p className="text-muted">Срок на изработка 1-2 работни дни.</p>
      </div> */}
      <div className="row transportSection mx-4 d-flex justify-content-center my-1 mb-5">
        <div className="col-md-6 px-4 d-flex flex-column pt-3">
          <div className="display-6">
            Tранспортна реклама за нашите бизнес клиенти
          </div>
          <p className="text-muted mt-3">
            Свържете се с нас за получаване на оферта{" "}
          </p>
        </div>
        <div className="col-md-4 transportImg">
          <img
            src={require("../../assets/images/transport.jpeg")}
            alt=""
            className="transportImg"
          />
        </div>
      </div>
    </div>
  );
}
