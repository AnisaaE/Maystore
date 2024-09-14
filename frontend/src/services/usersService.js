import { requestBuilder } from "./requests";

const baseUrl = `http://localhost:4000/users`;

export const authServiceBuilder = () => {
    const request = requestBuilder();

    return {
        favorites:() => request.get(`${baseUrl}/favorites`),
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`),
        verifyEmail: (data) => request.post(`${baseUrl}/verify-email`, data),
        updateCart: (data) => request.post(`${baseUrl}/updateCart`, data),
        updateFavourites: (data) => request.post(`${baseUrl}/updateFavourites`, data),

    }
};