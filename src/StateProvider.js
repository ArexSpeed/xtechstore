import React, { createContext, useState, useContext } from "react";

export const StateContext = createContext();

export const StateProvider = props => {
  const [bagOpen, setBagOpen] = useState(false);
  return (
    <StateContext.Provider value={[bagOpen, setBagOpen]}>
      {props.children}
    </StateContext.Provider>
  );
};
