import styled from "@emotion/styled";
import ScrollContainer from "react-indiana-drag-scroll";
import { FaHotjar } from "react-icons/fa";
import { PiHeartStraightThin, PiHeartStraightFill } from "react-icons/pi";

export const BoardWrapper = styled.div`
  padding: 0 10px;
  margin-top: 40px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const TagList = styled(ScrollContainer)`
  margin-top: 20px;
`;
export const Tags = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 15px;
  padding: 9px 11px;
  margin: 3px;
  color: #959292;
  white-space: nowrap;

  &.active {
    background-color: #3b3b3b;
    color: #ffffff;
    font-weight: 600;
  }
`;

export const BoardItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0px, 1fr));
  margin-top: 15px;
  grid-column-gap: 3px;
  padding: 0 15px;
`;
export const ItemBody = styled.div`
  width: 100%;
  position: relative;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 310px;
`;

export const Icon = styled(FaHotjar)`
  color: #ff6e81;
  font-size: 17px;
  margin-right: 5px;
  vertical-align: middle;
`;

export const HeartIcon = styled(PiHeartStraightThin)`
  font-size: 30px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: #ffffff;
`;

export const HeartIconFill = styled(PiHeartStraightFill)`
  font-size: 30px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: #ff6e81;
`;

export const Summary = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(110, 110, 110);
  display: -webkit-box;
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
  padding: 0 5px;
`;

export const UserId = styled.span`
  margin: 5px 0;
  font-size: 13px;
  font-weight: 600;
`;

export const descript = styled.p`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12px;
  color: #898989;
`;
