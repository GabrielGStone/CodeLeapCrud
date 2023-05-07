import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const LayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20%;
  background-color: #ddd;
  min-height: 100vh;

  @media (max-width: 1000px) {
    padding: 0px;
  }
`;

export const Toast = styled(ToastContainer)`
  --toastify-color-progress-success: #7695ec;
  --toastify-icon-color-success: #7695ec;
`;
