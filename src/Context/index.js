import axios from 'axios';
import React, { createContext, useReducer } from 'react';

const Context = createContext();

const initialState = {
    firstName: '',
    lastName: '',
    giphyUrl: '',
};

function contextReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'GET_GIPHY':
            return {
                ...state,
                giphyUrl: action.payload,
            };
        case 'SET_FIRST_NAME':
            return {
                ...state,
                firstName: action.firstName
            };
        case 'SET_LAST_NAME':
            return {
                ...state,
                lastName: action.lastName
            };
        default:
            return state;
    }
}

const actions = {
    setFirstName: firstName => ({ type: 'SET_FIRST_NAME', firstName }),
    setLastName: lastName => ({ type: 'SET_LAST_NAME', lastName }),
    getGiphy: queryString => ({ type: 'GET_GIPHY', q: queryString.replace(/ /g, '+') })
};

// dispatchWithAsync watches for action types that have async effects then calls dispatch on those effects
// If an action does not have an async type, dispatch is called on the action
const middleware = dispatch =>  async action => {
    switch (action.type) {
        case 'GET_GIPHY':
            const result = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${action.q}&api_key=5fmGkZqf1Nt7uYGyJdnQZuVYtEhDgeO7&limit=1`);
            return(dispatch({
                type: action.type,
                payload: result.data.data[0].images.downsized_large.url,
            }));
        default:
        return dispatch(action);
    }
};


const ContextProvider = props => {
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

export default { Context, ContextProvider };
