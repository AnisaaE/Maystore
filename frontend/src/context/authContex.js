import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceBuilder } from "../services/usersService";
//import { useCart } from "./cardContext";

export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const authService = authServiceBuilder();
  const [auth, setAuth] = useLocalStorage("auth", {});
 // const {    setCartItems  } = useCart()
  const navigate = useNavigate();

  const onSubmitRegister = async (data) => {
    try {
      
      const result = await authService.register(data);
  
      // Запазваме данните за автентикация, ако всичко е наред
      setAuth(result);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  const onSubmitLogin = async (data) => {
    try {
      let response = await authService.login(data);
      console.log(response);
      setAuth(response);
      navigate("/");
    } catch (err) {
      throw new Error("Incorrect username or password!");
    }
  };
  const verifyEmail = async (data) => {
    try {
      const response = await authService.verifyEmail(data);
      console.log("verifyEmail", JSON.stringify(response));
    } catch (error) {
      throw new Error("There is a problem... Please, try again later!");
    }
  };
  const onLogout = async () => {
    console.log("logout");
   await setAuth({});
  //  setCartItems([]);
    navigate('/')
    localStorage.clear();
  };

  const context = {
    onSubmitRegister,
    onSubmitLogin,
    verifyEmail,
    onLogout,
    auth,
    cartList: auth.cartList,
    token: auth.accessToken,
    favourites: auth.fav,
    isAuth: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    </>
  );
}
