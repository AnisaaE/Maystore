import React from "react";
import "./Catalog.css"; 
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col">
    <Link to={`/product/${product.id}`} className="text-decoration-none">
      <div className="card h-100 product-card position-relative">
        <div className="img-container">
          <img
            src={product.images[0]}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title text-dark">{product.name}</h5>
          <div className="separator"></div>
          <p className="card-text text-primary">
            Цена: {product.price} лв.
          </p>
        </div>
        <button className="btn btn-sm favorite-icon position-absolute top-0 end-0 m-2">
          <i className="bi color-red bi-heart"></i>
        </button>
      </div>
    </Link>
  </div>
  
  );
}

export default ProductCard;
