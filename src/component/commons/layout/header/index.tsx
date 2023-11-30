import React from "react";
import { Flex } from "antd";
import { TbPencilPlus } from "react-icons/tb";
import * as s from "./headerStyle";
import { useMoveToPage } from "../../hooks/useMoveToPage";

export default function LayoutHeader() {
  const [justify] = React.useState("space-between");
  const [alignItems] = React.useState("center");
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <s.Wrapper>
      <Flex style={s.box} justify={justify} align={alignItems}>
        <div style={s.logo} onClick={onClickMoveToPage("/")}>
          WOMEN SNAP
        </div>
        <div>
          <s.HeaderWrite onClick={onClickMoveToPage("/boards/new")}>
            <TbPencilPlus style={s.icon} />
          </s.HeaderWrite>
        </div>
      </Flex>
    </s.Wrapper>
  );
}
