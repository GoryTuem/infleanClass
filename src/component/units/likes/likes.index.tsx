import BoardItem from "../board/list/Item.index";
import * as s from "./likes.style";
import { useEffect, useState } from "react";
import Axios from "../../../component/commons/axios";
interface boardListProps {
  type: string;
}
export default function LikesPage(props: boardListProps) {
  const user = localStorage.getItem("accessToken");

  const [myBoard, setMyBoard] = useState([
    {
      board_id: 0,
      member_nickname: "",
      likeYN: "",
      tags: [],
      files: [],
    },
  ]);

  useEffect(() => {
    async function userBoardData() {
      await Axios.get(`/api/board/myBoard?type=${props.type}`).then(
        function (response) {
          const res = response.data;
          if (res.success === true) {
            setMyBoard(res.data);
          } else {
            alert(res.message);
          }
        },
      );
    }
    if (user) {
      void userBoardData();
    }
  }, []);
  return (
    <>
      <s.LikesWrapper>
        <s.Title>
          <s.Icon />
          {props.type === "write" ? "등록한 스타일" : "좋아요한 스타일"}
        </s.Title>
      </s.LikesWrapper>
      {myBoard && <BoardItem type={props.type} Items={myBoard} />}
      {myBoard.length <= 0 && (
        <s.noContent>
          {props.type === "write"
            ? "등록한 스타일이 없습니다."
            : "좋아요한 스타일이 없습니다."}
        </s.noContent>
      )}
    </>
  );
}
