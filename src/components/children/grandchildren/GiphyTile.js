import React, { useContext } from 'react';
import { Context } from 'Context';

const GiphyTile = () => {
    const { actions, dispatch, state: { giphyUrl } } = useContext(Context);

    return (
        <div>
            {giphyUrl &&
            <>
            <h2>Look at this sweet gif</h2>
            <img src={giphyUrl} alt="your mom"></img>              
            </>}
                <p>search for a gif</p>
            <input
                onBlur={event => dispatch(actions.getGiphy(event.target.value))}
            />
        </div>
    );
}

export default GiphyTile;
