import { useState } from "react";
import TrendKeywordList from "../../src/component/units/board/list/List.index";
import TrendKeywordItem from "../../src/component/units/board/list/Item.index";

export default function BoardsPage() {
  const [tags, setTag] = useState<string[]>([]);
  const UpdateTags = (tag: string) => {
    setTag([...tags, tag]);
  };
  const DeleteTags = (tag: string) => {
    setTag((prevTags) => {
      return prevTags.filter((item) => item !== tag);
    });
  };
  return (
    <>
      <TrendKeywordList tags={tags} setTag={UpdateTags} delTag={DeleteTags} />
      <TrendKeywordItem tags={tags} />
    </>
  );
}
