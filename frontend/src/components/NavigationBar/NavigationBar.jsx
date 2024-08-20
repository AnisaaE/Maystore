import { Link } from 'react-router-dom';
import "./style.css";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom p-3 bg-custom-purple">
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
                to="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Бизнес клиенти
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <div className="dropdown-column">
                  <li>
                    <Link
                      className="dropdown-item dropdown-header"
                      to="/Принтове"
                    >
                      Принтове
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action3">
                      "Тениска на Месеца"
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action4">
                      "Избери Любовта"
                    </Link>
                  </li>
                </div>
                <div className="dropdown-column">
                  <li>
                    <Link
                      className="dropdown-item dropdown-header"
                      to="/Принтове"
                    >
                      Принтове
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action3">
                      "Тениска на Месеца"
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action4">
                      "Избери Любовта"
                    </Link>
                  </li>
                </div>
                <div className="dropdown-column">
                  <li>
                    <Link
                      className="dropdown-item dropdown-header"
                      to="/Принтове"
                    >
                      Тениски
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action5">
                      Тениски без Принтове
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action6">
                      Макси Тениски
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action7">
                      Тениски с Подплънки
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action8">
                      Поло Тениски
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action9">
                      Промоции
                    </Link>
                  </li>
                </div>
                <div className="dropdown-column">
                  <li>
                    <Link
                      className="dropdown-item dropdown-header"
                      to="/Принтове"
                    >
                      Аксесоари
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action10">
                      Шапки
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action11">
                      Чанти
                    </Link>
                  </li>
                </div>
              </ul>
            </li>
            <li className="nav-item ms-2 dropdown">
              <Link
                className="nav-link dropdown-toggle dropdown-hover custom-dropdown"
                to="#"
                id="navbarScrollingDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Индивидуални клиенти
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown2"
              >
                <div className="dropdown-column">
                  <li>
                    <span className="dropdown-header">Prints</span>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action3">
                      "Тениска на Месеца"
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action4">
                      "Избери Любовта"
                    </Link>
                  </li>
                </div>
                <div className="dropdown-column">
                  <li>
                    <span className="dropdown-header">T-shirts</span>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action5">
                      Тениски без Принтове
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action6">
                      Макси Тениски
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action7">
                      Тениски с Подплънки
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action8">
                      Поло Тениски
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action9">
                      Промоции
                    </Link>
                  </li>
                </div>
                <div className="dropdown-column">
                  <li>
                    <span className="dropdown-header">Accessories</span>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action10">
                      Шапки
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#action11">
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
          </ul>
        </div>
        <i
          className="bi bi-basket-fill"
          style={{ fontSize: "1.5rem", color: "white" }}
        ></i>
      </div>
    </nav>
  );
}

export default NavigationBar;
