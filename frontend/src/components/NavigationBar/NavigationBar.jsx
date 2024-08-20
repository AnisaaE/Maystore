import "./style.css";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom p-3 bg-custom-purple">
      <div className="container-fluid montserrat">
        <a className="navbar-brand" href="/">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Maystore Logo"
            className="img-fluid d-inline-block align-top logo"
          />
        </a>
        <form className="d-flex me-4">
          <input
            className="form-control rounded-start-pill"
            type="search"
            placeholder="Търсене"
            aria-label="Search"
          />
          <button className="btn search-icon ms-0 rounded-end-pill border border-white" type="submit">
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
              <a
                className="nav-link dropdown-toggle dropdown-hover custom-dropdown montserrat"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Бизнес клиенти
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              
              <div className="dropdown-column">
                  <li>
                    <a className="dropdown-item dropdown-header" href="/Принтове">
                      Принтове
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action3">
                      "Тениска на Месеца"
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action4">
                      "Избери Любовта"
                    </a>
                  </li>
                </div>
                <div className="dropdown-column">
                  <li>
                    <a className="dropdown-item dropdown-header" href="/Принтове">
                      Принтове
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action3">
                      "Тениска на Месеца"
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action4">
                      "Избери Любовта"
                    </a>
                  </li>
                </div>
                <div className="dropdown-column">
                  <li>
                    <a className="dropdown-item dropdown-header" href="/Принтове">
                      Тениски
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action5">
                      Тениски без Принтове
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action6">
                      Макси Тениски
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action7">
                      Тениски с Подплънки
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action8">
                      Поло Тениски
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action9">
                      Промоции
                    </a>
                  </li>
                </div>
                <div className="dropdown-column">
                  <li>
                    <a className="dropdown-item dropdown-header" href="/Принтове">
                      Аксесоари
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action10">
                      Шапки
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action11">
                      Чанти
                    </a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropdown-hover custom-dropdown"
                href="#"
                id="navbarScrollingDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Индивидуални клиенти
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown2">
                <div className="dropdown-column">
                  <li>
                    <span className="dropdown-header">Prints</span>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action3">
                      "Тениска на Месеца"
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action4">
                      "Избери Любовта"
                    </a>
                  </li>
                </div>
                <div className="dropdown-column">
                  <li>
                    <span className="dropdown-header">T-shirts</span>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action5">
                      Тениски без Принтове
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action6">
                      Макси Тениски
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action7">
                      Тениски с Подплънки
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action8">
                      Поло Тениски
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action9">
                      Промоции
                    </a>
                  </li>
                </div>
                <div className="dropdown-column">
                  <li>
                    <span className="dropdown-header">Accessories</span>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action10">
                      Шапки
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action11">
                      Чанти
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
        <i className="bi bi-basket-fill" style={{ fontSize: "1.5rem", color: "white" }}></i>
      </div>
    </nav>
  );
}

export default NavigationBar;
