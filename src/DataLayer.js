import React, {createContext, useContext, useReducer} from 'react';

// preparing the data layer
export const DataLayerContext = createContext();

// actual data layer
export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);