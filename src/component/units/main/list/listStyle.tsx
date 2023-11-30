import styled from "@emotion/styled";

export const Row = styled.div`
  height: calc(100% + 30px);
  width: 640px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Column = styled.div`
  width: 33%;
  aspect-ratio: 5 / 5;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 3px;
`;

export const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;
