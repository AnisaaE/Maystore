export function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#392a48" }}
    >
      {/* Section: Social media */}
      <section
        className="d-flex justify-content-between p-2"
        style={{ backgroundColor: "#6606a5" }}
      >
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="text-white me-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="bi bi-google"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Company name</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Products</h6>
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
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  MDWordPress
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  BrandFlow
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Bootstrap Angular
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
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
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <i className="bi bi-geo-alt"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="bi bi-envelope"></i> info@example.com
              </p>
              <p>
                <i className="bi bi-telephone"></i> + 01 234 567 88
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright: Maystore
      </div>
      {/* Copyright */}
    </footer>
  );
}
