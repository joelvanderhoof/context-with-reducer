import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const AppContextProvider = props => {

    const [state, dispatch] = useReducer(contextReducer, {
        firstName: '',
        lastName: ''
    });

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
} 

export default { AppContext, AppContextProvider };

function contextReducer(state, action) {
    console.log(action)
    
    switch (action.type) {
        case 'SET_FIRST_NAME':
            return Object.assign({}, state, {
                firstName: action.firstName
            });
        case 'SET_LAST_NAME':
            return Object.assign({}, state, {
                lastName: action.lastName
            });
        default:
            return state;
    }
}
