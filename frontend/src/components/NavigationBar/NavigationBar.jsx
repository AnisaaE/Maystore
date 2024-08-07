import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-custom p-3 bg-custom-purple ">
      <Container fluid className="montserrat">
        <Navbar.Brand href="/">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Maystore Logo"
            className="img-fluid d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown
              title="Бизнес клиенти"
              id="navbarScrollingDropdown"
              className="dropdown-hover custom-dropdown montserrat"
            >
              <div className="dropdown-column">
                <NavDropdown.Header href="/Принтове">
                  Принтове
                </NavDropdown.Header>
                <NavDropdown.Item href="#action3">
                  "Тениска на Месеца"
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  "Избери Любовта"
                </NavDropdown.Item>
              </div>
              <div className="dropdown-column">
                <NavDropdown.Header>T-shirts</NavDropdown.Header>
                <NavDropdown.Item href="#action5">
                  Тениски без Принтове
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Макси Тениски
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Тениски с Подплънки
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  Поло Тениски
                </NavDropdown.Item>
                <NavDropdown.Item href="#action9">Промоции</NavDropdown.Item>
              </div>
              <div className="dropdown-column">
                <NavDropdown.Header>Accessories</NavDropdown.Header>
                <NavDropdown.Item href="#action10">Шапки</NavDropdown.Item>
                <NavDropdown.Item href="#action11">Чанти</NavDropdown.Item>
              </div>
            </NavDropdown>

            <NavDropdown
              title="Индивидуални клиенти"
              id="navbarScrollingDropdown"
              className="custom-dropdown dropdown-hover "
            >
              <div className="dropdown-column">
                <NavDropdown.Header>Prints</NavDropdown.Header>
                <NavDropdown.Item href="#action3">
                  "Тениска на Месеца"
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  "Избери Любовта"
                </NavDropdown.Item>
              </div>
              <div className="dropdown-column">
                <NavDropdown.Header>T-shirts</NavDropdown.Header>
                <NavDropdown.Item href="#action5">
                  Тениски без Принтове
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Макси Тениски
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Тениски с Подплънки
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  Поло Тениски
                </NavDropdown.Item>
                <NavDropdown.Item href="#action9">Промоции</NavDropdown.Item>
              </div>
              <div className="dropdown-column">
                <NavDropdown.Header>Accessories</NavDropdown.Header>
                <NavDropdown.Item href="#action10">Шапки</NavDropdown.Item>
                <NavDropdown.Item href="#action11">Чанти</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>

          <Form className="d-flex me-4 ">
            <Form.Control
              type="search"
              placeholder="Търсене"
              aria-label="Search"
              className="rounded-start-pill"
            />
            <Button
              variant="outline-light"
              className="search-icon ms-0 rounded-end-pill"
            >
              <i class="bi bi-search"></i>
            </Button>
          </Form>
          <i
            className="bi bi-basket-fill"
            style={{ fontSize: "1.5rem", color: "white" }}
          ></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
