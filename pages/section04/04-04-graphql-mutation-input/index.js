import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #타입 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 실제 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

//동기
export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();
  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        // 변수 정의 $생략
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    alert(result.data.createBoard.message);
    //result.data.createBoard.number
    //라우터 푸쉬로 작성한 상세 페이지로 이동 시켜줄 수 있음!
    if (Number(result.data.createBoard.number) > 0) {
      // router.push(
      //   "/05-01-static-routed-board/" + result.data.createBoard.number
      // );
      router.push(
        `/05-01-static-routed-board/${result.data.createBoard.number}`
      );
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>graphql-API(동기) 요청하기</button>
    </>
  );
}
