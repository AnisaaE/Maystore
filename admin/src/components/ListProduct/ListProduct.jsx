import React, { useEffect, useState } from "react";
import "./ListProduct.css";

const ListProduct = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:4000/allProducts");
        const data = await response.json();
        console.log(data);
        setItems(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchItems();
    console.log(items);
  }, []);

  const handleRemoveItem = async (id) => {
    const res = await fetch("http://localhost:4000/removeProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    setItems(items.filter((item) => item.id !== id));
    console.log(`Removing item with id ${id}`);
  };

  return (
    <div
      className="container p-4 bg-light rounded"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="text-center mb-4">Всички продукти</h2>
      {items.length === 0 ? (
        <p className="text-center text-muted fs-5">
          Все още няма добавени продукти
        </p>
      ) : (
        <ul className="list-group mb-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex align-items-center"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="img-thumbnail me-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />

              <div className="flex-grow-1 d-flex flex-row flex-wrap align-items-center">
                <h5 className="mb-1 me-3">{item.name}</h5>
                <p className="mb-1 text-muted me-3"> {item.price} лв. </p>
                <p className="mb-1 text-muted me-3">{item.category}</p>
                <p className="mb-1 text-muted me-3">{item.subcategory}</p>
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
      )}
    </div>
  );
};

export default ListProduct;
