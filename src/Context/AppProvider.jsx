import React, { useContext, useState, useReducer } from "react";
import reducer from "./Reducer";

import { SEARCH_IMAGE } from "./Actions";

const AppContext = React.createContext();

const initialState = {
  search: false,
  queryString: '',
  curatedImage: [],
}

// eslint-disable-next-line react/prop-types
const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getSearchQuery = (query) => {
    dispatch({type: SEARCH_IMAGE, payload: {
      query: query
    }})
  }


  return (
    <AppContext.Provider value={{
      ...state,
      getSearchQuery,
    }
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

