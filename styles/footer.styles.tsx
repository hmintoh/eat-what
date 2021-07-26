import styled from "styled-components";
import { font, spacing, theme } from "@/styles/tokens";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: ${spacing._16} 0;
  border-top: ${spacing._1} solid clear;
  display: flex;
  justify-content: center;
  background: ${theme.secondary.light};
  font-size: ${font.size.s};

  a:hover {
    text-decoration: underline;
  }
`;
