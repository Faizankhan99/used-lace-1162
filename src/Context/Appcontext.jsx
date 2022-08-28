import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const Appcontext = createContext();

export default function Appcontextprovider({ children }) {
  const [data, setData] = useState();
  const [click, setClick] = useState(false);

  function searchdata(data) {
    setData(data);
    setClick(true);
  }
  return (
    <Appcontext.Provider value={{ searchdata, data, click }}>
      {children}
    </Appcontext.Provider>
  );
}
