import { requestBuilder } from "./requests";

const baseUrl = `http://localhost:3030/users`;

export const authServiceBuilder = (token) => {
    const request = requestBuilder(token);

    return {
        profil:() => request.get(`${baseUrl}/me`),
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    }
};