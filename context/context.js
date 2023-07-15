"use client";
import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const ContentData = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    contentData: [],
  });

  return (
    <ContentData.Provider value={{ state, dispatch }}>
      {children}
    </ContentData.Provider>
  );
};

export const ContentStore = () => {
  return useContext(ContentData);
};

export default Context;
