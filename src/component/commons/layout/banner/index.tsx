import { Carousel } from "antd";
import * as s from "./bannerStyle";

export default function LayoutBanner() {
  return (
    <s.Wrapper>
      <Carousel autoplay autoplaySpeed={2000}>
        <div>
          <s.ImageItem src="/image/banner1.jpg"></s.ImageItem>
        </div>
        <div>
          <s.ImageItem src="/image/banner2.jpg"></s.ImageItem>
        </div>
        <div>
          <s.ImageItem src="/image/banner3.jpg"></s.ImageItem>
        </div>
      </Carousel>
    </s.Wrapper>
  );
}
