import styled from "styled-components";
import { spacing, theme } from "@/styles/tokens";

export const LocationListWrapper = styled.div`
  padding: ${spacing._16} 0;
`;

export const ListContainer = styled.div`
  padding: ${spacing._16};
  text-align: left;
  border: ${spacing._1} solid ${theme.secondary.reg};
  border-radius: ${spacing._8};
  transition: color 0.15s ease, border-color 0.15s ease;
  line-height: 1.5;

  > * {
    display: block;
  }
`;
