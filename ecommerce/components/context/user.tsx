"use client";
import { createContext, useContext } from "react";

const context = createContext({});

const { Provider } = context;

// const useUser = () => {
//   return useContext(context);
// };

const UserProvider = ({ children, value }: any) => {
  return <Provider value={value}>{children}</Provider>;
};

export { UserProvider };
