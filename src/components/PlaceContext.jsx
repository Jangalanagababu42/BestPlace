import React, { createContext, useContext, useReducer } from "react";
import PlaceReducer, { initialState } from "./PlaceReducer";

const PlaceContext = createContext();

function PlaceProvider({ children }) {
  const [state, dispatch] = useReducer(PlaceReducer, initialState);
  return (
    <PlaceContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaceContext.Provider>
  );
}

const usePlace = () => useContext(PlaceContext);
export { usePlace, PlaceProvider };
