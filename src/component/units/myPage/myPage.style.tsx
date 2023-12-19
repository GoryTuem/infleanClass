import styled from "@emotion/styled";
import { PiCaretRightThin } from "react-icons/pi";
import { BsPersonCircle } from "react-icons/bs";

export const MyPageUserWrapper = styled.div`
  padding: 15% 5% 5%;
`;

export const MyPageBodyWrapper = styled.div`
  padding: 0 5%;
`;

export const UserTitle = styled.div`
  font-size: 19px;
  color: #454545;

  & > span {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const Icon = styled(PiCaretRightThin)`
  font-size: 20px;
  vertical-align: middle;
`;

export const ProfileIcon = styled(BsPersonCircle)`
  font-size: 45px;
  vertical-align: middle;
  margin-right: 10px;
  color: #ff6e81;
`;

export const MyPageBody = styled.div``;

export const Title = styled.p`
  font-size: 17px;
  font-weight: 600;
  margin-top: 10%;
`;

export const Box = styled.div`
  padding: 5%;
  border: 1px solid #dde2e6;
  border-radius: 8px;
  margin-top: 5%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  height: 66px;
`;

export const BoxItem = styled.a`
  line-height: 18px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  color: #454545;
`;

export const Hr = styled.hr`
  width: 1px;
  height: 100%;
  border: 1px solid #dde2e6;
`;

export const EventBanner = styled.div`
  background-color: rgba(36, 39, 41, 0.05);
  border-radius: 8px;
  margin: 5px 5px;
  height: 54px;
  padding: 0px 17px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 600;
  color: #454545;
`;

export const BannerSpan = styled.span`
  display: inline-block;
  padding: 5px 12px;
  background-color: rgb(36, 39, 41);
  color: rgb(255, 255, 255);
  border-radius: 100px;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Li = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
`;
export const Button = styled.button`
  display: block;
  position: relative;
  outline: none;
  padding: 16px;
  width: 100%;
  text-align: left;
  background-color: transparent;
  cursor: pointer;
  border: 0;

  &::after {
    display: block;
    position: absolute;
    right: 16px;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ededed;
    content: "";
  }
`;

export const ButtonIcon = {
  fontSize: "24px",
  verticalAlign: "middle",
  marginRight: "10px",
};
export const ButtonArrowIcon = styled(PiCaretRightThin)`
  float: right;
  color: #6e6e6e;
  font-size: 20px;
  vertical-align: middle;
`;

export const ButtonText = styled.span`
  display: inline-block;
  line-height: 28px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #212529;
  vertical-align: middle;
`;
