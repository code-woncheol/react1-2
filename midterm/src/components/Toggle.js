import React, { useState } from 'react';

function Toggle() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleClick = () => {
        setIsToggleOn(prevState => !prevState);
    };

    return (
        <>
            <button onClick={handleClick}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
            
            <button onClick={handleClick}>
                Toggle
            </button>
        </>
    );
}
