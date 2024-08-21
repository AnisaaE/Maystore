import { useState } from "react";
import "./Stickers.css";

export function Stickers() {
  const [text, setText] = useState("Самир");
  const [font, setFont] = useState("Arial");
  const [color, setColor] = useState("#FF0000");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container bg-light p-4 rounded ">
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
            className="form-control text-center fw-bold col-12"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Надпис"
            style={{ color: color, fontFamily: font, fontSize: "24px" }}
          />
        </div>

        <div className=" col-6 row g-3 mb-4">
          <div className="col-md-6 row">
            <div className="col-12">
              <label htmlFor="font" className="form-label">
                Шрифт
              </label>
              <select
                id="font"
                className="form-select mx-auto"
                value={font}
                onChange={(e) => setFont(e.target.value)}
              >
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="color" className="form-label">
                Цвят
              </label>
              <input
                type="color"
                id="color"
                className="form-control form-control-color mx-auto"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>

            <div className="col-12">
              <label htmlFor="quantity" className="form-label mx-auto">
                Брой
              </label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="1"
              />
            </div>
          </div>
          <div className="col-md-6 row align-self-start">
            {" "}
            <div className="col-12">
              <label htmlFor="height" className="form-label">
                Височина (cm)
              </label>
              <input
                type="number"
                id="height"
                className="form-control mx-auto"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="cm"
              />
            </div>
            <div className="col-12 ">
              <label htmlFor="width" className="form-label">
                Дължина (cm)
              </label>
              <input
                type="number"
                id="width"
                className="form-control mx-auto"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="cm"
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
