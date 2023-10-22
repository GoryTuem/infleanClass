export default function Child1(props: any) {
  function up() {
    props.setCount(props.count + 1);
  }

  return (
    <>
      <div>자식 1의 카운트 {props.count}</div>
      <button onClick={up}>카운트 올리기</button>
    </>
  );
}
