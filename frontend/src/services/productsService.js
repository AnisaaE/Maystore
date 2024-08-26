import { requestBuilder } from "./requests";

const baseUrl = "http://localhost:3030/products";

export const productsServiceBuilder = () => {
  const request = requestBuilder();

  const getAll = async () => {
    const result = await request.get(baseUrl);
    const products = Object.values(result);

    return products;
  };

  const getOne = async (productId) => {
    const result = await request.get(`${baseUrl}/${productId}`);

    return result;
  };

  const create = async (productData) => {
      const result = await request.post(baseUrl, productData);
      return result;
  };

  const edit = (productId, data) => request.put(`${baseUrl}/${productId}`, data);

  const deleteproduct = (productId) => request.delete(`${baseUrl}/${productId}`);

  const productFind = async (value) => {
    const encodedValue = encodeURIComponent(value);

    request.get(``);
  };

  return {
    getAll,
    getOne,
    create,
    edit,
    deleteproduct,
    productFind,
  };
};
