import React from "react";
import "./Catalog.css"; 
import { Link } from "react-router-dom";
import { useFavourites } from "../../context/favouritesContext";

function ProductCard({ product }) {
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  const isFavourite = favourites.some(fav => fav.id === product.id);

  const handleAddToFavourites = (e) => {
    e.preventDefault(); // Предотвратява пренасочването на линка при натискане
    if (isFavourite) {
      removeFromFavourites(product.id); // Премахва продукта от любими, ако вече е в тях
    } else {
      addToFavourites(product); // Добавя продукта към списъка с любими
    }
  };

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
          <button
            className={`btn btn-sm favorite-icon position-absolute top-0 end-0 m-2 ${isFavourite ? 'active' : ''}`}
            onClick={handleAddToFavourites}
          >
           <i class="bi bi-suit-heart-fill"></i>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
