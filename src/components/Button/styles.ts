import styled from "styled-components";

export const CustomButton = styled.button`
  width: 120px;
  height: 32px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  border-radius: 8px;
  color: #fff;
  background-color: #7695ec;
  border: 1px solid #7695ec;
  align-self: flex-end;
  justify-self: flex-end;
  margin-left: 16px;
  :hover {
    filter: brightness(85%);
  }
  :disabled {
    filter: grayscale(1);
  }
`;
