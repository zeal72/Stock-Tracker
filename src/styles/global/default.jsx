import styled, { css } from "styled-components";
import { media } from "../theme/theme";

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const BlockTitle = styled.div`
  margin-bottom: 24px;

  h3 {
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};

    ${media.xxl`
      font-size: 24px;
    `}
    ${media.lg`
      font-size: 20px;
    `}
  }
`;

export const BlockWrapStyles = css`
  background: ${({ theme }) => theme.colors.spaceCadet1};
  border-radius: 20px;
  padding: 24px;

  ${media.xxxl`
    padding: 16px;
  `}
`;

export const BlockContentWrap = styled.div`
  ${BlockWrapStyles};
`;

export const BlockIconBtn = styled.button`
  background: ${({ theme }) => theme.colors.spaceCadet1};
  border-radius: 10px;
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};

  svg {
    width: 24px;  
    height: 24px;
  }
`;
