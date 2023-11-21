import React from "react";
import { Flex } from "antd";
import { TbPencilPlus } from "react-icons/tb";
import * as s from "./headerStyle";

export default function LayoutHeader() {
  const [justify] = React.useState("space-between");
  const [alignItems] = React.useState("center");

  return (
    <s.Wrapper>
      <Flex style={s.box} justify={justify} align={alignItems}>
        <div style={s.logo}>WOMEN SNAP</div>
        <div>
          <span style={{ verticalAlign: "middle" }}>
            <TbPencilPlus style={s.icon} />
          </span>
        </div>
      </Flex>
    </s.Wrapper>
  );
}
