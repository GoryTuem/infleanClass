import * as s from "./BoardWrite.styles"; // export 전체 가져오기
export default function BoardWriteUI(props) {
  return (
    <>
      작성자 : <s.RedInput type="text" onChange={props.bbb} />
      <br />
      제목 : <input type="text" onChange={props.ccc} />
      <br />
      내용 : <input type="text" onChange={props.ddd} />
      <br />
      <s.BlueButton onClick={props.aaa}>
        graphql-API(동기) 요청하기
      </s.BlueButton>
    </>
  );
}
