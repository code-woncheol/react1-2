import React, { useState } from 'react';

export default function Toggle() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleClick = () => {
        setIsToggleOn(prevState => !prevState);
    };

    const handleToggle = () => {
        // 여기에 두 번째 버튼의 클릭 이벤트 핸들러에 대한 로직을 추가합니다.
        console.log("Button Clicked");
    };
    return (
        <>
            <button onClick={handleToggle}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
            <button onClick={handleClick}>
                Click me
            </button>
        </>
    );
}
