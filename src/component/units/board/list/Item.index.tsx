import { useEffect } from "react";
import { GoPerson } from "react-icons/go";

import * as s from "./boardList.style";
interface items {
  board_id: number;
  member_nickname: string;
  likeYN: string;
  tags: string[];
  files: string[];
}

interface IBoardItemProps {
  type: string;
  Items: items[];
}
export default function BoardItem(props: IBoardItemProps) {
  useEffect(() => {
    // 선택한 태그로 itemList 가져오기
  });

  return (
    <s.BoardItemWrapper>
      {props.Items.map((item) => (
        <div key={item.board_id}>
          <s.ItemBody>
            <s.ItemImg src={`/${item.files[0]}`} />
            {props.type !== "write" &&
              (item.likeYN === "Y" ? (
                <s.HeartIconFill id={item.board_id.toString()} />
              ) : (
                <s.HeartIcon id={item.board_id.toString()} />
              ))}
          </s.ItemBody>
          <s.UserId>
            <GoPerson style={{ verticalAlign: "middle", marginRight: "3px" }} />
            {item.member_nickname}
          </s.UserId>

          <s.Summary>{item.tags.map((tagItem) => ` #${tagItem} `)}</s.Summary>
        </div>
      ))}
    </s.BoardItemWrapper>
  );
}
