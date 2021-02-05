import { css } from '@emotion/react';
import markdown from './markdown';
import normalize from './normalize';

const baseCSS = css`
  /* @import url("https://fonts.googleapis.com/earlyaccess/notosanskr.css?display=swap"); */

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    src: url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2")
        format("woff2"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff")
        format("woff"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf")
        format("opentype");
    font-display: swap;
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    src: url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2")
        format("woff2"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff")
        format("woff"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf")
        format("opentype");
    font-display: swap;
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    src: url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2")
        format("woff2"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff")
        format("woff"),
      url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf")
        format("opentype");
    font-display: swap;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
  }

  #__next {
    position: relative;
    width: 100%;
    height: 100%;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  ${normalize};
  ${markdown};
`;

export default baseCSS;
