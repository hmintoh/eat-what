import styled from "styled-components";
import { font, spacing, theme } from "@/styles/tokens";

export const ResultsContainer = styled.div`
  text-align: center;
  padding: ${spacing._20} 0;
  font-size: ${font.size.xxl};
  color: ${theme.secondary.reg};
`;
