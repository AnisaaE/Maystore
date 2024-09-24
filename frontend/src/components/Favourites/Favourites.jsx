import { Link } from "react-router-dom";
import { useFavourites } from "../../context/favouritesContext"; 
import './Favourite.css'

const Favourites = () => {
  const { favourites, removeFromFavourites } = useFavourites(); // Вземи списъка с любими и функцията за премахване

  return (
    <div className="favourites pt-5" style={{ minHeight: "80vh" }} >
      <h2>Любими продукти</h2>
      <div className="row">
        {favourites.length > 0 ? (
          favourites.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3 my-3 d-flex align-items-center justify-content-center">
              <div className="card mb-3" style={{ width: "18rem" }}>
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                <img src={product.images[0]} alt={product.name} className="card-img-top" />
                </Link>
                <div className="card-body">
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                  <h5 className="card-title" style={{ color: "black" }}>{product.name}</h5>
                  <p className="card-text" style={{ color: "black" }}>Цена: от {product.price} лв.</p>
                  </Link>
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
