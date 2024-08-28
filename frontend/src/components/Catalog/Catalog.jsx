import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import "./Catalog.css";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

function ProductCatalog() {
  const { getCatalogByCategory } = useContext(ProductContext);
  const { category, subcategory } = useParams();

  let products = getCatalogByCategory(category ? category : "all", subcategory);
  return (
    <div className="container m-5">
      {category && (
        <h2 className="category-title pt-5">
          {subcategory ? ` ${subcategory}` : `${category}`}
        </h2>
      )}

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center mt-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </div>
  );
}

export default ProductCatalog;
