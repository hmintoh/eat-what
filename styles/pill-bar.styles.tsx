import styled from "styled-components";
import { spacing, theme } from "@/styles/tokens";

export const PillBarWrapper = styled.div`
  display: flex;
  padding-bottom: ${spacing._16};

  & > :not(:last-child) {
    margin-right: ${spacing._8};
  }
`;

export const Pill = styled.button`
  padding: ${spacing._2} ${spacing._8};
  border-radius: ${spacing._8};
  border: ${spacing._1} solid ${theme.secondary.reg};
  background: ${(props) => (props.active ? theme.secondary.light : "none")};

  &:hover {
    cursor: pointer;
  }
`;
