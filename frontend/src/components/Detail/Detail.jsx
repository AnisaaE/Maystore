import React, { useState } from 'react';
import './Detail.css';

const Detail = () => {
  const [mainImage, setMainImage] = useState('image1.jpg'); // Постави твоето изображение по подразбиране
  const [quantity, setQuantity] = useState(1);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="container my-10 bg-light">
      <div className="row m-5 mt-10">
        <div className="col-md-6">
          <img  src={require("../../assets/images/tshirt-intro.png")} alt="Дамска Спортна Тениска" className="product-image" />
          <div className="d-flex mt-3">
            <img src={require("../../assets/images/tshirt-intro.png")} alt="thumbnail" className="thumbnail-img" onClick={() => handleThumbnailClick('image1.jpg')} />
            <img src={require("../../assets/images/tshirt-intro.png")} alt="thumbnail" className="thumbnail-img" onClick={() => handleThumbnailClick('image2.jpg')} />
            <img src={require("../../assets/images/tshirt-intro.png")} alt="thumbnail" className="thumbnail-img" onClick={() => handleThumbnailClick('image3.jpg')} />
            <img src={require("../../assets/images/tshirt-intro.png")} alt="thumbnail" className="thumbnail-img" onClick={() => handleThumbnailClick('image4.jpg')} />
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
              <label htmlFor="size" className="form-label">РАЗМЕР:</label>
              <select id="size" className="form-select">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="color" className="form-label">ЦВЯТ:</label>
              <div id="color-options">
                {/* Добави бутоните за цветове с Bootstrap класове */}
                <button className="btn btn-outline-primary btn-sm me-2">Бял</button>
                <button className="btn btn-outline-secondary btn-sm me-2">Черен</button>
                <button className="btn btn-outline-success btn-sm me-2">Зелен</button>
                <button className="btn btn-outline-danger btn-sm">Червен</button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="print-front" className="form-label">ОТПРЕД – ПРИНТ:</label>
              <select id="print-front" className="form-select">
                <option value="">Избери</option>
                {/* Добави опции за принт */}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="print-back" className="form-label">ГРЪБ – ПРИНТ:</label>
              <select id="print-back" className="form-select">
                <option value="">Избери</option>
                {/* Добави опции за принт */}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="upload-front" className="form-label">Прикачи файл за принт – Отпред:</label>
              <input type="file" id="upload-front" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="upload-back" className="form-label">Прикачи файл за принт – Гръб:</label>
              <input type="file" id="upload-back" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">КОЛИЧЕСТВО:</label>
              <input type="number" id="quantity" className="form-control" value={quantity} min="1" onChange={(e) => setQuantity(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary w-100">Купи</button>
          </form>

          <p className="mt-4 text-muted small">Бележка за Бизнес клиенти: Отстъпката за количества на едро се отнася за поръчка на брой от размер и цвят.</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
