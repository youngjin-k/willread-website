import { css } from '@emotion/react';
import normalize from './normalize';

const baseCSS = css`
  @import url("https://fonts.googleapis.com/earlyaccess/notosanskr.css");

  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  ${normalize};
`;

export default baseCSS;
