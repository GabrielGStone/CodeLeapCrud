import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: #fff;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const PostsBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
