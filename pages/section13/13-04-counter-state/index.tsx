import { useState } from "react";

export default function NewableFunction() {
  const [count, setCount] = useState(0);

  function up() {
    setCount(count + 1);
    //prev : 임시 저장공간에서 가져옴
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={up}>카운트 올리기</button>
    </>
  );
}
