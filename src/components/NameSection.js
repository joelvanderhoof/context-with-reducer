import React, { useContext } from 'react';
import AppContext from './Context';

const NameSection = props => {

    const { dispatch, state } = useContext(AppContext.AppContext);
    const {firstName, lastName } = state;
    console.log(state)

    return (
        <div>
            Name: {`${firstName} ${lastName}`}
            <div></div>
            first name:
            <input
                onChange={event => {
                    const { value } = event.target;
                    dispatch({
                        type: 'SET_FIRST_NAME',
                        firstName: value
                    });
                }}
            />
            <div></div>
            last name:
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

export default NameSection
