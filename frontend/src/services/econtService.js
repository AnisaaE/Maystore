import { requestBuilder } from "./requests";

const baseUrl = "http://localhost:4000/econt";

export const econtServiceBuilder = () => {
  const request = requestBuilder();

  const getCities = async () => {
    try {
        const response = await request.post(`${baseUrl}/getCities`);
        console.log(response);
        return response; 
      } catch (error) {
        console.error("Error fetching cities:", error);
        throw error;
      }
  };

  return {
   getCities
  };
};
