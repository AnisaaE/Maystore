export function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#392a48" }}
    >
      <section
        className="d-flex justify-content-between p-2"
        style={{ backgroundColor: "#6606a5" }}
      >
        <div className="me-5">
          <span>Свържете с нас и в социалните мрежи:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/profile.php?id=61556690076040" className="text-white me-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://gadzhalov.com/" className="text-white me-4">
            <i className="bi bi-google"></i>
          </a>
          <a href="https://www.instagram.com/gadzhalov.studio/" className="text-white me-4">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </section>

    
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Maystore</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                Стилни решения с диззай по ваш избор. Персонализация на най-високо ниво – идеално за бизнеси, събития и подаръци.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Продукти</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!" className="text-white">
                  Работно облекло
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Стикери
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Фирмени артикули
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Още
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Полезни линкове</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!" className="text-white">
                  Промоции
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Комплекти
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Помощ
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Контакти</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <i className="bi bi-geo-alt"></i> Рудозем, България
              </p>
              <p>
                <i className="bi bi-envelope"></i> studio@gadzhalov.com
              </p>
              <p>
                <i className="bi bi-telephone"></i> +359 877 70 70 18
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
     

      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright: Maystore
      </div>
    </footer>
  );
}
