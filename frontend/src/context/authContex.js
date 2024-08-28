import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceBuilder } from "../services/userService";
import { registerValidation } from "../validations/validations";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const navigate = useNavigate();
  const authService = authServiceBuilder(auth.accessToken);

  const onSubmitRegister = async (data) => {
    const validationData = registerValidation(data);

    if (Array.isArray(validationData)) {
      return validationData;
    } else {
      try {
        const result = await authService.register(validationData);
        setAuth(result);
        navigate("/");
      } catch (error) {
        return ["There is a problem... Please, try again later!"];
      }
    }
  };

  const onSubmitLogin = async (data) => {
    try {
      let result = await authService.login(data);

      setAuth(result);
      navigate("/");
    } catch (err) {
      return ["Incorrect email or password!"];
    }
  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
    localStorage.clear();
  };

  const context = {
    onSubmitRegister,
    onSubmitLogin,
    onLogout,
    auth,
    token: auth.accessToken,
    userId: auth._id,
    email: auth.email,
    userUsername: auth.username,
    isAuth: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    </>
  );
}
