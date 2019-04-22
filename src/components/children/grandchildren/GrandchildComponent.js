import React, { useContext } from 'react';
import AppContext from '../../Context';

const GrandchildComponent = props => {

    const { dispatch, state } = useContext(AppContext.AppContext);
    const {firstName, lastName } = state;
    console.log(state)

    return (
        <div>
            <h2>Name: {`${firstName} ${lastName}`}</h2>
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
        </div>
    );
}

export default GrandchildComponent;
