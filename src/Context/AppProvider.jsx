import { useContext, useState, React, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const initialState = {
  search: false,
}

// eslint-disable-next-line react/prop-types
const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{
      ...state,}
    }>
        {
          children
        }
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext);
}


export {useAppContext, AppProvider, initialState}

