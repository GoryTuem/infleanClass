import React from "react";
import { Flex } from "antd";
import { RiHome5Line } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FaHashtag } from "react-icons/fa6";
import * as s from "./tapberStyle";
import { useMoveToPage } from "../../hooks/useMoveToPage";

export default function LayoutFooter() {
  const [justify] = React.useState("space-around");
  const [alignItems] = React.useState("center");
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <s.Wrapper>
      <Flex style={s.boxStyle} justify={justify} align={alignItems}>
        <span style={{ cursor: "pointer" }}>
          <RiHome5Line
            color="white"
            style={s.iconStyle}
            onClick={onClickMoveToPage("/")}
          ></RiHome5Line>
        </span>
        <span style={{ cursor: "pointer" }}>
          <FaHashtag
            color="white"
            style={s.iconStyle}
            onClick={onClickMoveToPage("/boards")}
          ></FaHashtag>
        </span>
        <span style={{ cursor: "pointer" }}>
          <FcLike
            color="white"
            style={s.iconStyle}
            onClick={onClickMoveToPage("/likes")}
          ></FcLike>
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={onClickMoveToPage("/myPage")}
          // onClick={onClickMoveToPage("/login")}
        >
          <IoPersonSharp color="white" style={s.iconStyle}></IoPersonSharp>
        </span>
      </Flex>
    </s.Wrapper>
  );
}
