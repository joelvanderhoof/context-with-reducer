import React, { createContext, useReducer } from 'react';

import contextReducer, { actions, initialState } from 'reducers';
import middleware from 'middleware'

export const Context = createContext();

export const ContextProvider = props => {
    const [state, dispatch] = useReducer(contextReducer, initialState);

    return (
        <Context.Provider
            value={{
                actions,
                dispatch: middleware(dispatch),
                state,
            }}
        >
            {props.children}
        </Context.Provider>
    )
} 
