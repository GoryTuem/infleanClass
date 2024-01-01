import { useEffect, type MouseEvent, useState } from "react";
import * as s from "./boardList.style";
import Axios from "../../../../component/commons/axios";
import BoardItem from "./Item.index";

interface IBoardProps {
  tags: string[];
  setTag: (value: string) => void;
  delTag: (value: string) => void;
  allDelTag: () => void;
}
export default function TrendKeywordList(props: IBoardProps) {
  const [tagList, SetTagList] = useState([
    {
      id: 0,
      tagName: "",
    },
  ]);
  const [itemList, setItemList] = useState([
    {
      board_id: 0,
      member_nickname: "",
      likeYN: "",
      tags: [],
      files: [],
    },
  ]);
  useEffect(() => {
    //인기 태그 10건 가져오기
    async function tagList() {
      await Axios.get("/api/board/tagList").then(function (response) {
        const res = response.data;
        if (res.success === true) {
          SetTagList(res.data);
        } else {
          alert(res.message);
        }
      });
    }
    //선택한 태그의 게시글 가져오기
    async function tagItemList() {
      const param = props.tags.join(",");

      await Axios.get(`/api/board/list?tagId=${param}`).then(
        function (response) {
          const res = response.data;
          if (res.success === true) {
            setItemList(res.data);
          } else {
            alert(res.message);
          }
        },
      );
    }
    void tagList();
    void tagItemList();
  }, [props.tags]);
  const changeTag = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.className.includes("active")) {
      props.delTag(e.currentTarget.id);
    } else {
      props.setTag(e.currentTarget.id);
    }
  };
  const allDelete = (e: MouseEvent<HTMLDivElement>) => {
    props.allDelTag();
  };

  return (
    <s.BoardWrapper>
      <s.Title>
        <s.Icon />
        인기 키워드
        <s.descript>상위 10개 태그가 표시됩니다.</s.descript>
      </s.Title>
      <s.TagList
        className="container"
        vertical={false}
        horizontal={true}
        style={{ display: "flex" }}
      >
        <s.Tags
          className={props.tags.length === 0 ? "active" : ""}
          onClick={allDelete}
        >
          전체
        </s.Tags>
        {tagList.map((tags) => (
          <s.Tags
            key={tags.id}
            className={props.tags.includes(tags.id.toString()) ? "active" : ""}
            onClick={changeTag}
            id={tags.id.toString()}
          >
            #{tags.tagName}
          </s.Tags>
        ))}
      </s.TagList>
      <BoardItem type={"list"} Items={itemList} />
    </s.BoardWrapper>
  );
}
