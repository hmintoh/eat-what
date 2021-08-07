import styled from "styled-components";
import { font, spacing, theme } from "@/styles/tokens";

export const BodyWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.primary.light};
`;

export const MainWrapper = styled.main`
  padding: ${spacing._40} 0;
  margin: auto;

  h1 {
    font-size: ${font.size.xxl};
  }

  h2 {
    font-size: ${font.size.xl};
  }
`;

export const Description = styled.div`
  text-align: center;
  font-size: ${font.size.l};
  font-weight: ${font.weight.semi};
`;

export const Section = styled.section`
  width: 100%;
  max-width: 800px;
  padding: ${spacing._20} ${spacing._16};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
