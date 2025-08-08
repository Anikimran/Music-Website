import React, { createContext, useState, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const click = async () => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=150`);
    const jsonData = await res.json();
    setData(jsonData);
  };

  return (
    <DataContext.Provider value={{ data, click, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
