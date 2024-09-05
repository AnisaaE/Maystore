// src/components/AddProduct.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    subcategory: '',
  });
  const [images, setImages] = useState(['']); // State to hold image file paths
  const subcategories = {
    Облекло: [
      'Тениски',
      'Поло тениски',
      'Суитчъри',
      'Спортни екипи',
      'Якета',
      'Панталони',
      'Светлоотразителни',
      'Престилки',
      'Шапки',
      'Чанти',
      'Баджове',
    ],
    Подаръци: ['Химикали', 'Чаши', 'Ключодържатели', 'Чанти', 'Тефтери'],
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset subcategory if category changes
    if (name === 'category') {
      setFormData({ ...formData, category: value, subcategory: '' });
    }
  };

  const handleFileChange = (index, event) => {
    const files = [...images];
    files[index] = event.target.files[0];
    setImages(files);
  };

  const handleAddImage = () => {
    setImages([...images, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('subcategory', formData.subcategory);
  
    images.forEach((image) => {
      if (image) {
        formDataToSend.append('images', image); // Уверете се, че 'images' е правилният ключ
      }
    });
  
    try {
      const response = await fetch('http://localhost:4000/add', {
        method: 'POST',
        body: formDataToSend,
        // Headers за `multipart/form-data` са автоматично настроени от браузъра при използване на FormData
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      alert('Product added successfully!');
      console.log(data);
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product.');
    }
  
    setFormData({
      name: '',
      price: '',
      category: '',
      subcategory: '',
    });
    setImages(['']);
  
    // Redirect to home page
    navigate('/products');
  };
  

  return (
    <div className="container mt-5 m-5">
      <div className="card p-4 shadow-sm rounded-3 border-0 bg-light pt-3">
        <h3 className="mb-4 text-center text-dark">Add new product</h3>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Product Name */}
            <div className="col-md-6">
              <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Въведи име на продукта"
                required
              />
            </div>
            {/* Price */}
            <div className="col-md-6">
              <label htmlFor="price" className="form-label fw-semibold">
                Price
              </label>
              <input
                type="number"
                className="form-control form-control-sm"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Въведи цена"
                required
                min="0"
                step="0.01"
              />
            </div>
            {/* Category */}
            <div className="col-md-6">
              <label htmlFor="category" className="form-label fw-semibold">
                Category
              </label>
              <select
                className="form-select form-select-sm"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Избери категория</option>
                <option value="Облекло">Облекло</option>
                <option value="Подаръци">Подаръци</option>
              </select>
            </div>
            {/* Subcategory */}
            {formData.category && (
              <div className="col-md-6">
                <label htmlFor="subcategory" className="form-label fw-semibold">
                  Subcategory
                </label>
                <select
                  className="form-select form-select-sm"
                  id="subcategory"
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  required
                >
                  <option value="">Избери подкатегория</option>
                  {subcategories[formData.category].map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {/* Images */}
            <div className="col-12">
              <label className="form-label fw-semibold">Add photos</label>
              {images.map((_, index) => (
                <div key={index} className="input-group mb-2">
                  <input
                    type="file"
                    className="form-control form-control-sm"
                    onChange={(e) => handleFileChange(index, e)}
                  />
                
                  {index === images.length - 1 && (
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm ms-2 fw-bold"
                      onClick={handleAddImage}
                    >
                      +
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
    
          <div className="d-flex gap-2 mt-4 align-items-center justify-content-center">
            <button
              type="submit"
              className="btn btn-warning btn-sm p-2 ps-4 pe-4  "
              style={{ border: 'none' }}
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
