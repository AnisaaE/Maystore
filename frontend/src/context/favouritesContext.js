import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContex"; 
import { authServiceBuilder } from "../services/usersService"; // Importing the auth service to update favourites on the server
import { useLocalStorage } from "../hooks/useLocalStorage";

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({ children }) => {
  const { isAuth, favourites: userFavourites, auth } = useContext(AuthContext); 
  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  const authService = authServiceBuilder();

  
  useEffect(() => {
    if (isAuth && userFavourites.length > 0) {
      setFavourites(userFavourites); 
    }
    // else if (!isAuth) {
    //   setFavourites([]);
    // }
  }, [auth, userFavourites, setFavourites]);

  const addToFavourites = async (product) => {
    const updatedFavourites = [...favourites, product];
    setFavourites(updatedFavourites);

    if (isAuth) {
      const response = await authService.updateFavourites(updatedFavourites);
      if (!response.ok) {
        const errorData = await response.json();
        return errorData.message || "Adding product to favourites on server failed";
      }
    }
  };

  const removeFromFavourites = async (productId) => {
    const updatedFavourites = favourites.filter((item) => item.id !== productId);
    setFavourites(updatedFavourites);

    if (isAuth) {
      const response = await authService.updateFavourites(updatedFavourites);
      if (!response.ok) {
        const errorData = await response.json();
        return errorData.message || "Removing product from favourites on server failed";
      }
    }
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};
