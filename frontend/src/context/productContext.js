import { createContext, useState, useEffect } from "react";
import { productsServiceBuilder } from "../services/productsService";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productService = productsServiceBuilder();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    productService
      .getAll()
      .then((res) => {
        setProducts(res || []); 
        setLoading(false);
        console.log(products);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  const getCatalogByCategory = (subcategory) => {
    return products.filter((product) => {
      if (subcategory === 'clothing') {
        return product.category === 'Облекло';
      } else if (subcategory === 'gifts') {
        return product.category === 'Подаръци';
      } else {
        // Ако няма съвпадение със субкатегориите 'clothing' или 'Gifts',
        // се филтрира според обичайната субкатегория.
        return product.subcategory === subcategory;
      }
    });
  };
  // const getCatalogByCategory = (subcategory) => {

  //     return products.filter(
  //       (product) =>
  //         product.subcategory === subcategory
  //     );
    
  // };


  const getProduct = (productId) => {
    if (loading) {
      return null; // Ако все още зареждаме, връщаме null
    }
    if (!products || products.length === 0) {
      return null; // Проверяваме дали продуктите са заредени
    }
    return products.find((product) => product.id === productId);
  };

  const getTypeProducts = (category) => {
    return products.filter((product) => product.category === category);
  };

  const productFind = (value) => {};

  const contextValues = {
    products,
    getCatalogByCategory,
    getProduct,
    getTypeProducts,
    loading,
    productFind,
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};
