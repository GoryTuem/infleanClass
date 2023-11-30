import type { MouseEvent } from "react";
import * as s from "./boardList.style";

//트렌드 태그 상위 10개 추출
const tagArray = [
  "니트코디",
  "바라클라바",
  "패딩",
  "어그",
  "코듀로이",
  "코트",
  "캐주얼",
];
interface IBoardProps {
  tags: string[];
  setTag: (value: string) => void;
  delTag: (value: string) => void;
}
export default function TrendKeywordList(props: IBoardProps) {
  const changeTag = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.className.includes("active")) {
      props.delTag(e.currentTarget.id);
    } else {
      props.setTag(e.currentTarget.id);
    }
  };
  return (
    <s.BoardWrapper>
      <s.Title>
        <s.Icon />
        인기 키워드
      </s.Title>
      <s.TagList
        className="container"
        vertical={false}
        horizontal={true}
        style={{ display: "flex" }}
      >
        <s.Tags className={props.tags.length === 0 ? "active" : ""}>
          전체
        </s.Tags>
        {tagArray.map((tags) => (
          <s.Tags
            key={tags}
            className={props.tags.includes(tags) ? "active" : ""}
            onClick={changeTag}
            id={tags}
          >
            #{tags}
          </s.Tags>
        ))}
      </s.TagList>
    </s.BoardWrapper>
  );
}
