"use client";

// RefreshContext.js
import React, {createContext, useState} from "react";

export const RefreshContext = createContext();

export const RefreshProvider = ({children}) => {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <RefreshContext.Provider value={{refreshKey, setRefreshKey}}>
      {children}
    </RefreshContext.Provider>
  );
};
