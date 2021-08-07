import styled from "styled-components";
import { font, spacing, theme } from "@/styles/tokens";

export const ResultsContainer = styled.div`
  text-align: center;
  padding-top: ${spacing._40};
  font-size: ${font.size.xxxl};
  color: ${theme.primary.dark};
  line-height: 1.3;
`;
