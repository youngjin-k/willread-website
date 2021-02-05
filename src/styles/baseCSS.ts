import { css } from '@emotion/react';
import markdown from './markdown';
import normalize from './normalize';

const baseCSS = css`
  @import url("https://fonts.googleapis.com/earlyaccess/notosanskr.css");

  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
  }

  #__next {
    position: relative;
    width: 100%;
    height: 100%;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  ${normalize};
  ${markdown};
`;

export default baseCSS;
