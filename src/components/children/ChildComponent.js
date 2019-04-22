import React from 'react';

import GrandchildComponent from './grandchildren/GrandchildComponent';

const ChildComponent = props => {

    return (
        <div>
            <GrandchildComponent />
            <GrandchildComponent />
            <GrandchildComponent />
        </div>
    );
}

export default ChildComponent;
