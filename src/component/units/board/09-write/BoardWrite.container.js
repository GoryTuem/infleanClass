import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWriter.queries";
import BoardWriteUI from "./BoardWrite.presenter";
export default function BoardWrite(props) {
  //동기
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

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

    //등록하고 상세페이지로 이동
    if (Number(result.data.createBoard.number) > 0) {
      router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
    }
  };

  const onClickUpdate = async () => {
    const myVariables = {
      number: Number(router.query.number),
    };
    if (writer) myVariables.writer = writer;

    if (title) myVariables.title = title;

    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
    });
    //등록하고 상세페이지로 이동
    if (Number(result.data.updateBoard.number) > 0) {
      router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
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
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
