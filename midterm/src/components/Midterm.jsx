import React from "react";
import { useState } from "react";

export default function Midterm(){
  
  let bFruit = ""
  // 문장 뒤 과일이 들어올 공간

  const [fruit,setFruit] = useState(bFruit);
  //react hook state 사용

  return(
    <>
    <h1>당신은 어떤 과일을 좋아하나요? {fruit}</h1>

    {/* 버튼을 누르면 과일들이 바뀝니다 */}
    <button onClick={() => setFruit("사과")}>
        사과
      </button><button onClick={() => setFruit("오렌지")}>
        오렌지
      </button><button onClick={() => setFruit("바나나")}>
        바나나
      </button>
    
    </>
  )
}