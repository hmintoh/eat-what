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
  padding: 5rem 0;
  margin: auto;
`;

export const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: ${font.size.l};
`;

export const Section = styled.section`
  width: 100%;
  max-width: 800px;
  padding: 0 ${spacing._16};
`;
