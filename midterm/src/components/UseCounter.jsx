import { useState } from "react";

export default function UseCounter(){
    const initialValue = 0; // 초기값 설정
    const [count, setCount] = useState(initialValue);
    
    const increaseCount = () => {
        setCount((prevCount) => prevCount + 1); // 이전 값에 1을 더하여 증가
    }
    const decreaseCount = () => {
        setCount((prevCount) => prevCount - 1); // 이전 값에 1을 빼서 감소
    }

    return [count, increaseCount, decreaseCount]; // 수정 필요
}
