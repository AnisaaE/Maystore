import { Link } from "react-router-dom";
import "./style.css";
import WhyChooseUs from "./WhyUS/WhyUs";
import Category from "./Category/Category";
import { useState } from "react";

export function Intro() {
  const [showText, setShowText] = useState(true); 

  const toggleContent = () => {
    setShowText(!showText); 
  };

  return (
    <div>
      <section id="intro" className="custom-height">
        <div className="container-fluid bg-image pe-0 h-100">
          <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6 row flex-row align-items-center transparent-background text-center text-md-start ms-1">
      {/* Тази част ще се сменя според състоянието */}
      <div className=" text-center text-md-start col-11">
        {showText ? (
          <h1>
            <div className="display-2 pb-2 ">
              Реклама за вашия бизнес или събитие
            </div>
            <div className="display-6 ">
              <small>Подсилете екипния дух, оставете трайно впечатление на клиентите и партньорите си</small>
            </div>
            <Link to="/all" className="custom-link">
              Виж повече
            </Link>
          </h1>
        ) : (
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder"
            className="img-fluid"
          />
        )}
      </div>

      {/* Бутонът със стрелката */}
      <div className="col-1">
        <button onClick={toggleContent} className="btn btn-black">
          <i className="bi bi-caret-right-fill" style={{ fontSize: '24px' }}></i>
        </button>
      </div>
    </div>
            <div className="col row h-100 d-none d-md-flex mt-2">
              <div className="col-12 col-lg-8 h-100 mt-2 image-container d-none d-md-flex justify-content-center">
               
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
                    src={require("../../assets/images/overlay3.png")}
                    alt="overlay3"
                    className="overlay-image overlay3"
                  />
                  <img
                    src={require("../../assets/images/overlay4.png")}
                    alt="overlay4"
                    className="overlay-image overlay4"
                  />
                  <img
                    src={require("../../assets/images/overlay5.png")}
                    alt="overlay5"
                    className="overlay-image overlay5"
                  />
                   <img
                    src={require("../../assets/images/overlay6.png")}
                    alt="overlay6"
                    className="overlay-image overlay6"
                  />
                 
                </div>
              
              <div className="col flexClass h-100 mt-2 d-none d-lg-flex">
                <div className="circleDiv">
                  <Link to="/clothing/Поло%20тениски">
                    <img
                      src={require("../../assets/images/polotshirt.png")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
                <div className="circleDiv ">
                  <Link to="/clothing/Суитчъри">
                    <img
                      src={require("../../assets/images/sweatshirt.png")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
                <div className="circleDiv">
                  <Link to="/clothing/Престилки">
                    <img
                      src={require("../../assets/images/apron.jpeg")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
                <div className="circleDiv">
                  <Link to="/clothing/Шапки">
                    <img
                      src={require("../../assets/images/cap.jpeg")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
                <div className="circleDiv">
                  <Link to="/gifts/Етикети">
                    <img
                      src={require("../../assets/images/th (14).jpeg")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div>
                <div className="circleDiv">
                  <Link to="/gifts/Печати">
                    <img
                      src={require("../../assets/images/th (13).jpeg")}
                      alt="tshirt-intro"
                      className="rounded-circle border-white border-3"
                    />
                  </Link>
                </div> <div className="circleDiv">
                  <Link to="/gifts/Химикали">
                    <img
                      src={require("../../assets/images/pen.jpeg")}
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
      <Category />
      <WhyChooseUs />
    </div>
  );
}
