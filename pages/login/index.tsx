import styled from "@emotion/styled";
import { useState } from "react";
import type { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: auto;
  padding: 100px 10px;
`;
const H2Style = styled.h3`
  margin-bottom: 7px;
  color: #313842;
  font-size: 20px;
  font-weight: bold;
`;

const LoginForm = styled.div`
  margin-top: 40px;
  height: 100px;
`;

const JoinStyle = styled.div`
  text-align: center;
  margin-top: 25px;
`;

export default function LoginPage() {
  const [buttonState, setButtonState] = useState(true);
  const [userEmail, setUserEmail] = useState(""); //ID 저장
  const [userPasswd, setUserPass] = useState(""); //Pass 저장

  const router = useRouter();
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

  const goJoin = () => {
    void router.push("/join");
  };

  return (
    <Wrapper>
      <H2Style>안녕하세요</H2Style>
      <H2Style>WOMEN SNAP입니다</H2Style>
      <LoginForm>
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

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
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
          <JoinStyle>
            <a style={{ fontSize: "13px", margin: "0 4px", cursor: "pointer" }}>
              아이디 찾기 |
            </a>
            <a style={{ fontSize: "13px", margin: "0 4px", cursor: "pointer" }}>
              비밀번호 찾기 |
            </a>

            <a
              onClick={goJoin}
              style={{ fontSize: "13px", margin: "0 4px", cursor: "pointer" }}
            >
              회원가입
            </a>
          </JoinStyle>
        </Form>
      </LoginForm>
    </Wrapper>
  );
}
