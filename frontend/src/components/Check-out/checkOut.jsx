import React, { useState, useEffect } from "react";
import { econtServiceBuilder } from "../../services/econtService";

const CheckoutComponent = () => {
  const econtService = econtServiceBuilder();
  const [sender, setSender] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(""); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredCities, setFilteredCities] = useState(cities); 
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [offices, setOffices]= useState("");
  const [searchOffice, setSearchOffice]= useState('')
  const [filteredOffices, setFilteredOffices] = useState(offices); 
const [showSuggestionOffices, setShowSuggestionOffices]= useState(false)

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

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCities(cities);
    } else {
      setFilteredCities(
        cities.filter((city) =>
          city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, cities]);

  useEffect(() => {
    if (searchOffice === "") {
      setFilteredOffices(offices);
    } else {
      setFilteredOffices(
        offices.filter((office) =>
          office.name.toLowerCase().startsWith(searchOffice.toLowerCase())
        )
      );
    }
  }, [searchOffice, offices]);
  const handleCitySelect = async (cityName, id) => {
    setSearchTerm(cityName);
    setShowSuggestions(false);

    try {
      const data2 = await econtService.getOffices(id);
      setOffices(data2.offices);
    } catch (error) {
      console.error("Error fetching offices:", error);
    }


  };
  
  const handleOfficeSelect = (officeName) => {
    setSearchOffice(officeName);
    setShowSuggestionOffices(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle the final checkout logic, including creating the shipment label
    console.log("Checkout data:", {
      sender,
      // receiver,

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

        <div className="form-group mb-4  col-md-6 row">
          <div className="col-12">
            <label htmlFor="name" className="form-label fw-semibold">
              Град:
            </label>
            <input
              type="text"
              value={searchTerm}
               className="form-control mb-2"
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Въведи град"
              required
            />

            {showSuggestions && filteredCities.length > 0 && (
              <ul
                style={{
                  border: "1px solid #ccc",
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {filteredCities.map((city) => (
                  <li
                    key={city.id}
                    onClick={() => handleCitySelect(city.name, city.id)}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      backgroundColor: "#fff",
                    }}
                    onMouseDown={(e) => e.preventDefault()} // За предотвратяване на blur при избор на град
                  >
                    {city.name} ({city.postCode})
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="name" className="form-label fw-semibold">
              Офис на еконт:
            </label>
            <input
              type="text"
              value={searchOffice}
               className="form-control mb-2"
              onChange={(e) => {
                setSearchOffice(e.target.value);
                setShowSuggestionOffices(true);
              }}
              onFocus={() => setShowSuggestionOffices(true)}
              placeholder="Въведи офис"
              required
            />

            {showSuggestionOffices && filteredOffices.length > 0 && (
              <ul
                style={{
                  border: "1px solid #ccc",
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {filteredOffices.map((office) => (
                  <li
                    key={office.id}
                    onClick={() => handleOfficeSelect(office.name)}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      backgroundColor: "#fff",
                    }}
                    onMouseDown={(e) => e.preventDefault()} 
                  >
                    {office.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
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
