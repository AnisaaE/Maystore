import { Link } from "react-router-dom";
import "./style.css";
import WhyChooseUs from "./WhyUS/WhyUs";
import Category from "./Category/Category";

export function Intro() {
  return (
    <div>
      <section id="intro" className="custom-height">
        <div className="container-fluid bg-image pe-0 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-6 align-items-center text-center text-md-start ms-3">
              <div className="wrapper transparent-background">
                <h1>
                  <div className="display-2">
                    Реклама за вашия бизнес или събитие
                  </div>
                  <div className="display-6">
                    Брандирани тениски, шапки, джъмпери, якета и други.
                  </div>
                </h1>
                <a href="https://example.com" className="custom-link">
                  Виж повече
                </a>
              </div>
            </div>
            <div className="col row h-100 mt-2">
              <div className="col-8 h-100 mt-2 image-container">
                <img
                  src={require("../../assets/images/tshirt-intro.png")}
                  alt="thirt-intro"
                  className="responsive-image"
                />
                <img
                  src={require("../../assets/images/overlay1.png")}
                  alt="overlay1"
                  className="overlay-image overlay1"
                />
                <img
                  src={require("../../assets/images/overlay2.png")}
                  alt="overlay2"
                  className="overlay-image overlay2"
                />
                <img
                  src={require("../../assets/images/overlay3.jpeg")}
                  alt="overlay3"
                  className="overlay-image overlay3"
                />
                <div class="overlay-text overlay4">Най-добрия кум</div>
                <img
                  src={require("../../assets/images/overlay5.png")}
                  alt="overlay5"
                  className="overlay-image overlay5"
                />
                <div class="overlay-text overlay6">
                  Рекламно студио Gazdzhalov
                </div>
              </div>
              <div className="col flexClass h-100 mt-2 ">
                <div className="circleDiv">
                  <Link to="/path6">
                    <img
                      src={require("../../assets/images/tshirt-intro.png")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
                <div className="circleDiv">
                  <Link to="/path6">
                    <img
                      src={require("../../assets/images/tshirt-intro.png")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
                <div className="circleDiv">
                  <Link to="/path6">
                    <img
                      src={require("../../assets/images/tshirt-intro.png")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
                <div className="circleDiv">
                  <Link to="/path6">
                    <img
                      src={require("../../assets/images/tshirt-intro.png")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
                <div className="circleDiv">
                  <Link to="/path6">
                    <img
                      src={require("../../assets/images/tshirt-intro.png")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
                <div className="circleDiv">
                  <Link to="/path6">
                    <img
                      src={require("../../assets/images/tshirt-intro.png")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Category/>
      <WhyChooseUs />
    </div>
  );
}
