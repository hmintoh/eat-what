import styled from "styled-components";
import { font, spacing, theme } from "@/styles/tokens";

export const ResultsContainer = styled.div`
  text-align: center;
  padding: ${spacing._40} 0;
  font-size: ${font.size.xxxl};
  color: ${theme.primary.dark};
`;
