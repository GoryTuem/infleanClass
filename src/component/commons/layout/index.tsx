import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutTapbar from "./tapbar";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";
import { Container } from "../../../../styles/emotion";

// 제외하고싶은 경로 지정
const HIDDEN_FOOTER = ["/boards/new"];

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  // 현재 주소가 제외하고싶은 경로에 포함되는지 체크
  const router = useRouter();
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      <Container>
        {router.asPath === "/" && <LayoutHeader />}
        {/* 메인에서만 배너 노출 */}
        {router.asPath === "/" && <LayoutBanner />}
        <div>{props.children}</div>
        {router.asPath === "/" && <LayoutFooter />}
        <div style={{ height: "60px" }}></div>
        {!isHiddenFooter && <LayoutTapbar />}
      </Container>
    </>
  );
}
