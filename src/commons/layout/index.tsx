import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import Layoutnavigation from "./navigation";
import Layoutfooter from "./footer";
import { useRouter } from "next/router";

// 제외하고싶은 경로 지정
const HIDDEN_HEADERS = [
  "/section13/13-02-library-star",
  "/section13/13-03-library-address",
];
interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  // 현재 주소가 제외하고싶은 경로에 포함되는지 체크
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {/* 제외 대상 주소에 헤더 숨기기 */}
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <Layoutnavigation />
      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ width: "20%", background: "pink" }}>사이드바</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <Layoutfooter />
    </>
  );
}
