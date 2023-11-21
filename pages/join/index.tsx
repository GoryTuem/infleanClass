import AuthTemplate from "../../src/component/units/auth/AuthTemplate";
import JoinForm from "../../src/component/units/auth/joinForm";

export default function LoginPage() {
  return (
    <AuthTemplate type="register">
      <JoinForm></JoinForm>
    </AuthTemplate>
  );
}
