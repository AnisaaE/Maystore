import "./Catalog.css"; // Тук ще добавим нашите допълнителни CSS стилове

function ProductCatalog (){
const products = [
    {
      name: "Продукт 1",
      price: "100",
      image: "https://via.placeholder.com/150",
      link: "/product-1",
    },
    {
      name: "Продукт 2",
      price: "150",
      image: "https://via.placeholder.com/150",
      link: "/product-2",
    },
    {
        name: "Продукт 2",
        price: "150",
        image: "https://via.placeholder.com/150",
        link: "/product-2",
      },
      {
        name: "Продукт 2",
        price: "150",
        image: "https://via.placeholder.com/150",
        link: "/product-2",
      },
      {
        name: "Продукт 2",
        price: "150",
        image: "https://via.placeholder.com/150",
        link: "/product-2",
      },
    
  ];

  return (
    <div className="container m-5 ">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
        {products.map((product, index) => (
          <div key={index} className="col">
            <a href={product.link} className="text-decoration-none">
              <div className="card h-100 product-card position-relative">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">{product.name}</h5>
                  <div className="separator"></div>
                  <p className="card-text text-primary">Цена: {product.price} лв.</p>
                </div>
                <button className="btn btn-outline-danger btn-sm favorite-icon position-absolute top-0 end-0 m-2">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
