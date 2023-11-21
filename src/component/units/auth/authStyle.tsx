import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: auto;
  padding: 100px 10px;
`;

export const Title = styled.h1`
  margin-bottom: 7px;
  color: #313842;
  font-size: 20px;
  font-weight: bold;
`;

export const Form = styled.div`
  margin-top: 40px;
`;

export const LoginBottom = styled.div`
  text-align: center;
  margin-top: 25px;
`;

export const LoginText = styled.a`
  font-size: 13px;
  margin: 0 4px;
  cursor: pointer;
  color: #313842;
  text-decoration: none;
`;

export const TermsTitle = styled.h3`
  margin-top: 70px;
  margin-bottom: 7px;
  color: #313842;
  font-size: 18px;
  font-weight: bold;
`;

export const bottomLine = {
  border: "none",
  borderBottom: "1px solid #292929",
  borderRadius: 0,
  marginLeft: "6px",
  display: "flex",
  alignItems: "center",
  height: "65px",
};

export const CheckBox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  border: 1px solid #999;
  cursor: pointer;
  margin-right: 5px;
`;
