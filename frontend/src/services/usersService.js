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
        addToFav: (data) => request.post(`${baseUrl}/addToFav`, data),
        updateCart: (data) => request.post(`${baseUrl}/updateCart`, data),
        updateFavorites: (data) => request.post(`${baseUrl}/updateFavorites`, data),

    }
};