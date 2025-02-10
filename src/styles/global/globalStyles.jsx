import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeight};
    font-size: ${({ theme }) => theme.typography.fontSize};
    line-height: ${({ theme }) => theme.typography.lineHeight};
    background: ${({ theme }) => theme.colors.oxfordBlue}; 
  }

  ul {
    list-style: none;
  }

  img {
    width: 100%;
    display: block;
    max-width: 100%; 
  }

  a {
    color: unset;  
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.easeInOut};
  }

  /* Button styles */
  button {
    border: none;
    pointer-events: pointer;
    background: none;
    transition: ${({ theme }) => theme.transitions.easeInOut};
    outline: 0;

    &:hover {
      opacity: 0.9;
    }
  }

  .scrollbar {
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 100vh !important;
      background-color: ${({ theme }) => theme.colors.majorelleBlue}; 
      outline: 1px solid rgba(0, 0, 0, 0.02);
      outline-offset: -1px;
    }
  }
`;
