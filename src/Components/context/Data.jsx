import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import React, { createContext, useState, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
    
  };
  const singInWithEmailPass=(email,password)=>{
   return   signInWithEmailAndPassword(auth, email, password)

  }
  const authInformation = {
    createUser,
    singInWithEmailPass
  }

  const click = async () => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=150`);
    const jsonData = await res.json();
    setData(jsonData);
  };

  return (
    <DataContext.Provider value={{ data, click, setData,authInformation }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
