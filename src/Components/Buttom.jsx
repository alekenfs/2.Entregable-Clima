import React from 'react';

const Buttom = ({ SetIsF, isF }) => {

    return (
        <button onClick={() => SetIsF(!isF)}>Change to Cº/Fº</button>
    );
};

export default Buttom;