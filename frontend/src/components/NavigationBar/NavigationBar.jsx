import { Link } from "react-router-dom";
import "./style.css";
import { useCart } from "../../context/cardContext";

function NavigationBar() {
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
          <form className="d-flex me-4">
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
          </form>
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
                      <Link className="dropdown-item" to="/Дрехи/Тениски">
                        Тениски
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Дрехи/Поло%20тениски"
                      >
                        Поло тениски
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Дрехи/Суитчъри">
                        Суитчъри
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Дрехи/">
                        Спортни долници
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Дрехи/Спортен%20Екип"
                      >
                        Спортни екипи
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Дрехи/Якета">
                        Якета
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Дрехи/Панталони">
                        Панталони
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Дрехи/Светлоотразителни"
                      >
                        Светлоотразителни
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Дрехи/Престилки">
                        Престилки
                      </Link>
                    </li>
                  </div>
                  <div className="dropdown-column">
                  <li>
                      <span className="dropdown-header">Аксесоари</span>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Аксесоари/Шапки">
                        Шапки
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Аксесоари/Чанти">
                        Чанти
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Аксесоари/Баджове">
                        Баджове
                      </Link>
                    </li>
                  </div>
                  <div className="dropdown-column">
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
                  </div>
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
                  Подаръци
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown2"
                >
                  <div className="dropdown-column">
                    <li>
                      <Link className="dropdown-item" to="Подаръци/Чаши">
                        Чаши
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="Подаръци/Химикали">
                        Химикали
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="Подаръци/Ключодържатели"
                      >
                        Ключодържатели
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Подаръци/Тефтери">
                        Тефтери
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Подаръци/Печати">
                        Печати
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Подаръци/Чанти">
                        Чанти
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
                  Бизнес клиенти
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/cart" className="cart-icon">
            <i
              className="bi bi-cart3"
              style={{ fontSize: "1.5rem", color: "white" }}
            ></i>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </Link>
          {" "}
        </div>
      </nav>
      <div style={{ marginTop: "50px" }}></div>
    </div>
  );
}

export default NavigationBar;
