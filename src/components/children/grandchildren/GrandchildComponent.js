import React, { useContext, useState } from 'react';
import { Context } from 'Context';
import GiphyTile from './GiphyTile'; 

const GrandchildComponent = () => {
    const [localThing, setLocalThing] = useState('');
    const { actions, dispatch, state } = useContext(Context);
    const {firstName, lastName } = state;

    return (
        <div>
            <h2>Name: {`${firstName} ${lastName} ${localThing}`}</h2>
            <p>first name:</p>
            <input
                onChange={event => dispatch(actions.setFirstName(event.target.value))}
            />

            <p>last name:</p>
            <input
                onChange={event => dispatch(actions.setLastName(event.target.value))}
            />

            <p>local thing:</p>
            <input
                onChange={event => setLocalThing(event.target.value)}
            />
            <GiphyTile />
        </div>
    );
}

export default GrandchildComponent;
