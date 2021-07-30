import styled from "styled-components";
import { font, spacing, theme } from "@/styles/tokens";

export const ButtonWrapper = styled.button`
  padding: ${spacing._16};
  border-radius: ${spacing._4};
  background-color: ${theme.secondary.light};
  border: 1px solid ${theme.secondary.reg};
  font-size: inherit;
  min-width: 100px;
  font-weight: bold;

  button:hover {
    cursor: pointer;
    background-color: ${theme.primary.light};
  }
`;
