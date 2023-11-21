import React from "react";
import * as s from "./authStyle";
import "bootstrap/dist/css/bootstrap.min.css";

type userType = {
  [key: string]: string;
};

const textMap: userType = {
  login: "로그인",
  register: "회원가입",
};

interface IAuthProps {
  children: JSX.Element;
  type: string;
}
export default function AuthTemplate(props: IAuthProps) {
  const text = textMap[props.type];

  return (
    <s.Wrapper>
      <s.Title>{text}</s.Title>
      {props.children};
    </s.Wrapper>
  );
}
