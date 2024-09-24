import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { econtServiceBuilder } from "../../services/econtService";
import {
  validateEmail,
  validatePhoneNumber,
  validateName,
  validateCity,
  validateOffice,
} from "../../utils/validation";
import { useNavigate } from "react-router-dom";

const CheckoutComponent = ({ products, totalPrice, handleClearCart }) => {
  const navigate = useNavigate();
  const econtService = econtServiceBuilder();
  const { enqueueSnackbar } = useSnackbar();

  const [sender, setSender] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [offices, setOffices] = useState([]);
  const [searchOffice, setSearchOffice] = useState("");
  const [filteredOffices, setFilteredOffices] = useState(offices);
  const [showSuggestionOffices, setShowSuggestionOffices] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState({});

  const [isLoadingCities, setIsLoadingCities] = useState(true); // Loading state for cities
  const [isLoadingOffices, setIsLoadingOffices] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await econtService.getCities();
        setCities(data.cities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setIsLoadingCities(false);
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
      let filtered = offices.filter((office) =>
        office.name.toLowerCase().startsWith(searchOffice.toLowerCase())
      );
    
      // Накрая задаваме резултата в състоянието
      setFilteredOffices(filtered);
    }
  }, [searchOffice, offices]);
  const handleCitySelect = async (city) => {
    setSelectedCity(city);
    setSearchTerm(city.name);
    setShowSuggestions(false);
    setIsLoadingOffices(true);
    try {
      const data2 = await econtService.getOffices(city.id);

      const filteredOffices = data2.offices.filter(
        (office) => office.address.city.name === city.name
      );
      setOffices(filteredOffices);
    } catch (error) {
      console.error("Error fetching offices:", error);
    } finally {
      setIsLoadingOffices(false); 
    }
  };

  const handleOfficeSelect = (office) => {
    setSearchOffice(office.name);
    setSelectedOffice(office);
    setShowSuggestionOffices(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateName(sender.name)) {
      enqueueSnackbar("Името трябва да съдържа повече от 1 символ!", {
        variant: "error",
      });
      return;
    }

    if (!validateName(sender.surname)) {
      enqueueSnackbar("Фамилията трябва да съдържа повече от 1 символ!", {
        variant: "error",
      });
      return;
    }

    if (!validateEmail(sender.email)) {
      enqueueSnackbar("Моля, въведете валиден e-mail!", { variant: "error" });
      return;
    }

    if (!validatePhoneNumber(sender.phone)) {
      enqueueSnackbar(
        "Моля, въведете валиден телефонен номер (български стандарт)!",
        { variant: "error" }
      );
      return;
    }

    if (!validateCity(selectedCity, cities)) {
      enqueueSnackbar("Моля, изберете валиден град от списъка!", {
        variant: "error",
      });
      return;
    }

    if (!validateOffice(selectedOffice, offices)) {
      enqueueSnackbar("Моля, изберете валиден офис от списъка!", {
        variant: "error",
      });
      return;
    }

    const orderInfo = {
      name: `${sender.name} ${sender.surname}`,
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
      handleClearCart();
    } catch (error) {
      enqueueSnackbar("Грешка при изпращане на поръчката!" + error, {
        variant: "error",
      });
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
          <div className="col-12">
            <label htmlFor="name" className="form-label fw-semibold">
              Име :
            </label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Име"
              value={sender.name}
              onChange={(e) => setSender({ ...sender, name: e.target.value })}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="name" className="form-label fw-semibold">
              Фамилия:
            </label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Фамилия"
              value={sender.surname}
              onChange={(e) =>
                setSender({ ...sender, surname: e.target.value })
              }
              required
            />
          </div>

          <div className="col-12">
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
          <div className="col-12">
            <label htmlFor="city" className="form-label fw-semibold">
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

            {showSuggestions && (
              <>
                {isLoadingCities && <p>Loading cities...</p>}
                {!isLoadingCities && filteredCities.length > 0 && (
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
                        onMouseDown={(e) => e.preventDefault()} // Prevent blur on select
                      >
                        {city.name} ({city.postCode})
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>

          <div className="col-12">
            <div className="row flex-column mb-2">
  <label htmlFor="office" className="form-label fw-semibold mb-0">
    Офис на еконт:
  </label>
  <small className="text-muted">
    (Моля, не избирайте Еконтомат)
  </small></div>
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

  {showSuggestionOffices && (
    <>
      {isLoadingOffices ? (
        <p>Loading offices...</p>
      ) : (
        filteredOffices.length > 0 && (
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
                onMouseDown={(e) => e.preventDefault()} // Prevent blur on select
              >
                {office.name}
              </li>
            ))}
          </ul>
        )
      )}
    </>
  )}
</div>

        </div>

        <button
          type="submit"
          className="btn btn-success"
          style={{ width: "40%" }}
        >
          Завърши поръчката
        </button>
      </form>
    </div>
  );
};

export default CheckoutComponent;
