import React, { useContext, useState } from 'react';
import AppContext from '../../Context';

const GrandchildComponent = props => {

    const [localThing, setLocalThing] = useState('')

    const { dispatch, state } = useContext(AppContext.AppContext);
    const {firstName, lastName } = state;
    console.log(state)

    return (
        <div>
            <h2>Name: {`${firstName} ${lastName} ${localThing}`}</h2>
            <p>first name:</p>
            <input
                onChange={event => {
                    const { value } = event.target;
                    dispatch({
                        type: 'SET_FIRST_NAME',
                        firstName: value
                    });
                }}
            />

            <p>last name:</p>
            <input
                onChange={event => {
                    const { value } = event.target;
                    dispatch({
                        type: 'SET_LAST_NAME',
                        lastName: value
                    });
                }}
            />

            <p>local thing:</p>
            <input
                onChange={event => {
                    const { value } = event.target;
                    setLocalThing(value);
                }}
            />
        </div>
    );
}

export default GrandchildComponent;
