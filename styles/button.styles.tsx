import styled from "styled-components";
import { font, spacing, theme } from "@/styles/tokens";

export const ButtonWrapper = styled.button`
  padding: ${spacing._16};
  border-radius: ${spacing._4};
  background-color: ${theme.primary.reg};
  border: 2px solid ${theme.primary.reg};
  font-size: ${font.size.m};
  min-width: 100px;
  font-weight: ${font.weight.semi};

  &:hover {
    cursor: pointer;
    border: 2px solid ${theme.secondary.reg};
  }
`;
