import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 20px 0;
`;
export const TagBox = styled.span`
  height: 32px;
  border-radius: 15px;
  font-size: 13px;
  line-height: 31px;
  padding: 0px 10px;
  word-break: keep-all;
  white-space: nowrap;
  color: rgb(78, 78, 78);
  cursor: pointer;
  margin: 0 5px;
  background-color: #f8f9fb;

  &.active {
    color: white;
    background-color: #ff6e81;
    font-weight: 600;
  }
`;
export const boxStyle = {
  width: "100%",
  height: 60,
  borderRadius: 6,
};
