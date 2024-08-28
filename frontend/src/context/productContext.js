import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productsServiceBuilder } from "../services/productsService";
import { productsData } from "../components/data";
//import { productValidation } from "../validations/validations";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const productService = productsServiceBuilder();
  const [notification, setNotification] = useState(false);
  const [products, setProducts] = useState(productsData);

  const getCatalogByCategory = (category, subcategory) => {
    if (subcategory) {
      return products.filter(
        (product) =>
          product.category === category && product.subcategory === subcategory
      );
    }
    else if(category==="all"){
      return products
    }

    return products.filter((product) => product.category === category);
  };

  //   useEffect(() => {
  //     productService.getAll().then((res) => {
  //       setProducts(res);
  //     });
  //   }, []);

  //   const onProductEditSubmit = async (values) => {
  //   //  const errors = productValidation(values);
  //     const isValidData = !errors ? true : false;
  //     if (isValidData) {
  //       try {
  //          const result = await productService.edit(values._id, values);
  //         setProducts((state) =>
  //         state.map((x) => (x._id === values._id ? result : x))
  //       );
  //       navigate(`/catalog/${values._id}`);
  //       } catch (error) {
  //         return ["There is a problem... Please, try again later!"];
  //       }
  //     } else {
  //       return// errors;
  //     }
  //   };

  //   const onCreateProduct = async (data) => {
  //    // const errors = productValidation(data);
  //     //const isValidData = !errors ? true : false;
  //
  //     if (isValidData) {
  //       try {
  //         let newproduct = await productService.create(data);
  //         setProducts((state) => [...state, newproduct]);
  //         setNotification(true);
  //         navigate("/catalog");
  //         setNotification(false)
  //       } catch (error) {
  //         return ["There is a problem... Please, try again later!"];
  //       }
  //     } else {
  //       return //errors;
  //     }
  //   };

  //   const deleteProduct = (productId) => {
  //     setProducts((state) => state.filter((product) => product._id !== productId));
  //   };

  const getProduct = (productId) => {
    console.log(products);
    console.log(productId);
    return products.find((product) => product.id === productId);
  };
  const getTypeProducts = (category) => {
    return products.filter((product) => product.category === category);
  };

  const getProductsOfUser = (subcategory) => {
    return products.filter((product) => product.subcategory === subcategory);
  };

  const productFind = (value) => {};

  const contextValues = {
    products,
    getCatalogByCategory,
    // onCreateProduct,
    // onProductEditSubmit,
    // deleteProduct,
    getProduct,
    getTypeProducts,
    notification,
    getProductsOfUser,
    productFind,
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};
