import React, { useState } from "react";
import "./Detail.css";

const Detail = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const [mainImage, setMainImage] = useState("image1.jpg"); // Постави твоето изображение по подразбиране
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <>
      <div className="my-5"></div>
      <div className="container pt-3 bg-light">
        <div className="row m-5 mt-5">
          <div className="col-md-6">
            <img
              src={require("../../assets/images/tshirt-intro.png")}
              alt="Дамска Спортна Тениска"
              className="product-image"
            />
            <div className="d-flex mt-3">
              <img
                src={require("../../assets/images/tshirt-intro.png")}
                alt="thumbnail"
                className="thumbnail-img"
                onClick={() => handleThumbnailClick("image1.jpg")}
              />
              <img
                src={require("../../assets/images/tshirt-intro.png")}
                alt="thumbnail"
                className="thumbnail-img"
                onClick={() => handleThumbnailClick("image2.jpg")}
              />
              <img
                src={require("../../assets/images/tshirt-intro.png")}
                alt="thumbnail"
                className="thumbnail-img"
                onClick={() => handleThumbnailClick("image3.jpg")}
              />
              <img
                src={require("../../assets/images/tshirt-intro.png")}
                alt="thumbnail"
                className="thumbnail-img"
                onClick={() => handleThumbnailClick("image4.jpg")}
              />
            </div>
          </div>

          <div className="col-md-6">
            <h1>Дамска Спортна Тениска</h1>
            <ul className="list-unstyled">
              <li>100% Полиестер</li>
              <li>145гр./м2</li>
              <li>Произведено в България</li>
            </ul>
            <p className="text-danger h4">15,00 лв.</p>

            <form>
              <div className="mb-3">
                <label htmlFor="size" className="form-label">
                  РАЗМЕР:
                </label>
                <div className="d-flex flex-wrap justify-content-center">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizeS"
                      value="S"
                      onChange={handleSizeChange}
                    />
                    <label className="form-check-label pe-2" htmlFor="sizeS">
                      S
                    </label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizeM"
                      value="M"
                      onChange={handleSizeChange}
                    />
                    <label className="form-check-label" htmlFor="sizeM">
                      M
                    </label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizeL"
                      value="L"
                      onChange={handleSizeChange}
                    />
                    <label className="form-check-label" htmlFor="sizeL">
                      L
                    </label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizeXL"
                      value="XL"
                      onChange={handleSizeChange}
                    />
                    <label className="form-check-label" htmlFor="sizeXL">
                      XL
                    </label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="size2XL"
                      value="2XL"
                      onChange={handleSizeChange}
                    />
                    <label className="form-check-label" htmlFor="size2XL">
                      2XL
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
      <label htmlFor="color" className="form-label">ЦВЯТ:</label>
      <div id="color-options" className="d-flex flex-wrap">
        <label className={`color-option ${selectedColor === '#ffffff' ? 'selected' : ''}`} style={{ backgroundColor: '#ffffff' }}>
          <input
            type="radio"
            name="color"
            value="#ffffff"
            checked={selectedColor === '#ffffff'}
            onChange={handleColorChange}
          />
        </label>
        <label className={`color-option ${selectedColor === '#000000' ? 'selected' : ''}`} style={{ backgroundColor: '#000000' }}>
          <input
            type="radio"
            name="color"
            value="#000000"
            checked={selectedColor === '#000000'}
            onChange={handleColorChange}
          />
        </label>
        <label className={`color-option ${selectedColor === '#28a745' ? 'selected' : ''}`} style={{ backgroundColor: '#28a745' }}>
          <input
            type="radio"
            name="color"
            value="#28a745"
            checked={selectedColor === '#28a745'}
            onChange={handleColorChange}
          />
        </label>
        <label className={`color-option ${selectedColor === '#dc3545' ? 'selected' : ''}`} style={{ backgroundColor: '#dc3545' }}>
          <input
            type="radio"
            name="color"
            value="#dc3545"
            checked={selectedColor === '#dc3545'}
            onChange={handleColorChange}
          />
        </label>
        {/* Добавете още цветове по същия начин */}
      </div>
      </div>

              <div className="mb-3">
                <label htmlFor="print-front" className="form-label">
                  ОТПРЕД – ПРИНТ:
                </label>
                <select id="print-front" className="form-select">
                  <option value="">Избери</option>
                  {/* Добави опции за принт */}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="print-back" className="form-label">
                  ГРЪБ – ПРИНТ:
                </label>
                <select id="print-back" className="form-select">
                  <option value="">Избери</option>
                  {/* Добави опции за принт */}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="upload-front" className="form-label">
                  Прикачи файл за принт – Отпред:
                </label>
                <input type="file" id="upload-front" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="upload-back" className="form-label">
                  Прикачи файл за принт – Гръб:
                </label>
                <input type="file" id="upload-back" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  КОЛИЧЕСТВО:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="form-control"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Купи
              </button>
            </form>

            <p className="mt-4 text-muted small">
              Бележка за Бизнес клиенти: Отстъпката за количества на едро се
              отнася за поръчка на брой от размер и цвят.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
