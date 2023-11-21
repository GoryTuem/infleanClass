import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutTapbar from "./tapbar";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";
import { Container } from "../../../../styles/emotion";

// 제외하고싶은 경로 지정
const HIDDEN_HEADERS = ["/login", "/join"];
interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  // 현재 주소가 제외하고싶은 경로에 포함되는지 체크
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      <Container>
        {!isHiddenHeader && <LayoutHeader />}
        {/* 메인에서만 배너 노출 */}
        {router.asPath === "/" && <LayoutBanner />}
        {router.asPath === "/" && <LayoutNavigation />}
        <div>{props.children}</div>
        {router.asPath === "/" && <LayoutFooter />}
        <div style={{ height: "60px" }}></div>
        <LayoutTapbar />
      </Container>
    </>
  );
}
