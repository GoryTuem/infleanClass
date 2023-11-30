import TrendKeywordItem from "../board/list/Item.index";
import * as s from "./likes.style";

export default function LikesPage() {
  return (
    <>
      <s.LikesWrapper>
        <s.Title>
          <s.Icon />
          좋아요한 스타일
        </s.Title>
      </s.LikesWrapper>
      <TrendKeywordItem tags={[""]} />
    </>
  );
}
