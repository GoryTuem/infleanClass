import * as s from "./authStyle";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import axios from "axios";
import { useRouter } from "next/router";
import { useUserStore } from "../../commons/store";

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState(""); //ID 저장
  const [userPasswd, setUserPass] = useState(""); //Pass 저장
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setUserEmail(e.target.value);
  }

  function handlePasswd(e: ChangeEvent<HTMLInputElement>) {
    setUserPass(e.target.value);
  }

  const { setUser } = useUserStore();

  const onClickLogin = async () => {
    const param = {
      mem_email: userEmail,
      mem_password: userPasswd,
    };

    await axios
      .post("http://43.200.6.109:8080/api/auth/login", param)
      .then(function (response) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        setUser(response.data);
        void router.push("/");
      })
      .catch(function (error) {
        console.log(error);
        alert("로그인에 실패하였습니다.");
      });
  };

  return (
    <s.Form>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Col sm>
            <Form.Control
              type="email"
              placeholder="이메일"
              onChange={handleEmail}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col sm>
            <Form.Control
              type="password"
              placeholder="비밀번호"
              onChange={handlePasswd}
            />
          </Col>
        </Form.Group>
        <br />

        <div className="d-grid gap-1">
          <Button
            variant="secondary"
            type="button"
            style={{ backgroundColor: "#313842", fontSize: "20px" }}
            onClick={onClickLogin}
          >
            로그인
          </Button>
        </div>
        <s.LoginBottom>
          <s.LoginText>아이디 찾기 |</s.LoginText>
          <s.LoginText>비밀번호 찾기 |</s.LoginText>
          <s.LoginText onClick={onClickMoveToPage("/join")}>
            회원가입
          </s.LoginText>
        </s.LoginBottom>
      </Form>
    </s.Form>
  );
}
