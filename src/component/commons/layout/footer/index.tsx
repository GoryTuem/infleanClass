import React from "react";
import { SiKakaotalk, SiFacebook, SiTwitter } from "react-icons/si";
import * as s from "./footerStyle";

export default function LayoutHeader() {
  return (
    <s.Wrapper>
      <s.FooterNav>
        <div>
          <div>
            <s.FooterA href="/">이용약관</s.FooterA>
            <s.FooterA href="/">개인정보처리방침</s.FooterA>
          </div>
          <div style={{ marginTop: "10px" }}>
            <s.FooterA>
              <SiKakaotalk style={{ verticalAlign: "top" }}></SiKakaotalk>
            </s.FooterA>
            <s.FooterA>
              <SiFacebook style={{ verticalAlign: "top" }}></SiFacebook>
            </s.FooterA>
            <s.FooterA>
              <SiTwitter style={{ verticalAlign: "top" }}></SiTwitter>
            </s.FooterA>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #ebeef2",
            marginTop: "20px",
            padding: "20px 0",
          }}
        >
          <s.FooterContents>고객센터 010-7760-8253</s.FooterContents>
          <s.FooterContents2>
            <span style={{ fontWeight: "bold", fontSize: "13px" }}>
              영업시간.
            </span>{" "}
            AM 10:00 ~ PM 17:00 (주말 및 공휴일 휴무)
          </s.FooterContents2>
          <s.FooterContents2>
            <span style={{ fontWeight: "bold", fontSize: "13px" }}>
              점심시간.
            </span>{" "}
            PM 12:30 ~ PM 13:30
          </s.FooterContents2>
          <s.FooterContents2>
            <span style={{ fontWeight: "bold", fontSize: "13px" }}>
              고객문의.
            </span>{" "}
            thgmlxn@naver.com
          </s.FooterContents2>
        </div>
      </s.FooterNav>
    </s.Wrapper>
  );
}
