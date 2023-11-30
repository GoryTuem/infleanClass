import { useEffect } from "react";
import type { MouseEvent } from "react";
import { GoPerson } from "react-icons/go";

import * as s from "./boardList.style";

interface IBoardItemProps {
  tags: string[];
}
const tagItems = [
  {
    img: "tagImg1.jpg",
    like: true,
    tag: "니트코디,겨울룩북,패딩",
    userId: "thgml_2",
  },
  {
    img: "tagImg2.jpg",
    like: false,
    tag: "니트코디,바라클라바,코듀로이,캐주얼,겨울룩북,패딩",
    userId: "chlrkdgh97",
  },
  {
    img: "tagImg3.jpg",
    like: false,
    tag: "니트코디,,겨울룩북,패딩",
    userId: "soheem95",
  },
  {
    img: "tagImg4.jpg",
    like: true,
    tag: "니트코디,겨울룩북,패딩",
    userId: "co_ai77",
  },
  {
    img: "tagImg5.jpg",
    like: false,
    tag: "니트코디,겨울룩북,패딩",
  },
  {
    img: "tagImg6.jpg",
    like: false,
    tag: "니트코디,겨울룩북,패딩",
  },
  {
    img: "tagImg7.jpg",
    like: false,
    tag: "니트코디,겨울룩북,패딩",
  },
  {
    img: "tagImg8.jpg",
    like: false,
    tag: "니트코디,겨울룩북,패딩",
  },
];
export default function TrendKeywordItem(props: IBoardItemProps) {
  useEffect(() => {
    // 선택한 태그로 itemList 가져오기
  });

  const onClickLike = (e: MouseEvent<SVGElement>) => {
    // 좋아요 누른 게시물 좋아요 update하기
  };
  return (
    <s.BoardItemWrapper>
      {tagItems.map((item) => (
        <div key={item.img}>
          <s.ItemBody>
            <s.ItemImg src={`/image/${item.img}`} />
            {item.like ? (
              <s.HeartIconFill id={item.img} onClick={onClickLike} />
            ) : (
              <s.HeartIcon id={item.img} onClick={onClickLike} />
            )}
          </s.ItemBody>
          <s.UserId>
            <GoPerson style={{ verticalAlign: "middle", marginRight: "3px" }} />
            {item.userId}
          </s.UserId>

          <s.Summary>
            {item.tag.split(",").map((tagItem) => ` #${tagItem} `)}
          </s.Summary>
        </div>
      ))}
    </s.BoardItemWrapper>
  );
}
