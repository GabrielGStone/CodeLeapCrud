import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 24px;
  width: 500px;
  height: 205px;
  border-radius: 16px;
`;

export const Input = styled.input`
  height: 32px;
  width: 452px;
  border-radius: 8px;
  border: solid 1px #777;
  padding: 8px 11.2px;
  margin: 8px 0 16px 0;
  outline: none;
  ::placeholder {
    color: #cccccc;
    opacity: 1;
  }
`;

export const InputTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const SingupTitle = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 24px;
`;
