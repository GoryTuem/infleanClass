import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWriter.queries";
import BoardWriteUI from "./BoardWrite.presenter";
export default function BoardWrite() {
  //동기
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isActive, setIsActive] = useState(false);
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
    if (event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <BoardWriteUI
      aaa={onClickSubmit}
      bbb={onChangeWriter}
      ccc={onChangeTitle}
      ddd={onChangeContents}
      isActive={isActive}
    />
  );
}
