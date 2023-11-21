import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-family: "NanumGothic";
  }
  .accordion-button {
    font-size: "14px";
  }

  @font-face {
    font-family: "NanumGothic";
    font-weight: normal;
    src: url("/font/NanumGothic.ttf") format("truetype");
  }

  @font-face {
    font-family: "NanumGothic";
    font-weight: bold;
    src: url("/font/NanumGothicBold.ttf") format("truetype");
  }

  @font-face {
    font-family: "NanumGothic";
    font-weight: lighter;
    src: url("/font/NanumGothicLight.ttf") format("truetype");
  }
`;
