import React, { useReducer } from 'react';
//--------reducers
import formReducer from './../reducers/form';
import filtersReducer from './../reducers/filters';


/*-------------------------------context------------------------------*/
export const rootContext=React.createContext();
/*----------------------------initial states--------------------------*/
const formInitialState={inputChange:'',todo:'',todos:[]};
const filterInitialState={mode:'All'}
/*---------------------------------Store------------------------------*/
const Store = ({children}) => {
  
  const [form,formDispatch]=useReducer(formReducer,formInitialState);
  const [filters,filtersDispatch]=useReducer(filtersReducer,filterInitialState);

  let state={
    form,
    filters
  }
  let dispatch={
    formDispatch,
    filtersDispatch
  }
  let value={ state, dispatch };
  
  return(
    <rootContext.Provider value={value} >
      {children}
    </rootContext.Provider>
  )
}
export default Store;