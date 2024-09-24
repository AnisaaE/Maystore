import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [moreInfo, setMoreinfo] = useState({
    weight: 0,
    description: "",
  });

  const API_URL = "http://localhost:4000";

  useEffect(() => {
    fetch(`${API_URL}/orders`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching orders");
        }
        return response.json();
      })
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const handleOrderClick = (orderId) => {
    if (selectedOrder && selectedOrder._id === orderId) {
      setShowDetails(!showDetails);
    } else {
      fetch(`${API_URL}/orders/${orderId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error fetching order details");
          }
          return response.json();
        })
        .then((data) => {
          setSelectedOrder(data);
          setMoreinfo({
            weight: data.weight,
            description: data.description,
          })
          setShowDetails(true);
        })
        .catch((error) =>
          console.error("Error fetching order details:", error)
        );
    }
  };

  const handleCreateLabel = async (orderId) => {
    await fetch(`${API_URL}/orders/${orderId}/createLabel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(moreInfo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Wrong response status from server");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.label && data.label.shipmentNumber) {
          alert("Label created successfully");
          setShowDetails(false);
        } else {
          throw new Error(
            data.innerErrors[0].message ||
              "Label creation failed: No shipment number received"
          );
        }
      })
      .catch((error) => alert("Error creating label:" + error));
  };
  const handleMoreInfo = (e) => {
    e.preventDefault();
    setMoreinfo({
      ...moreInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleDeleteLabel = (orderId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete the label?"
    );
    if (confirmDelete) {
      fetch(`${API_URL}/orders/${orderId}/deleteLabel`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error deleting label");
          }
          return response.json();
        })
        .then(() => {
          alert("Label deleted successfully");
          setRefresh(true);
        })
        .catch((error) => console.error("Error deleting label:", error));
    }
  };

  const handleDeleteOrder = (orderId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (confirmDelete) {
      fetch(`${API_URL}/orders/${orderId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error deleting order");
          }
          return response.json();
        })
        .then(() => {
          alert("Order deleted successfully");
          setOrders(orders.filter((order) => order._id !== orderId));
          setSelectedOrder(null);
          setShowDetails(false);
        })
        .catch((error) => console.error("Error deleting order:", error));
    }
  };

  const downloadImage = (base64Data, fileName) => {
    // Извличане на mime типа от base64 кода
    const mimeType = base64Data.match(/^data:(image\/[a-zA-Z]+);base64,/)[1];
  
    // Конвертиране на base64 в Blob
    const byteCharacters = atob(base64Data.split(',')[1]);
    const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });
  
    // Генериране на линк за сваляне
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Orders List</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="list-group">
            {orders.map((order) => (
              <button
                key={order._id}
                className="list-group-item list-group-item-action"
                onClick={() => handleOrderClick(order._id)}
              >
                <h5>Order {order._id}</h5>
                <p>Total Price: {order.totalPrice.toFixed(2)} BGN</p>
              </button>
            ))}
          </div>
        </div>

        {showDetails && (
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h4>Order Details</h4>
              </div>
              <div className="card-body">
                <p>
                  <strong>Status:</strong> {selectedOrder.status}
                </p>
                <p>
                  <strong>Name:</strong> {selectedOrder.name}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedOrder.phone}
                </p>
                <p>
                  <strong>Email:</strong> {selectedOrder.email}
                </p>
                <p>
                  <strong>Total Price:</strong>{" "}
                  {selectedOrder.totalPrice.toFixed(2)} лв
                </p>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Weight
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="weight"
                    name="weight"
                    value={moreInfo.weight}
                    onChange={handleMoreInfo}
                    placeholder="Тегло"
                   // readOnly={selectedOrder.weight !== 0}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Description:
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="description"
                    name="description"
                    value={moreInfo.description}
                    onChange={handleMoreInfo}
                    placeholder="Description"
                    required
                  />
                </div>
                <h5 className="mt-4">Products</h5>
                <ul className="list-group mb-3">
                  {selectedOrder.products.map((product) => (
                    <li
                      key={product._id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        {product.name === "Стикер" ? (
                          <>
                            <p className="mb-1">Name: {product.name}</p>
                            <p className="text-muted mb-1">
                              Text: {product.text}
                            </p>
                            <p className="text-muted mb-1">
                              Font: {product.font}
                            </p>
                            <p className="text-muted mb-1">
                              Color:{" "}
                              <span
                                style={{
                                  display: "inline-block",
                                  width: "20px",
                                  height: "20px",
                                  backgroundColor: product.color,
                                }}
                              ></span>{" "}
                              {product.color}
                            </p>
                            <p className="text-muted mb-1">
                              Height: {product.height} cm
                            </p>
                            <p className="text-muted mb-1">
                              Width: {product.width} cm
                            </p>
                            <p className="text-muted mb-1">
                              Quantity: {product.quantity}
                            </p>
                            <p className="text-muted mb-1">
                              Price: {product.price.toFixed(2)} лв
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="d-flex flex-row gap-3">
                              {product.image && (
                                <img
                                  src={product.image}
                                  alt="Product"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover",
                                  }}
                                />
                              )}
                              <p className="mb-1">{product.name}</p>
                            </div>
                            <p className="text-muted mb-1">
                              {product.price.toFixed(2)} лв
                            </p>
                            <p className="text-muted mb-1">
                              Quantity: {product.quantity}
                            </p>
                            <p className="text-muted mb-1">
                              Color:{" "}
                              <span
                                style={{
                                  display: "inline-block",
                                  width: "20px",
                                  height: "20px",
                                  backgroundColor: product.color,
                                }}
                              ></span>{" "}
                              {product.color}
                            </p>
                            <p className="text-muted mb-1">
                              Size: {product.size}
                            </p>
                            <p className="text-muted mb-1">
                              Print Front: {product.printFront}
                            </p>
                            <p className="text-muted mb-1">
                              Print Back: {product.printBack}
                            </p>
                          </>
                        )}
                      </div>
                      <div>
                        {product.uploadFront && (
                          <button
                            className="btn btn-sm btn-outline-secondary me-2"
                            onClick={() =>
                              downloadImage(
                                product.uploadFront,
                                `uploadFront_${product._id}.jpg`
                              )
                            }
                          >
                            Download Front
                          </button>
                        )}
                        {product.uploadBack && (
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() =>
                              downloadImage(
                                product.uploadBack,
                                `uploadBack_${product._id}.jpg`
                              )
                            }
                          >
                            Download Back
                          </button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="d-flex gap-2">
                  {selectedOrder.status === "Pending" ? (
                    <>
                      <button
                        className="btn btn-success"
                        onClick={() => handleCreateLabel(selectedOrder._id)}
                      >
                        Create Label
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteOrder(selectedOrder._id)}
                      >
                        Delete Order
                      </button>
                    </>
                  ) : selectedOrder.status === "Shipped" ? (
                    <>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleDeleteLabel(selectedOrder._id)}
                      >
                        Delete Label
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteOrder(selectedOrder._id)}
                      >
                        Delete Order
                      </button>
                      <Link to={selectedOrder.pdfUrl}> Download label</Link>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
