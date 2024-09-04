import { requestBuilder } from "./requests";

const baseUrl = "http://localhost:4000/products";

export const productsServiceBuilder = () => {
  const request = requestBuilder();

  const getAll = async () => {
    const result = await request.get(baseUrl);
    console.log(result);
    const products = result.products;

    console.log(products );

    return products;
  };

  const getOne = async (productId) => {
    const result = await request.get(`${baseUrl}/${productId}`);

    return result;
  };
  const productFind = async (value) => {
    const encodedValue = encodeURIComponent(value);

    request.get(``);
  };

  return {
    getAll,
    getOne,
    productFind,
  };
};
