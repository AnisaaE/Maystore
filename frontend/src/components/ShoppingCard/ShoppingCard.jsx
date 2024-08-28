import { Link } from "react-router-dom";
import { useCart } from "../../context/cardContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="container my-5 p-4 bg-light rounded">
      <h2 className="text-center mb-4">Вашата количка</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-muted fs-5">Кошницата е празна.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-thumbnail me-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1 text-muted">{item.price} лв.</p>
                </div>
                <button
                  className="btn btn-danger btn-sm ms-auto"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Премахни
                </button>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-danger" onClick={handleClearCart}>
              Изчисти количката
            </button>
            <Link to="/checkout" className="btn btn-success">
              Към поръчката
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
