import { useState, useEffect } from "react";
import "./Stickers.css";

export function Stickers() {
  const [stickerOptions, setStickerOptions] = useState({
    text: "Самир",
    font: "Arial",
    color: "#FF0000",
    height: "",
    width: "",
    quantity: 1,
    price: 0,
  });

  const calculatePrice = () => {
    const { font, height, width, quantity } = stickerOptions;

    if (!height || !width) return 0;

    let basePrice = 0;

    // Различна базова цена в зависимост от шрифта
    switch (font) {
      case "Arial":
        basePrice = 0.1;
        break;
      case "Times New Roman":
        basePrice = 0.15;
        break;
      case "Comic Sans MS":
        basePrice = 0.12;
        break;
      default:
        basePrice = 0.1;
    }

    const area = height * width;
    const price = basePrice * area * quantity;

    return price.toFixed(2); // Връща цена с 2 знака след десетичната запетая
  };

  useEffect(() => {
    const price = calculatePrice();
    setStickerOptions((prevOptions) => ({
      ...prevOptions,
      price: price,
    }));
  }, [
    stickerOptions.font,
    stickerOptions.height,
    stickerOptions.width,
    stickerOptions.quantity,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStickerOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  return (
    <div className="container bg-light p-4 rounded">
      {/* Header Section */}
      <div className="text-center m-5">
        <h1 className="fw-bold">НАПРАВИ СИ НАДПИС САМ</h1>
        <ul className="list-inline">
          <li className="list-inline-item mx-2 text-success">бързо</li>
          <li className="list-inline-item mx-2 text-success">лесно</li>
          <li className="list-inline-item mx-2 text-success">качествено</li>
        </ul>
      </div>

      {/* Description Section */}
      <div className="row">
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
          <button className="btn btn-danger btn-lg w-100">Поръчай</button>
        </div>
      </div>

      <div className="text-center mt-3">
        <p className="text-muted">Срок на изработка 1-2 работни дни.</p>
      </div>
    </div>
  );
}
