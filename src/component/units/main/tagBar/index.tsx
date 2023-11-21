import React from "react";
import type { MouseEvent } from "react";
import { Flex } from "antd";
import { CgSmile } from "react-icons/cg";
import * as s from "./tagBarStyle";

interface IMainProps {
  tag: string;
  setTag: (value: string) => void;
}
export default function MainTagBar(props: IMainProps) {
  const [justify] = React.useState("center");
  const [alignItems] = React.useState("center");

  const tagArray = {
    outer: "아우터",
    top: "상의",
    bottom: "하의",
    shoes: "신발",
  };
  const changeTag = (e: MouseEvent<HTMLDivElement>) => {
    props.setTag(e.currentTarget.id);
  };
  return (
    <s.Wrapper>
      <Flex style={s.boxStyle} justify={justify} align={alignItems}>
        <s.TagBox onClick={changeTag} id="icon">
          <CgSmile style={{ verticalAlign: "middle" }}></CgSmile>
        </s.TagBox>
        {Object.entries(tagArray).map(([key, value]) => (
          <s.TagBox
            key={key}
            id={key}
            style={props.tag === key ? s.selectedTag : s.Tag}
            onClick={changeTag}
          >
            {value}
          </s.TagBox>
        ))}
      </Flex>
    </s.Wrapper>
  );
}
