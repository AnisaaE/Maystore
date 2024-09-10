// Favourites.js
import React from "react";
import { useFavourites } from "../../context/favouritesContext"; 
import './Favourite.css'

const Favourites = () => {
  const { favourites, removeFromFavourites } = useFavourites(); // Вземи списъка с любими и функцията за премахване

  return (
    <div className="favourites pt-5">
      <h2>Любими продукти</h2>
      <div className="row">
        {favourites.length > 0 ? (
          favourites.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 my-3 mx-3">
              <div className="card mb-3" style={{ width: "18rem" }}>
                <img src={product.images[0]} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Цена: {product.price} лв.</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromFavourites(product.id)} // Премахване на продукт от списъка с любими
                  >
                    Премахни от любими
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Нямате добавени любими продукти.</p>
        )}
      </div>
    </div>
  );
};

export default Favourites;
