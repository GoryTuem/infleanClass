import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
`;
export const TagBox = styled.span`
  height: 32px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 8px;
  font-size: 14px;
  line-height: 28px;
  padding: 0px 10px;
  word-break: keep-all;
  white-space: nowrap;
  color: rgb(153, 153, 153);
  cursor: pointer;
  margin: 0 5px;
`;
export const boxStyle = {
  width: "100%",
  height: 60,
  borderRadius: 6,
};

export const selectedTag = {
  backgroundColor: "rgb(238, 247, 255)",
  color: "rgb(34, 149, 255)",
  fontWeight: 600,
};
