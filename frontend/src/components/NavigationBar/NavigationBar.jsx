import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContex";
import "./style.css";
import { useCart } from "../../context/cardContext";

function NavigationBar() {
  const { user, onLogout , isAuth} = useContext(AuthContext);
  const { cartItems } = useCart();

  return (
    <div>
      <div class="free-shipping-banner d-flex justify-content-center bg-black text-light align-items-center">
        <span class="text">Безплатна доставка за поръчка над 150 лв.</span>
        <i class="bi bi-truck ms-2"></i>
      </div>
      <nav className="navbar navbar-expand-lg navbar-custom p-3 bg-custom-purple fixed-top">
        <div className="container-fluid montserrat">
          <Link className="navbar-brand" to="/">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Maystore Logo"
              className="img-fluid d-inline-block align-top logo"
            />
          </Link>
          {/* <form className="d-flex me-4">
            <input
              className="form-control rounded-start-pill"
              type="search"
              placeholder="Търсене"
              aria-label="Search"
            />
            <button
              className="btn search-icon ms-0 rounded-end-pill border border-white"
              type="submit"
            >
              <i className="bi bi-search search-icon"></i>
            </button>
          </form> */}
          <button
            className="navbar-toggler border border-white border-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle dropdown-hover custom-dropdown montserrat"
                  to="/clothes"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Облекло
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <div className="dropdown-column">
                  <li>
                      <span className="dropdown-header">Дрехи</span>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/clothing/Тениски">
                        Тениски
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/clothing/Поло%20тениски"
                      >
                        Поло тениски
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/clothing/Суитчъри">
                        Суитчъри
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/clothing/Спортен%20Екип"
                      >
                        Спортни екипи
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/clothing/Якета">
                        Якета
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/clothing/Панталони">
                        Панталони
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/clothing/Светлоотразителни"
                      >
                        Светлоотразителни
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/clothing/Престилки">
                        Престилки
                      </Link>
                    </li>
                  </div>
                  <div className="dropdown-column">
                  <li>
                      <span className="dropdown-header">Аксесоари</span>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/clothing/Шапки">
                        Шапки
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/clothing/Чанти">
                        Чанти
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/clothing/Баджове">
                        Баджове
                      </Link>
                    </li>
                  </div>
                  {/* <div className="dropdown-column">
                  <li>
                      <span className="dropdown-header">Пол</span>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/genders/male">
                        Мъже
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/genders/female">
                        Жени
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/genders/children">
                        Деца
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/genders/unisex">
                        Унисекс
                      </Link>
                    </li>
                  </div> */}
                </ul>
              </li>

              <li className="nav-item ms-2 dropdown">
                <Link
                  className="nav-link dropdown-toggle dropdown-hover custom-dropdown"
                  to="/gifts"
                  id="navbarScrollingDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Фирмени артикули
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown2"
                >
                  <div className="dropdown-column">
                    <li>
                      <Link className="dropdown-item" to="/gifts/Чаши">
                        Чаши
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/gifts/Химикали">
                        Химикали
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/gifts/Ключодържатели"
                      >
                        Ключодържатели
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/gifts/Тефтери">
                        Тефтери
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/gifts/Печати">
                        Печати
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/gifts/Етикети">
                        Етикети
                      </Link>
                    </li>
                  </div>
                </ul>
              </li>
              <li>
                <Link className="nav-link ms-2" to="/stickers">
                  Стикери
                </Link>
              </li>
              <li>
                <Link className="nav-link ms-2" to="/stickers">
                  Промо пакети
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/favorites" className="cart-icon">
          <i className="bi bi-suit-heart-fill" style={{ fontSize: "1.5rem", color: "white" }}></i>
          </Link>
          <Link to="/cart" className="cart-icon">
            <i
              className="bi bi-cart3"
              style={{ fontSize: "1.5rem", color: "white" }}
            ></i>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </Link>
          {!isAuth? <Link to="/register" className="cart-icon">
          <i class="bi bi-person-circle" style={{ fontSize: "1.5rem", color: "white" }}></i>
          </Link>: <button onClick={onLogout} className="cart-icon btn">
    <i className="bi bi-box-arrow-right" style={{ fontSize: "1.5rem", color: "white" }}></i>
  </button>} 
          {" "}
        </div>
      </nav>
      <div style={{ marginTop: "50px" }}></div>
    </div>
  );
}

export default NavigationBar;
