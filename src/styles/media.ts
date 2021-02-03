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
  return `@media (max-width: ${getSizeFromBreakpoint(breakpoint)})`;
}

function greaterThan(breakpoint: Breakpoints) {
  return `@media (min-width: ${getSizeFromBreakpoint(breakpoint)})`;
}

export default {
  lessThan,
  greaterThan,
};
