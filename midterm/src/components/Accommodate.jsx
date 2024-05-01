import { useState, useEffect } from "react";
import UseCounter from "./UseCounter";

const MAX_CAPACITY = 10;

export default function Accommodate() {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = UseCounter();

    useEffect(() => {
        console.log("===============");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`);

        if (count >= MAX_CAPACITY) {
            setIsFull(true);
        } else {
            setIsFull(false);
        }
    }, [count, isFull]); // count와 isFull을 의존성 배열에 추가하여 변경될 때마다 재실행되도록 설정
    const handleDecreaseCount = () => {
        if (count > 0) {
            decreaseCount();
        }
    };
    return (
        <>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={handleDecreaseCount} disabled={count === 0}>퇴장</button>

            {isFull && <p style={{color:'red'}}>최대 수용 인원입니다.</p> }
        </>
    );
}
