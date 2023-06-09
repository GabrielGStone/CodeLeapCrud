import styled from "styled-components";

export const PostHeader = styled.h4`
  display: flex;
  justify-content: space-between;
  background-color: #7695ec;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  padding: 24px;
  border-radius: 14px 14px 0px 0px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 16px 24px;
  @media (max-width: 1000px) {
    max-width: 340px;
  }
`;

export const PostName = styled.p`
  color: #777777;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

export const PostTime = styled.p`
  color: #777777;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

export const PostContent = styled.p`
  padding: 0 24px 24px 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  overflow-wrap: break-word;
  max-width: 50vw;

  @media (max-width: 1000px) {
    max-width: 340px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px #999 solid;
  border-radius: 0 0 16px 16px;
  margin-bottom: 24px;
  border-top: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  overflow-wrap: break-word;
  max-width: 50vw;
  @media (max-width: 1000px) {
    max-width: 200px;
  }
`;
