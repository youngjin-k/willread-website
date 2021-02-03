import { css } from '@emotion/react';

export type Breakpoints = 'small' | 'medium' | 'large' | 'huge';

export const defaultBreakpoints: { [key in Breakpoints]: string } = {
  huge: '1440px',
  large: '1052px',
  medium: '768px',
  small: '450px',
};

function getSizeFromBreakpoint(breakpointValue: Breakpoints) {
  if (defaultBreakpoints[breakpointValue]) {
    return defaultBreakpoints[breakpointValue];
  }

  return '0';
}

function lessThan(breakpoint: Breakpoints) {
  return (...args) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint)}) {
      ${css(...args)}
    }
  `;
}

function greaterThan(breakpoint: Breakpoints) {
  return (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint)}) {
      ${css(...args)}
    }
  `;
}

function between(firstBreakpoint: Breakpoints, secondBreakpoint: Breakpoints) {
  return (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(
    firstBreakpoint,
  )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint)}) {
      ${css(...args)}
    }
  `;
}

export default {
  lessThan,
  greaterThan,
  between,
};
