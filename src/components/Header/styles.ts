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
  border: 1px solid #f00;
  border-radius: 16px;
  color: #f00;
  background-color: #fff;
  padding: 6px;
  position: relative;
  align-self: center;
  font-weight: 600;
  cursor: pointer;
  :hover {
    filter: brightness(85%);
  }
`;
