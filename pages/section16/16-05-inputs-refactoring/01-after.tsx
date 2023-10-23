import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
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
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();
  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        ...inputs,
      },
    });
    if (Number(result.data.createBoard.number) > 0) {
      void router.push(
        `/05-01-static-routed-board/${result.data.createBoard.number}`,
      );
    }
  };

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      작성자 : <input type="text" id="writer" onChange={onChangeInput} />
      <br />
      제목 : <input type="text" id="title" onChange={onChangeInput} />
      <br />
      내용 : <input type="text" id="contents" onChange={onChangeInput} />
      <br />
      <button onClick={onClickSubmit}>graphql-API(동기) 요청하기</button>
    </>
  );
}
