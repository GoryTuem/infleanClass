import AuthTemplate from "../../src/component/units/auth/AuthTemplate";
import LoginForm from "../../src/component/units/auth/loginForm";

export default function LoginPage() {
  return (
    <AuthTemplate type="login">
      <LoginForm></LoginForm>
    </AuthTemplate>
  );
}
