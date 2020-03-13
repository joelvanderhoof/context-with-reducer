import React, { useContext, useReducer, useState } from 'react';
import { Context } from 'Context';
import GiphyTile from './GiphyTile'; 

const localActions = {
    setFoo: value => ({
        type: 'FOO',
        value,
    })
};

const localReducer = (state = {}, action) => {
    switch (action.type) {
        case ('FOO'):
            return {
                ...state,
                foo: action.value,
            };
        default:
            return state;
    }
};

const GrandchildComponent = () => {
    const [localThing, setLocalThing] = useState('');
    const [localState, localDispatch] = useReducer(localReducer, {});
    const { actions, dispatch, state } = useContext(Context);
    const {firstName, lastName } = state;

    return (
        <div>
            <h2>Name: {`${firstName} ${lastName} ${localState.foo} ${localThing}`}</h2>
            <p>first name:</p>
            <input
                onChange={event => dispatch(actions.setFirstName(event.target.value))}
            />

            <p>last name:</p>
            <input
                onChange={event => dispatch(actions.setLastName(event.target.value))}
            />

            <p>local useReducer thing:</p>
            <input
                onChange={event => localDispatch(localActions.setFoo(event.target.value))}
            />

            <p>local useState thing:</p>
            <input
                onChange={event => setLocalThing(event.target.value)}
            />
            <GiphyTile />
        </div>
    );
}

export default GrandchildComponent;
