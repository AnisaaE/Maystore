import React, { useState, useEffect } from "react";
import { econtServiceBuilder } from "../../services/econtService";
import { useNavigate } from 'react-router-dom';

const CheckoutComponent = ({ products, totalPrice }) => {
  const navigate = useNavigate();
  const econtService = econtServiceBuilder();
  const [sender, setSender] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [offices, setOffices] = useState("");
  const [searchOffice, setSearchOffice] = useState("");
  const [filteredOffices, setFilteredOffices] = useState(offices);
  const [showSuggestionOffices, setShowSuggestionOffices] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState({});

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
  const handleCitySelect = async (city) => {
    setSelectedCity(city);
    setSearchTerm(city.name);
    setShowSuggestions(false);

    try {
      const data2 = await econtService.getOffices(city.id);
      // Филтрираме офисите, като проверяваме дали city.name в адреса съвпада с избрания град
      const filteredOffices = data2.offices.filter(
        office => office.address.city.name === city.name
      );
      setOffices(filteredOffices);
    } catch (error) {
      console.error("Error fetching offices:", error);
    }
  };

  const handleOfficeSelect = (office) => {
    setSearchOffice(office.name);
    setSelectedOffice(office);
    setShowSuggestionOffices(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderInfo = {
      name: sender.name,
      phone: sender.phone,
      email: sender.email,
      office: {
        id: selectedOffice.id,
        code: selectedOffice.code,
        city: {
          country: {
            code3: selectedOffice.address.city.country.code3,
          },
          name: selectedOffice.address.city.name,
          postCode: selectedOffice.address.city.postCode,
        },
        fullAddress: selectedOffice.address.fullAddress,
        quarter: selectedOffice.address.quarter,
        name: selectedOffice.name,
        street: selectedOffice.address.street,
      },
      products,
      totalPrice,
    };
    console.log(orderInfo);
    try {
      await econtService.sendOrder(orderInfo);
 navigate("/acceptedOrder");
    } catch (error) {
      alert("Error fetching:" +{error});
    }
   
  };

  return (
    <div className="container my-5">
      <form
        onSubmit={handleSubmit}
        className="checkout-form bg-light p-4 rounded shadow row gap-3 justify-content-center"
      >
        <h2 className="text-center mb-4">Информация за доставка</h2>

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
              placeholder="e-mail"
              value={sender.email}
              onChange={(e) => setSender({ ...sender, email: e.target.value })}
              required
            />
          </div>
        </div>

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
                    onClick={() => handleCitySelect(city)}
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
                    onClick={() => handleOfficeSelect(office)}
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

        <button
          type="submit"
          className="btn btn-success"
          style={{ width: "35%" }}
        >
          Завърши поръчката
        </button>
      </form>
    </div>
  );
};

export default CheckoutComponent;
