import React, { useState, useEffect } from "react";
import { econtServiceBuilder } from "../../services/econtService";

const CheckoutComponent = () => {
  const econtService = econtServiceBuilder();
  const [sender, setSender] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [countryCode, setCountryCode] = useState("BGR");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [deliveryCost, setDeliveryCost] = useState(0);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await econtService.getCities(); // Call getCities from the service
        setCities(data.cities); // Set the cities in state
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle the final checkout logic, including creating the shipment label
    console.log("Checkout data:", {
      sender,
      // receiver,
      countryCode,
      selectedCity,
    });
  };

  return (
    <div className="container my-5 ">
      <form
        onSubmit={handleSubmit}
        className="checkout-form bg-light p-4 rounded shadow row gap-3 justify-content-center"
      >
        <h2 className="text-center mb-4">Checkout</h2>

        {/* Sender Information */}
        <div className="form-group mb-4 col-md-6 row pe-3 justify-content-center">
          <div className="col-10">
            <label htmlFor="name" className="form-label fw-semibold">
              Име и фамилия:
            </label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Име и фамилия"
              value={sender.name}
              onChange={(e) => setSender({ ...sender, name: e.target.value })}
              required
            />
          </div>
          <div className="col-10">
            <label htmlFor="name" className="form-label fw-semibold">
              Тел.номер:
            </label>
            <input
              type="tel"
              className="form-control mb-2"
              placeholder="тел. номер"
              value={sender.phone}
              onChange={(e) => setSender({ ...sender, phone: e.target.value })}
              required
            />
          </div>
          <div className="col-md-10">
            <label htmlFor="name" className="form-label fw-semibold">
              e-mail:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="имейл адрес"
              value={sender.address}
              onChange={(e) =>
                setSender({ ...sender, address: e.target.value })
              }
              required
            />
          </div>
        </div>

        {/* Receiver Information
        <div className="form-group mb-4">
          <h3>Receiver Information</h3>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Receiver Name"
            value={receiver.name}
            onChange={(e) => setReceiver({ ...receiver, name: e.target.value })}
            required
          />
          <input
            type="tel"
            className="form-control mb-2"
            placeholder="Receiver Phone"
            value={receiver.phone}
            onChange={(e) => setReceiver({ ...receiver, phone: e.target.value })}
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Receiver Address"
            value={receiver.address}
            onChange={(e) => setReceiver({ ...receiver, address: e.target.value })}
            required
          />
        </div> */}

        {/* Country and City Selection */}
        <div className="form-group mb-4 col-md-6 ps-3 row">
          <select
            className="form-select mb-2"
            onChange={(e) => setCountryCode(e.target.value)}
            value={countryCode}
          >
            <option value="BGR">Bulgaria</option>
            <option value="GRE">Greece</option>
            <option value="LUX">Luxembourg</option>
          </select>
          <select
            onChange={(e) => setSelectedCity(e.target.value)}
            value={selectedCity}
            required
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name} ({city.postCode})
              </option>
            ))}
          </select>
          {/* <div className="col-md-10">
          <label htmlFor="name" className="form-label fw-semibold">
              Адрес на доставка:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="обл, гр, ул, кв, "
              value={sender.address}
              onChange={(e) =>
                setSender({ ...sender, address: e.target.value })
              }
              required
            />
          </div> */}
        </div>

        {/* Display Delivery Cost */}
        <div className="form-group mb-4">
          <h3>Delivery Cost</h3>
          <p className="alert alert-info">
            {deliveryCost ? `${deliveryCost} BGN` : "Calculating..."}
          </p>
        </div>

        <button type="submit" className="btn btn-success w-70">
          Complete Checkout
        </button>
      </form>
    </div>
  );
};

export default CheckoutComponent;
