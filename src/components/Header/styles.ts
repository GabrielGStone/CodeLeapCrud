import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
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
  color: #f00;
  border-color: #f00;
  padding: 6px;
  position: relative;
  align-self: center;
  font-weight: 600;
  cursor: pointer;
`;
