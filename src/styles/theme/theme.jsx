import { css } from "styled-components";

export const theme ={
  colors: {
    spaceCadet1: "#111C4A",
    spaceCadet2: "#1B256F",
    oxfordBlue: "#001437",
    delftBlue: "#293157",
    white: "#ffffff",
    black: "#000000",
    majorelleBlue: "#7751FF",
    pictonBlue: "#3988F8",
    paleAzure: "#64A2FF",
    powderBlue: "#A3AAD3",
    success: "#01B574",
    danger: "#E50504",
    warning: "#FFCE20",
    frenchGray: "#8C8B9D",
  },
  typography: {
    fontFamily: "'CM Sans', sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.6,
  },
  breakpoints: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1440px",
    xxxl: "1600px",
  },
  transitions: {
    easeInOut: "all 0.3s ease-in-out",
  },
};

export const media = {
  xxxl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xxxl}) {
      ${css(...args)}
    }
  `,
  xxl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      ${css(...args)}
    }
  `,
  xs: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
      ${css(...args)}
    }
    `,
  };