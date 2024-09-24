import { Link } from "react-router-dom";
import { useCart } from "../../context/cardContext";
import { useEffect, useState } from "react";
import CheckoutComponent from "../Check-out/checkOut";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;

    cartItems.forEach((item) => {
      const basePrice = item.price * item.quantity;

      // Calculate extra price for front print
      const frontPrintPrice = item.frontPrint
        ? parseFloat(item.frontPrint.price || 0)
        : 0;

      // Calculate extra price for back print
      const backPrintPrice = item.backPrint
        ? parseFloat(item.backPrint.price || 0)
        : 0;

      // Total for this item
      total += basePrice + frontPrintPrice + backPrintPrice;
    });

    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const handleRemoveItem = (uniqueKey) => {
    removeFromCart(uniqueKey);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
    <div
      className="container my-5 p-4 bg-light rounded"
      
    >
      <h2 className="text-center mb-4 ">Вашата количка</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-muted fs-5" style={{ minHeight: "60vh" }}>Кошницата е празна.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item, index) => (
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

                <div className="flex-grow-1 d-flex flex-row flex-wrap align-items-center">
                  <h5 className="mb-1 me-3">{item.name}</h5>
                  <p className="mb-1 text-muted me-3">Цена: {item.price} лв.</p>
                  <div className="d-flex align-items-center me-3">
                    <span className="me-1">Цвят:</span>
                    <span
                      style={{
                        backgroundColor: item.color,
                        width: "20px",
                        height: "20px",
                        display: "inline-block",
                        borderRadius: "50%",
                        border: "1px solid #ccc",
                      }}
                      title={item.color} // Optional: shows the hex code on hover
                    ></span>
                  </div>
                  <p className="mb-1 text-muted me-3">Брой: {item.quantity}</p>

                  {/* Display print details if available */}
                  {item.frontPrint && (
                    <p className="mb-1 text-muted me-3">
                      Принт отпред: {item.frontPrint.label}
                    </p>
                  )}
                  {item.backPrint && (
                    <p className="mb-1 text-muted">
                      Принт отзад: {item.backPrint.label}
                    </p>
                  )}
                </div>

                <button
                  className="btn btn-danger btn-sm ms-auto"
                  onClick={() => handleRemoveItem(item.uniqueKey)}
                >
                  Премахни
                </button>
              </li>
            ))}
          </ul>
          <div className="d-flex flex-column justify-content-center align-items-end">
          <h4 className="mb-1 text-end">
            Крайна сума: {totalPrice.toFixed(2)} лв.
          </h4>
          <p style={{ paddingRight: "9em" }}>*Без доставка</p>
          </div>
          <div className="d-flex justify-content-between align-items-baseline">
            <button
              className="btn btn-outline-danger"
              onClick={handleClearCart}
            >
              Изчисти количката
            </button>
          </div>
          {/* Display the total price below the cart items */}
        </>
      )}
    </div>
    {cartItems.length >0 ?<CheckoutComponent products={cartItems} totalPrice={totalPrice} handleClearCart={handleClearCart}/>: ""}
    </>
  );
};

export default ShoppingCart;
