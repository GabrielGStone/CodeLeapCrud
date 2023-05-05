import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  padding: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7695ec;
  color: #fff;
`;

export const HeaderText = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`;

export const LogoutButton = styled.button`
  background-color: #f00;
  color: #fff;
  border: 1px solid #f00;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  border-radius: 8px;
  width: 120px;
  height: 32px;
  cursor: pointer;
  :hover {
    filter: brightness(85%);
  }
`;
