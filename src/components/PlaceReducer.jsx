import React from "react";
import { data } from "./Data";

export const initialState = {
  places: data.continents,
};

function PlaceReducer(state, action) {
  switch (action.type) {
    // case value:

    //     break;

    default:
      return state;
  }
}

export default PlaceReducer;
