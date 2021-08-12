import React, { createContext, useState } from 'react';

export const storeContext = createContext({});

const StoreProvider = ({children, ...other}) => {

  const [ store, setStore ] = useState()

  return(
    <storeContext.Provider value={[store,setStore]}>
        {children}
    </storeContext.Provider>
  )

}

export default StoreProvider;
