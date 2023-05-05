import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
`;
export const TitleText = styled.div``;

export const Input = styled.input`
  display: flex;
  justify-content: start;
  height: 32px;
  width: 100%;
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

export const TextArea = styled.textarea`
  display: flex;
  justify-content: start;
  height: 72px;
  width: 100%;
  border-radius: 8px;
  border: solid 1px #777;
  padding: 8px 11.2px;
  margin: 8px 0 16px 0;
  outline: none;
  resize: none;
  ::placeholder {
    color: #cccccc;
    opacity: 1;
  }
`;
