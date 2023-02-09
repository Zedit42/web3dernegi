import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext({});

import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export const GlobalProvider = ({ children }) => {
  const [database, setDatabase] = useState(null);
  const values = {
    database,
  };

  useEffect(() => {
    initializeApp(firebaseConfig);
    var database = getDatabase();
    setDatabase(database);
  }, []);

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
