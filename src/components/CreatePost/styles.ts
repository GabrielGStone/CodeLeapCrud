import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  min-width: 56vw;
  flex-direction: column;
  border: 1px solid #999;
  border-radius: 16px;
  margin-bottom: 24px;

  @media (max-width: 1000px) {
    min-width: 87.5vw;
    max-width: 90vw;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 24px;
`;
