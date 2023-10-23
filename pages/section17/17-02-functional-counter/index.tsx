import { useEffect, useState } from "react";
export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);

  //1. componentDidMount와 동일
  useEffect(() => {}, []);

  //1-1. 처음 실행 후 count가 변경될 때만 실행
  useEffect(() => {}, [count]);

  //2. componentDidMount + componentDidUpdate 와 동일
  useEffect(() => {});

  //3. componentWillUnmount와 동일
  useEffect(() => {
    return () => {};
  }, []);

  //4. useEffect 하나로 합치기
  useEffect(() => {
    return () => {};
  }, []);

  const onClickCountUp = (): void => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </>
  );
}
