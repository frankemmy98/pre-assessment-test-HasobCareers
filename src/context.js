import React, { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedin(false);
    return <Navigate to="/" />;
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedin,
        isSidebarOpen,
        setIsLoggedin,
        setIsSidebarOpen,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
