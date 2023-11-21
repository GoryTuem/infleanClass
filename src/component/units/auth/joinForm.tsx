import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  SlEnvolope,
  SlLock,
  SlScreenSmartphone,
  SlUserFemale,
} from "react-icons/sl";
import * as s from "./authStyle";

export default function LoginPage() {
  const [buttonState, setButtonState] = useState(true);
  const [userEmail, setUserEmail] = useState(""); //ID 저장
  const [userPasswd, setUserPass] = useState(""); //Pass 저장
  const [userName, setUserName] = useState(""); //이름
  const [userPhone, setUserPhone] = useState(""); //휴대폰 번호 저장

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    const idValue = e.target.value;
    setUserEmail(e.target.value);
    validationCheck(idValue, userPasswd, userName, userPhone);
  }

  function handlePasswd(e: ChangeEvent<HTMLInputElement>) {
    const passValue = e.target.value;
    setUserPass(e.target.value);
    validationCheck(userEmail, passValue, userName, userPhone);
  }

  function handleUserName(e: ChangeEvent<HTMLInputElement>) {
    const nameValue = e.target.value;
    setUserName(e.target.value);
    validationCheck(userEmail, userPasswd, nameValue, userPhone);
  }

  function handleUserPhone(e: ChangeEvent<HTMLInputElement>) {
    e.target.value = e.target.value.replace("-", "").replace(/[^0-9]/g, "");
    const phoneValue = e.target.value;
    setUserPhone(e.target.value);
    validationCheck(userEmail, userPasswd, userName, phoneValue);
  }

  const validationCheck = (
    userEmail: string,
    userPasswd: string,
    userName: string,
    userPhone: string,
  ) => {
    userEmail.includes("@") && userPasswd.length >= 5 && userName && userPhone
      ? setButtonState(false)
      : setButtonState(true);
  };
  const [allIsChecked, setAllIsChecked] = useState(false);
  const [smallCheckBoxs, setSmallCheckBoxs] = useState([
    {
      name: "agreement",
      value: "check1",
      children: "서비스 이용약관 및 개인정보 처리방침에 동의합니다. (필수)",
      checked: false,
      className: "round small",
    },
    {
      name: "agreement",
      value: "check2",
      children: "마케팅 정보 수신에 동의합니다. (선택)",
      checked: false,
      className: "round small",
    },
  ]);

  // 체크박스 단일 선택
  const onSingleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.currentTarget.value;
    setSmallCheckBoxs(
      smallCheckBoxs.map((item) =>
        targetValue === item.value
          ? { ...item, checked: !item.checked }
          : { ...item },
      ),
    );
  };

  //체크박스 전체 선택
  const onAllCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setAllIsChecked((prev) => !prev);
    if (e.target.checked) {
      setSmallCheckBoxs(
        smallCheckBoxs.map((item) => ({ ...item, checked: true })),
      );
    } else {
      setSmallCheckBoxs(
        smallCheckBoxs.map((item) => ({ ...item, checked: false })),
      );
    }
  };

  useEffect(() => {
    setAllIsChecked(smallCheckBoxs.every((item) => item.checked));
  }, [smallCheckBoxs]);

  return (
    <s.Form>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Col sm style={s.bottomLine}>
            <SlEnvolope style={{ width: "4%" }}></SlEnvolope>
            <Form.Control
              type="email"
              placeholder="email@example.com"
              onChange={handleEmail}
              style={{ border: "none" }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Col sm style={s.bottomLine}>
            <SlLock style={{ width: "4%" }}></SlLock>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해주세요."
              style={{ border: "none" }}
              onChange={handlePasswd}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
          <Col sm style={s.bottomLine}>
            <SlUserFemale style={{ width: "4%" }}></SlUserFemale>
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요"
              style={{ border: "none" }}
              onChange={handleUserName}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
          <Col sm style={s.bottomLine}>
            <SlScreenSmartphone style={{ width: "4%" }}></SlScreenSmartphone>
            <Form.Control
              type="text"
              placeholder="휴대폰 번호를 -없이 입력해주세요"
              style={{ border: "none" }}
              onChange={handleUserPhone}
            />
          </Col>
        </Form.Group>
        <br />
        <s.TermsTitle>WOMEN SNAP 이용약관</s.TermsTitle>
        <div className="d-grid gap-1">
          <div>
            <label>
              <s.CheckBox
                type="checkbox"
                name="agreement"
                value="all"
                checked={allIsChecked}
                className="round"
                onChange={onAllCheck}
              ></s.CheckBox>
              모두 동의하기
            </label>
          </div>
          {smallCheckBoxs.map((item) => (
            <label key={item.value} style={{ marginLeft: "15px" }}>
              <s.CheckBox
                type="checkbox"
                name={item.name}
                value={item.value}
                checked={item.checked}
                className={item.className}
                onChange={onSingleCheck}
              />
              {item.children}
            </label>
          ))}
          <Button
            variant="secondary"
            type="submit"
            style={{
              backgroundColor: "#313842",
              fontSize: "20px",
              marginTop: "20px",
            }}
            disabled={buttonState}
          >
            회원가입
          </Button>
        </div>
      </Form>
    </s.Form>
  );
}
