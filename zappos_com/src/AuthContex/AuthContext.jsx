import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const dummydata = "Vikash";
  const [isAuth, setIsAuth] = useState(false);
  const [isToken, setIsToken] = useState(null);
  const [cartItem, setCartItem] = useState(0);
console.log('cartItem context:', cartItem)
  // const handleCartCount = (totalItemsInCart) => {
  //   setCartItem(totalItemsInCart);
  // };
  const handleLogin = (token) => {
    setIsAuth(true);
    setIsToken(token);
  };
  const handleLogOut = () => {
    setIsAuth(false);
    setIsToken(null);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        isToken,
        handleLogin,
        handleLogOut,
        dummydata,
        cartItem,
        // handleCartCount,
        setCartItem
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
