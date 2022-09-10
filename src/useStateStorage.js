import { useState, useEffect } from "react";

export const useStateStorage = (field, initialState = null, storage = "localStorage") => {
  const initialStateString = window[storage].getItem(field);
  const [state, setState] = useState(initialStateString ? JSON.parse(initialStateString) : initialState);

  useEffect(() => {
    const stateString = state ? JSON.stringify(state) : "";
    window[storage].setItem(field, stateString);
  }, [state]);

  return [state, setState];
};
