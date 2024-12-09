"use client";

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  isSignedIn: false,
  isLoaded: false,
  setIsSignedIn: () => {},
  setIsLoaded: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const localSignInStatus = JSON.parse(localStorage.getItem("isSignedIn"));
    if (localSignInStatus) {
      setIsSignedIn(localSignInStatus);
    }
    setIsLoaded(true);
  });

  useEffect(() => {
    localStorage.setItem("isSignedIn", JSON.stringify(isSignedIn));
  }, [isSignedIn]);

  return (
    <UserContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        isLoaded,
        setIsLoaded,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
