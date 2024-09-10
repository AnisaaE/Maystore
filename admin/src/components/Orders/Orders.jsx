import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [moreInfo, setMoreinfo] = useState({
    weight: 0,
    description: '',
  });
const API_URL = 'http://localhost:4000';
 
useEffect(() => {
    fetch(`${API_URL}/orders`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching orders');
        }
        return response.json();
      })
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
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
          setShowDetails(true); 
        })
        .catch((error) =>
          console.error("Error fetching order details:", error)
        );
    }
  };

  const handleCreateLabel = (orderId) => {
    fetch(`${API_URL}/orders/${orderId}/createLabel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moreInfo),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error creating label');
        }
        return response.json();
      })
      .then(() => {
        alert('Label created successfully');
      })
      .catch(error => console.error('Error creating label:', error));
  };
const handleMoreInfo = (e) => {
  e.preventDefault();
  setMoreinfo({
    ...moreInfo,
    [e.target.name]: e.target.value
  });
}
  const handleDeleteLabel = (orderId) => {
    fetch(`${API_URL}/orders/${orderId}/deleteLabel`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error deleting label');
        }
        return response.json();
      })
      .then(() => {
        alert('Label deleted successfully');
      })
      .catch(error => console.error('Error deleting label:', error));
  };

  const handleDeleteOrder = (orderId) => {
    fetch(`${API_URL}/orders/${orderId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error deleting order');
        }
        return response.json();
      })
      .then(() => {
        alert('Order deleted successfully');
        setOrders(orders.filter(order => order._id !== orderId));
        setSelectedOrder(null);
      })
      .catch(error => console.error('Error deleting order:', error));
  };

  const downloadImage = (imageBuffer, fileName) => {
    const url = window.URL.createObjectURL(new Blob([imageBuffer]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div className="container my-5">
    <h2 className="text-center mb-4">Orders List</h2>

    <div className="row">
      <div className="col-md-4">
        <div className="list-group">
          {orders.map(order => (
            <button
              key={order._id}
              className="list-group-item list-group-item-action"
              onClick={() => handleOrderClick(order._id)}
            >
              <h5>Order {order._id}</h5>
              <p>Total Price: {order.totalPrice.toFixed(2)} USD</p>
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
            <p><strong>Status:</strong> {selectedOrder.status}</p>
              <p><strong>Name:</strong> {selectedOrder.name}</p>
              <p><strong>Phone:</strong> {selectedOrder.phone}</p>
              <p><strong>Email:</strong> {selectedOrder.email}</p>
              <p><strong>Total Price:</strong> {selectedOrder.totalPrice.toFixed(2)} лв</p>
              <div className="col-md-6">
              <label htmlFor="name" className="form-label fw-semibold">
                Weight
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="weight"
                name="weight"
                value={moreInfo.weight}
                onChange={handleMoreInfo}
                placeholder="Тегло"
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
                {selectedOrder.products.map(product => (
                  <li key={product._id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <p className="mb-1">{product.name}</p>
                      <p className="text-muted mb-1">{product.price.toFixed(2)} лв</p>
                      <p className="text-muted mb-1">Quantity: {product.quantity}</p>
                      <p className="text-muted mb-1">Color: {product.color}</p>
                      <p className="text-muted mb-1">Size: {product.size}</p>
                      <p className="text-muted mb-1">Print Front: {product.printFront}</p>
                      <p className="text-muted mb-1">Print Back: {product.printBack}</p>
                    </div>
                    <div>
                      {product.uploadFront && (
                        <button
                          className="btn btn-sm btn-outline-secondary me-2"
                          onClick={() => downloadImage(product.uploadFront, 'uploadFront.jpg')}
                        >
                          Download Front
                        </button>
                      )}
                      {product.uploadBack && (
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => downloadImage(product.uploadBack, 'uploadBack.jpg')}
                        >
                          Download Back
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-success"
                  onClick={() => handleCreateLabel(selectedOrder._id)}
                >
                  Create Label
                </button>
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
