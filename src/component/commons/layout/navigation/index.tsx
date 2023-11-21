import React from "react";
import { Flex } from "antd";
import { CgSmile } from "react-icons/cg";
import * as s from "./navigationStyle";

export default function LayoutNavigation() {
  const [justify] = React.useState("center");
  const [alignItems] = React.useState("center");
  return (
    <s.Wrapper>
      <Flex style={s.boxStyle} justify={justify} align={alignItems}>
        <s.TagBox>
          <CgSmile style={{ verticalAlign: "middle" }}></CgSmile>
        </s.TagBox>
        <s.TagBox style={s.selectedTag}>아우터</s.TagBox>
        <s.TagBox>상의</s.TagBox>
        <s.TagBox>하의</s.TagBox>
        <s.TagBox>신발</s.TagBox>
      </Flex>
    </s.Wrapper>
  );
}
