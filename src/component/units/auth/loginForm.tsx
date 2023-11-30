import * as s from "./authStyle";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

export default function LoginForm() {
  const [buttonState, setButtonState] = useState(true);
  const [userEmail, setUserEmail] = useState(""); //ID 저장
  const [userPasswd, setUserPass] = useState(""); //Pass 저장
  const { onClickMoveToPage } = useMoveToPage();

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    const idValue = e.target.value;
    setUserEmail(e.target.value);
    idValue.includes("@") && userPasswd.length >= 5
      ? setButtonState(false)
      : setButtonState(true);
  }

  function handlePasswd(e: ChangeEvent<HTMLInputElement>) {
    const passValue = e.target.value;
    setUserPass(e.target.value);
    userEmail.includes("@") && passValue.length >= 5
      ? setButtonState(false)
      : setButtonState(true);
  }

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
            type="submit"
            style={{ backgroundColor: "#313842", fontSize: "20px" }}
            disabled={buttonState}
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
