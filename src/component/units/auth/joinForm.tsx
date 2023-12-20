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
import useDidMountEffect from "../../commons/hooks/useDidMountEffect";
import axios from "axios";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  const [inputValue, setInputValue] = useState({
    email: "", // 입력된 아이디 데이터
    emailValid: false, // 아이디 정규식, 중복 체크 여부
    password: "", // 입력된 패스워드 데이터
    passwordCheck: "", // 입력된 패스워드 확인 데이터
    passwordValid: false, // 패스워드 정규식 충족 여부
    userName: "", // 입력된 사용자 이름 데이터
    nickname: "", // 입력된 닉네임 데이터
    nicknameValid: false, // 닉네임 정규식 충족 여부
    phone: "", // 휴대폰 번호
    agree: false, // 정보 제공 동의 여부
  });

  const [alertMessage, setAlertMessage] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  });

  const buttonState =
    inputValue.email &&
    inputValue.emailValid &&
    inputValue.password &&
    inputValue.passwordCheck &&
    inputValue.passwordValid &&
    inputValue.userName &&
    inputValue.nickname &&
    inputValue.nicknameValid &&
    inputValue.phone &&
    inputValue.agree;

  //이메일 검사
  useDidMountEffect(() => {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

    let checkValid = true;
    let alertMsg = "";
    if (!emailRegEx.test(inputValue.email)) {
      checkValid = false;
      alertMsg = "이메일 형식을 확인해 주세요.";
    }

    setInputValue((prev) => ({
      ...prev,
      emailValid: checkValid,
    }));
    setAlertMessage((prev) => ({
      ...prev,
      email: alertMsg,
    }));
  }, [inputValue.email]);

  //비밀번호 검사
  useDidMountEffect(() => {
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

    let checkValid = true;
    let alertMsg = "";
    let checkAlertMsg = "";
    if (!passwordRegEx.test(inputValue.password)) {
      checkValid = false;
      alertMsg =
        "비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요.";
    }
    if (inputValue.password !== inputValue.passwordCheck) {
      checkValid = false;
      checkAlertMsg = "비밀번호가 일치하지 않습니다.";
    }

    setInputValue((prev) => ({
      ...prev,
      passwordValid: checkValid,
    }));
    setAlertMessage((prev) => ({
      ...prev,
      password: alertMsg,
      passwordCheck: checkAlertMsg,
    }));
  }, [inputValue.password, inputValue.passwordCheck]);

  //닉네임 검사
  useDidMountEffect(() => {
    const exp = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;

    let checkValid = true;
    let alertMsg = "";
    if (!exp.test(inputValue.nickname)) {
      checkValid = false;
      alertMsg = "닉네임 형식을 확인해 주세요.";
    }

    setInputValue((prev) => ({
      ...prev,
      nicknameValid: checkValid,
    }));
    setAlertMessage((prev) => ({
      ...prev,
      nickname: alertMsg,
    }));
  }, [inputValue.nickname]);

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

    let checkValid = false;

    if (
      smallCheckBoxs.filter((item) => item.value === "check1" && item.checked)
        .length > 0
    ) {
      checkValid = true;
    }

    setInputValue((prev) => ({
      ...prev,
      agree: checkValid,
    }));
  }, [smallCheckBoxs]);

  const join = async () => {
    const param = {
      mem_email: inputValue.email,
      mem_name: inputValue.userName,
      mem_nickname: inputValue.nickname,
      mem_password: inputValue.password,
      mem_phone: inputValue.phone,
    };

    axios
      .post("http://43.200.6.109:8080/api/auth/join", param)
      .then(function (response) {
        void router.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <s.Form>
      <Form>
        <Form.Group
          as={Row}
          className="mb-3 w-100"
          controlId="formPlaintextEmail"
        >
          <Col sm style={s.bottomLine}>
            <SlEnvolope style={{ width: "4%" }}></SlEnvolope>
            <Form.Control
              type="email"
              placeholder="email@example.com"
              onChange={(e) => {
                setInputValue({ ...inputValue, email: e.currentTarget.value });
              }}
              style={{ border: "none" }}
            />
          </Col>
          {!inputValue.emailValid && (
            <s.AlertMsg>{alertMessage.email}</s.AlertMsg>
          )}
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 w-100"
          controlId="formPlaintextPassword"
        >
          <Col sm style={s.bottomLine}>
            <SlLock style={{ width: "4%" }}></SlLock>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해주세요."
              style={{ border: "none" }}
              onChange={(e) => {
                setInputValue({
                  ...inputValue,
                  password: e.currentTarget.value,
                });
              }}
            />
          </Col>
          {!inputValue.passwordValid && alertMessage.password && (
            <s.AlertMsg>{alertMessage.password}</s.AlertMsg>
          )}
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 w-100"
          controlId="formPlaintextPasswordCheck"
        >
          <Col sm style={s.bottomLine}>
            <SlLock style={{ width: "4%" }}></SlLock>
            <Form.Control
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              style={{ border: "none" }}
              onChange={(e) => {
                setInputValue({
                  ...inputValue,
                  passwordCheck: e.currentTarget.value,
                });
              }}
            />
          </Col>
          {!inputValue.passwordValid && alertMessage.passwordCheck && (
            <s.AlertMsg>{alertMessage.passwordCheck}</s.AlertMsg>
          )}
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 w-100"
          controlId="formPlaintextName"
        >
          <Col sm style={s.bottomLine}>
            <SlUserFemale style={{ width: "4%" }}></SlUserFemale>
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요"
              style={{ border: "none" }}
              onChange={(e) => {
                setInputValue({
                  ...inputValue,
                  userName: e.currentTarget.value,
                });
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 w-100"
          controlId="formPlaintextNickname"
        >
          <Col sm style={s.bottomLine}>
            <SlUserFemale style={{ width: "4%" }}></SlUserFemale>
            <Form.Control
              type="text"
              placeholder="닉네임은 영문, 숫자, 특수문자(-, _)만 가능합니다."
              style={{ border: "none" }}
              onChange={(e) => {
                setInputValue({
                  ...inputValue,
                  nickname: e.currentTarget.value,
                });
              }}
            />
          </Col>
          {!inputValue.nicknameValid && (
            <s.AlertMsg>{alertMessage.nickname}</s.AlertMsg>
          )}
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 w-100"
          controlId="formPlaintextPhone"
        >
          <Col sm style={s.bottomLine}>
            <SlScreenSmartphone style={{ width: "4%" }}></SlScreenSmartphone>
            <Form.Control
              type="text"
              placeholder="휴대폰 번호를 -없이 입력해주세요"
              style={{ border: "none" }}
              onChange={(e) => {
                setInputValue({
                  ...inputValue,
                  phone: e.currentTarget.value
                    .replace("-", "")
                    .replace(/[^0-9]/g, ""),
                });
              }}
              value={inputValue.phone}
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
            type="button"
            style={{
              backgroundColor: "#313842",
              fontSize: "20px",
              marginTop: "20px",
            }}
            disabled={!buttonState}
            onClick={join}
          >
            회원가입
          </Button>
        </div>
      </Form>
    </s.Form>
  );
}
