import styled from "styled-components";

export const Container = styled.div`
  font-family: "montserrat";
  position: relative;
  font-size: 22px;
  letter-spacing: 0.035em;
  background-color: #000;
  color: #fff;
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderText = styled.div`
  cursor: pointer;

`;

export const LogoutButton = styled.button`
  color:#f00;
  border-color:#f00;
  border-radius: 15px;
  background-color: #000;
  height: 30%;
  position: relative;
  align-self: center;
  cursor: pointer;

`