import styled from "styled-components";
import { font, spacing, theme } from "@/styles/tokens";

export const CardContainer = styled.div`
  margin: ${spacing._16} 0;
  padding: ${spacing._16};
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: ${spacing._1} solid ${theme.secondary.light};
  border-radius: ${spacing._8};
  transition: color 0.15s ease, border-color 0.15s ease;
  line-height: 1.5;

  :hover,
  :focus,
  :active {
    border-color: ${theme.primary.dark};
  }
`;

export const CardTitle = styled.p`
  margin: 0 0 ${spacing._8} 0;
  font-weight: bold;
`;

export const PillContainer = styled.div`
  margin-bottom: ${spacing._4};
  font-size: ${font.size.s};

  & > * {
    padding: ${spacing._2} ${spacing._8};
    border-radius: ${spacing._8};
    border: ${spacing._1} solid ${theme.secondary.light};
  }

  & > :not(:last-child) {
    margin-right: ${spacing._8};
  }
`;
