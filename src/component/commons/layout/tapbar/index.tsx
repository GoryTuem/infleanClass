import React from "react";
import { Flex } from "antd";
import { RiHome5Line } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FaHashtag } from "react-icons/fa6";
import { HiViewList } from "react-icons/hi";
import { useRouter } from "next/router";
import * as s from "./tapberStyle";

export default function LayoutFooter() {
  const [justify] = React.useState("space-around");
  const [alignItems] = React.useState("center");
  const router = useRouter();

  const goLogin = () => {
    void router.push("/login");
  };
  const goHome = () => {
    void router.push("/");
  };

  return (
    <s.Wrapper>
      <Flex style={s.boxStyle} justify={justify} align={alignItems}>
        <span style={{ cursor: "pointer" }}>
          <HiViewList color="white" style={s.iconStyle}></HiViewList>
        </span>
        <span style={{ cursor: "pointer" }}>
          <FaHashtag color="white" style={s.iconStyle}></FaHashtag>
        </span>
        <span style={{ cursor: "pointer" }}>
          <RiHome5Line
            color="white"
            style={s.iconStyle}
            onClick={goHome}
          ></RiHome5Line>
        </span>
        <span style={{ cursor: "pointer" }}>
          <FcLike color="white" style={s.iconStyle}></FcLike>
        </span>
        <span style={{ cursor: "pointer" }} onClick={goLogin}>
          <IoPersonSharp color="white" style={s.iconStyle}></IoPersonSharp>
        </span>
      </Flex>
    </s.Wrapper>
  );
}
